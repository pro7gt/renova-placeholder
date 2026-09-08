# Renova TMS — Astro Placeholder Site for Cloudflare Pages

This repository contains the production-ready Astro placeholder web application for **Renova TMS**, a new transcranial magnetic stimulation (TMS) clinic being established in Surrey Hills, Melbourne.

Built from `renovatmsstarter.html` and configured according to `Renova_TMS_Placeholder_Site_Backend_Setup.docx` for deployment on **Cloudflare Pages**.

---

## Key Features

- **Modern Astro Architecture**: Clean component-driven setup (`src/components/`), standard modular CSS tokens, and optimal bundle size.
- **Fast Static Delivery with Serverless Edge API**:
  - The landing page is prerendered at build time to static HTML (`dist/index.html`, only ~16KB vs 732KB monolith).
  - The form handler `/api/register` runs as an on-demand Cloudflare Pages Function / Worker endpoint.
- **Form Delivery & Spam Protection**:
  - **Honeypot**: Catches and silently discards automated bot submissions.
  - **Cloudflare Turnstile**: Native bot protection slot ready. Verifies tokens server-side if `TURNSTILE_SECRET_KEY` is configured.
  - **Email Forwarding**: Sends formatted inquiries to `admin@renovatms.com` via Resend API (or MailChannels).
  - **Preview Mode**: If no email service API key is provided, logs incoming inquiries and returns a success response for staging/preview testing.
- **AHPRA & Advertising Compliance**:
  - Clear *"We are not yet accepting patients or referrals"* badge and footer notice.
  - Emergency services (000) and Lifeline (13 11 14) crisis helpline disclaimer.
  - Clear guidance asking users not to submit personal health information.
  - Active SEEK psychiatrist job listing opening in a new tab.
- **Cloudflare Pages Optimizations**:
  - `public/_redirects`: 301 redirects for all legacy URLs (`/treatment`, `/conditions`, `/referrers`, etc.) to `/`.
  - `public/_headers`: Security headers (`X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy`) and asset caching rules.
  - High-resolution OpenGraph image (`renova-og.png`, 1200x630) in site root.

---

## Getting Started Locally

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Build production bundle
npm run build

# 4. Preview production build locally
npm run preview
```

---

## Cloudflare Pages Deployment

### Option A: Via GitHub / GitLab / Bitbucket (Recommended)

1. Push this repository to GitHub (or your preferred Git host).
2. Go to the **Cloudflare Dashboard** > **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
3. Select your repository.
4. Set the build configuration:
   - **Framework preset**: `Astro`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
5. Under **Environment variables**, configure:
   - `TO_EMAIL`: `admin@renovatms.com`
   - `RESEND_API_KEY`: *(Optional, from your Resend account to send email alerts)*
   - `PUBLIC_TURNSTILE_SITE_KEY`: *(Optional, from Cloudflare Turnstile dashboard)*
   - `TURNSTILE_SECRET_KEY`: *(Optional, from Cloudflare Turnstile dashboard)*
6. Click **Save and Deploy**.
7. In **Custom Domains**, add `renovatms.com` and `www.renovatms.com`.

### Option B: Via Wrangler CLI

```bash
# Authenticate with Cloudflare
npx wrangler login

# Build and deploy directly to Cloudflare Pages
npm run build
npx wrangler pages deploy dist --project-name=renova-placeholder
```

---

## Environment Variables Reference

| Variable | Description | Default |
|---|---|---|
| `TO_EMAIL` | Destination email for interest inquiries | `admin@renovatms.com` |
| `RESEND_API_KEY` | Resend API key for sending emails | `None` (logs to console in preview) |
| `PUBLIC_TURNSTILE_SITE_KEY` | Cloudflare Turnstile public sitekey | `None` |
| `TURNSTILE_SECRET_KEY` | Cloudflare Turnstile secret key for verification | `None` |
