# Subha Health ENT Clinic

The bilingual English/Tamil website for Subha Health ENT Clinic in Dindigul.

## Prerequisites

- Node.js `>=22.13.0`

## Local development

```bash
npm install
npm run dev
npm run build
```

## Validation

```bash
npm run lint
npm test
```

## Deployment

Netlify builds the static export from the `main` branch using `netlify.toml`.
Every successful push to `main` publishes the latest version automatically after
the repository is connected to the Netlify site.
