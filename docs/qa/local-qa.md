# Tunibois Local QA

Last updated: 2026-05-30

## Verified Commands

Run from:

```powershell
C:\Users\WALID DEV\apps walid\tunibois.tn
```

Commands:

```powershell
npm run lint
npm run build
npm run db:generate
npm run db:push
```

Expected:

- ESLint finishes with no errors.
- Next.js build generates the French root pages, English pages, Arabic pages, API routes, `robots.txt`, and `sitemap.xml`.
- Prisma generates the client.
- Prisma pushes the lead tables to the local MySQL database `tunibois`.

## Manual Browser QA Checklist

Check desktop and mobile:

- `/`
- `/notre-usine/`
- `/palettes-en-bois/`
- `/pellets-en-bois/`
- `/contact/`
- `/en/`
- `/ar/`

For each page:

- no blank page
- no missing critical image
- no overlapping text
- no horizontal overflow on mobile
- header and footer visible
- product cards link to real pages
- language switcher keeps equivalent route
- CTA buttons work
- forms show client-side validation

## Form QA Notes

The V1 API saves each request to MySQL and attempts to send an email through SMTP.

Local `.env.example` uses:

```env
MAIL_HOST="localhost"
MAIL_PORT="1025"
```

This expects a local SMTP capture tool such as Mailpit/Mailhog. Without a local SMTP server, API routes can save the database record but email delivery will fail and the form will show an error. Production must use a real SMTP configuration before launch.
