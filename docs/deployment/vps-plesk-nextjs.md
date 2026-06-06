# Tunibois VPS / Plesk Deployment Notes

Last updated: 2026-05-30

## Current Production Context

- The current `tunibois.tn` website remains live on WordPress/shared hosting until final cutover.
- DNS is managed at Ooredoo Tunisie.
- Target server is the OVH VPS already running Plesk Obsidian on Debian 12.
- ChronoServe was verified under its own vhost path: `/var/www/vhosts/chronoserve.fr/httpdocs/public`.
- Tunibois must use its own vhost/subscription path, ideally `/var/www/vhosts/tunibois.tn/...`.

## Deployment Shape

Recommended production shape:

- Plesk vhost for `tunibois.tn`
- Node runtime from Plesk Node installation or a controlled systemd service
- Next.js app built with `npm ci && npm run build`
- MySQL/MariaDB database for lead tables
- `.env` production values stored on server, not in Git
- HTTPS certificate via Plesk / Let's Encrypt
- DNS cutover only after temporary production validation

## Production Environment Variables

```env
DATABASE_URL="mysql://USER:PASSWORD@127.0.0.1:3306/tunibois"
NEXT_PUBLIC_SITE_URL="https://www.tunibois.tn"
MAIL_HOST="SMTP_HOST"
MAIL_PORT="465"
MAIL_USER="SMTP_USER"
MAIL_PASSWORD="SMTP_PASSWORD"
MAIL_IGNORE_TLS="false"
MAIL_FROM="Tunibois <devis@tunibois.tn>"
LEADS_TO_EMAIL="devis@tunibois.tn"
```

## Safe Cutover Workflow

1. Keep the current WordPress website online.
2. Create or map the Plesk domain/subscription for `tunibois.tn`.
3. Deploy the Next.js project to the Tunibois vhost path.
4. Configure production `.env`.
5. Run:

```bash
npm ci
npm run db:generate
npm run db:push
npm run build
```

6. Start the app with the selected Plesk Node process or systemd service.
7. Test using a temporary URL, preview domain, or local hosts-file override.
8. Verify:
   - homepage
   - preserved French URLs
   - `/en/`
   - `/ar/`
   - forms save to database
   - forms send email
   - `/sitemap.xml`
   - `/robots.txt`
9. Reduce DNS TTL if available before final switch.
10. Update Ooredoo DNS only after validation.
11. Re-test production immediately after propagation.

## DNS Reminder

Do not change Ooredoo DNS until the VPS version is verified. The current WordPress site is the fallback during development.
