# Deployment

This project is a static Vercel-ready app: `index.html`, `styles.css`, `app.js`, and a local-only preview server.

## Verified Settings

- Build command: `npm run build`
- Build script: `node --check app.js`
- Output directory: `.`
- Framework preset: `Other`
- Install command: default, or leave empty
- Environment variables: none required
- Runtime routing: client-side section switching only, no server rewrites required
- Asset paths: relative paths only for local assets (`styles.css`, `app.js`)
- External assets: Google Fonts via standard HTTPS links

## Manual Vercel Deploy

### Option 1: Vercel Dashboard

1. Log in to Vercel.
2. Import the project folder or connected GitHub repository.
3. Use these build settings:
   - Framework Preset: `Other`
   - Build Command: `npm run build`
   - Output Directory: `.`
4. Do not add environment variables.
5. Deploy.

### Option 2: Vercel CLI

After logging in manually:

```powershell
npx.cmd -y vercel login
npx.cmd -y vercel --prod
```

## Local Verification

```powershell
npm.cmd run build
npm.cmd start
```

Local preview runs on:

```text
http://127.0.0.1:4173
```

## Notes

- `preview-server.mjs` is only for local preview and uses `PORT` optionally.
- `vercel.json` already defines cache headers and static output settings.
- No API keys, secrets, databases, or backend services are required.
