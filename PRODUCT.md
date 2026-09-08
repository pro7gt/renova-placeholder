# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary audiences:
- **Clinicians and referrers**: Consultant Psychiatrists (FRANZCP), General Practitioners, psychologists, mental health nurses, and clinician researchers in Melbourne seeking collaborative referral pathways or joining the founding clinical team.
- **Patients and families**: Individuals researching evidence-based transcranial magnetic stimulation (TMS) for treatment-resistant depression in Melbourne's inner east, looking for opening timelines and clinic standards.

## Product Purpose

Renova TMS is establishing a new, targeted, measurement-based transcranial magnetic stimulation (TMS) clinic in Surrey Hills, Melbourne, co-located alongside an established neurosurgical practice. The placeholder site establishes professional presence, articulates the clinic's core principles, invites founding clinical team members (linking to an active SEEK listing), and enables referrers, clinicians, and prospective patients to register their interest ahead of opening.

## Positioning

An individualised, measurement-guided neurostimulation service with a research-minded culture. Unlike high-volume commercial clinics, Renova TMS emphasises individualised targeting parameters, validated clinical outcome tracking, psychiatric oversight, and close integration with referring doctors, supported by co-location with established neurosurgery.

## Operating Context

- **AHPRA & National Law Compliance**: Must clearly state that the clinic is not yet accepting patients or referrals; prohibits therapeutic claims that breach health advertising regulations.
- **Crisis Support & Safety**: Mandatory prominent disclaimers directing people in urgent distress to emergency services (000) and Lifeline (13 11 14).
- **Privacy & Health Information**: Strict Australian Privacy Principles compliance; explicitly warns users not to submit personal health information (PHI) through the pre-launch registration form.

## Capabilities and Constraints

- **Architecture**: Static prerendered delivery via Astro, deployed on Cloudflare Pages.
- **Edge API**: Serverless `/api/register` Cloudflare Worker endpoint handling form submissions with honeypot bot filtering, optional Cloudflare Turnstile token verification, and Resend email delivery with preview fallback.
- **Performance & Accessibility**: WCAG 2.1 AA compliant, zero third-party client bloat, fast load times, responsive across all screen sizes.

## Brand Commitments

- **Name**: Renova TMS
- **Location**: Surrey Hills, Melbourne, Victoria
- **Voice & Tone**: Calm, measured, scientifically grounded, empathetic, transparent.
- **Core Palette**: Deep Navy (`#16293F`), Classic Navy (`#1E3A5F`), Clinical Teal (`#2E93A8`), Accessible Cyan (`#7FE3F8`), Clean Ground (`#FBFCFD`).
- **Typography**: Poppins (geometric humanist sans for headings), Mulish (readable sans for body text).

## Evidence on Hand

- Clinic establishment location: Surrey Hills, Victoria (inner east Melbourne).
- Active job listing: Consultant Psychiatrist opportunity on SEEK (`https://au.seek.com/job/94480835?ref=cm-ui`).
- Direct contact: `admin@renovatms.com`.
- Web domain: `renovatms.com`.

## Product Principles

1. **Targeted**: Individualised targeting parameters tailored to each patient's anatomy and reassessed over time.
2. **Measured**: Progress continuously evaluated using validated psychiatric rating scales.
3. **Integrated**: Collaborative shared care with general practitioners, psychiatrists, and allied therapists.
4. **Transparent**: Open, honest communication regarding clinical suitability, eligibility, costs, and risks.

## Accessibility & Inclusion

Targeting WCAG 2.1 Level AA compliance across text contrast ratios (≥4.5:1 normal text, ≥3:1 large text), keyboard navigation, focus indicators, fluid responsiveness across mobile/tablet/desktop, and assistive device compatibility.
