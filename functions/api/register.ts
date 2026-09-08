interface Env {
  TO_EMAIL?: string;
  RESEND_API_KEY?: string;
  TURNSTILE_SECRET_KEY?: string;
}

interface EventContext {
  request: Request;
  env: Env;
}

export async function onRequestPost(context: EventContext): Promise<Response> {
  const { request, env } = context;

  try {
    const contentType = request.headers.get('content-type') || '';
    let payload: any = {};

    if (contentType.includes('application/json')) {
      payload = await request.json();
    } else {
      const formData = await request.formData();
      payload = {
        fullname: String(formData.get('fullname') || ''),
        email: String(formData.get('email') || ''),
        phone: formData.get('phone') ? String(formData.get('phone')) : undefined,
        role: String(formData.get('role') || ''),
        message: formData.get('message') ? String(formData.get('message')) : undefined,
        consent: formData.get('consent') === 'on' || formData.get('consent') === 'true',
        subject: formData.get('subject') ? String(formData.get('subject')) : undefined,
        company: formData.get('company') ? String(formData.get('company')) : undefined,
        'cf-turnstile-response': formData.get('cf-turnstile-response')
          ? String(formData.get('cf-turnstile-response'))
          : undefined,
      };
    }

    // 1. Honeypot check
    if (payload.company && payload.company.trim() !== '') {
      return new Response(JSON.stringify({ success: true, message: 'Received' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // 2. Validation
    const fullname = (payload.fullname || '').trim();
    const email = (payload.email || '').trim();
    const role = (payload.role || '').trim();
    const consent = Boolean(payload.consent);

    if (!fullname || !email || !role) {
      return new Response(
        JSON.stringify({ error: 'Please add your name, email and select who you are.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: 'Please enter a valid email address.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    if (!consent) {
      return new Response(
        JSON.stringify({ error: 'Please tick the consent box so we can be in touch.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // 3. Turnstile verification
    const turnstileSecret = env.TURNSTILE_SECRET_KEY;
    const turnstileToken = payload['cf-turnstile-response'];

    if (turnstileSecret && turnstileToken) {
      const verifyRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          secret: turnstileSecret,
          response: turnstileToken,
        }),
      });

      const verifyData = (await verifyRes.json()) as { success: boolean };
      if (!verifyData.success) {
        return new Response(
          JSON.stringify({ error: 'Security verification failed. Please try again.' }),
          { status: 403, headers: { 'Content-Type': 'application/json' } }
        );
      }
    }

    // 4. Email delivery setup
    const toEmail = env.TO_EMAIL || 'admin@renovatms.com';
    const emailSubject = payload.subject || `Renova TMS interest: ${role}`;
    const emailBody = [
      'New registration of interest received via renovatms.com placeholder site:',
      '',
      `Full Name: ${fullname}`,
      `Email: ${email}`,
      `Phone: ${payload.phone || 'Not provided'}`,
      `I am a: ${role}`,
      `Message: ${payload.message || 'None provided'}`,
      `Consent: Yes (agreed to privacy statement)`,
      `Submitted: ${new Date().toUTCString()}`,
    ].join('\n');

    const resendApiKey = env.RESEND_API_KEY;

    if (resendApiKey) {
      const emailRes = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Renova TMS <notifications@renovatms.com>',
          to: [toEmail],
          subject: emailSubject,
          text: emailBody,
          reply_to: email,
        }),
      });

      if (!emailRes.ok) {
        const errText = await emailRes.text();
        console.error('Resend delivery failed:', errText);
      }
    } else {
      console.log('--- [PREVIEW MODE FORM SUBMISSION] ---');
      console.log(`To: ${toEmail}`);
      console.log(`Subject: ${emailSubject}`);
      console.log(emailBody);
      console.log('---------------------------------------');
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Details received successfully.' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error: any) {
    console.error('Registration submission error:', error);
    return new Response(
      JSON.stringify({ error: 'Sorry, something went wrong processing your request.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
