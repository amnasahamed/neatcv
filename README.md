# NeatCV

A responsive marketing website for professional ATS-friendly CV writing and LinkedIn profile optimization.

## Stack

- Next.js App Router with static export
- TypeScript
- Tailwind CSS v4
- Motion
- Phosphor Icons

## Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Hosted form

Copy `.env.local.example` to `.env.local` and configure:

```env
NEXT_PUBLIC_FORM_ENDPOINT=https://formspree.io/f/your-form-id
NEXT_PUBLIC_CONTACT_EMAIL=hello@neatcv.com
NEXT_PUBLIC_SITE_URL=https://neatcv.com
```

The endpoint can be a Formspree, Web3Forms, or compatible hosted form URL. Do not place secret keys in `NEXT_PUBLIC_*` variables because they are included in the browser bundle.

Without an endpoint, the page presents a clear email fallback rather than silently discarding a request.

## Verification

```bash
npm run lint
npm run typecheck
npm run build
```

The production static website is emitted to `out/`.

## Deployment

Deploy the `out/` directory to any static host, or connect the repository to a host that supports Next.js static export.

Before publishing, replace the default email and site URL, configure the form endpoint, confirm pricing, and review all service terms.
