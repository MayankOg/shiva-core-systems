# Deploying to Vercel

This project is built with **TanStack Start** and is preconfigured for Cloudflare Workers via the Lovable preset. To deploy on Vercel instead, follow these steps.

## 1. Push to GitHub
In Lovable: **Connectors → GitHub → Connect project → Create Repository**.

## 2. Import the repo on Vercel
- Go to https://vercel.com/new and import the repo.
- **Framework preset:** Vite
- **Build command:** `bun run build` (or `npm run build`)
- **Output directory:** `.output/public`
- **Install command:** `bun install` (or `npm install`)

These values are already set in `vercel.json`, so Vercel will pick them up automatically.

## 3. Switch the build target to Node (required for Vercel)

The default Lovable config builds for Cloudflare Workers. For Vercel you need to override the TanStack Start target. Edit `vite.config.ts`:

```ts
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";

export default defineConfig({
  vite: {
    plugins: [
      tanstackStart({ target: "vercel" }),
    ],
  },
});
```

> ⚠️ Only do this in your **local / GitHub** copy — leaving it in Lovable will break the in-editor preview, which targets Cloudflare. Keep this change on a Vercel branch.

## 4. Environment variables

If you use Lovable Cloud (database, auth, AI), copy the env vars from Lovable → **Cloud → Settings** into Vercel → **Project Settings → Environment Variables**:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_PUBLISHABLE_KEY`
- `VITE_SUPABASE_PROJECT_ID`
- any server-side secrets you've added

## 5. Deploy
Click **Deploy** in Vercel. Subsequent pushes to the connected branch redeploy automatically.

## Local development
```bash
bun install
bun run dev
```
Open http://localhost:3000.
