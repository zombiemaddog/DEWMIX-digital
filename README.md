# DEWMIX Digital Website

A premium first-version marketing website for **DEWMIX Digital**, a Germany-backed full IT solutions company offering secure infrastructure, networks, websites, app development, AI automation, and creative media.

## Stack

- Static HTML, CSS, and vanilla JavaScript
- Zero runtime dependencies
- Lightweight Node scripts for local serving and production builds
- Responsive, mobile-first layout suitable for Vercel, Netlify, or any static host
- Logo and favicon assets in `assets/` matched to the DEWMIX Digital blue/cyan brand palette

## Getting started

Install dependencies and generate the lockfile state:

```bash
npm install
```

Run the local development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Deployment

This project is suitable for Vercel, Netlify, or any static host.

### Vercel

- Framework preset: `Other`
- Build command: `npm run build`
- Output directory: `dist`

### Netlify

- Build command: `npm run build`
- Publish directory: `dist`

## Contact form placeholder

The quote form currently prevents default submission and is ready to connect to a backend or form provider. Use placeholder environment variable names only, for example:

```bash
VITE_CONTACT_ENDPOINT=https://example.com/contact
```

Do **not** store or expose server credentials, SSH keys, passwords, API keys, database logins, or private access details in this repository or frontend code.
