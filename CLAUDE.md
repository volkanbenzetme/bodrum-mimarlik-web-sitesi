# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this directory.

## What this is

This is the marketing site for **KAIRO Studio** (`kairomimarlik.com`), Volkan H. Benzetme's architecture/interior design/construction firm in Yalıkavak, Bodrum. It lives under `agents/kairo-studio/` in the wider Agent-dosyaları workspace (that folder was briefly named `agents/vh-architecture` before the real brand was confirmed — "VH" is the founder's personal monogram used on renders, not the company name); see `../AGENT.md` for the goals this site serves and `../skills/update-site-content.md` for the process to follow when editing it.

As of 2026-09-11 this is a **React 18 + TypeScript + Vite** app, statically pre-rendered per route with **`vite-react-ssg`** (real build-time HTML/meta per page — no server, no client-side-only SPA blind spot for search engines) and animated with **framer-motion** (hero carousel cross-fade/autoplay, scroll-triggered reveals, staggered card grids, the nav's transparent→solid scroll transition). It replaced an earlier dependency-free `.dc.html` Design Canvas artboard — that original still exists, preserved for history, under `legacy-static/` (see below). Plain global CSS (`src/styles.css`), no Tailwind/CSS-modules/UI framework — matches the conventions already used by `kairo-os/`, the workspace's other React project.

Real brand/project facts (services, the 7-project portfolio, the 8-step KAIRO Yöntemi, restoration credentials, contact info) came from the founder's own KAIRO portfolio PDF and tanıtım föyü, shared 2026-09-03 — treat those as source of truth over anything invented in earlier drafts of this site. The site features all 7 real projects with real AI-architectural-render photos (`public/images/`, sourced from `images/`) — these are AI renders the founder supplied, not on-site photography of built work, and the UI says so.

## Directory layout

- `src/main.tsx` — `vite-react-ssg` entry point.
- `src/routes.tsx` — route table (`/`, `/hizmetler`, `/studio`, `/surec`, `/iletisim`, `/projeler`, `/projeler/:slug`), each page component imported eagerly (no code-splitting — the site is small enough that the simplicity is worth more than the bundle-size win, and it sidesteps `vite-react-ssg`'s `lazy`-route FOUC/hydration caveats).
- `src/styles.css` — the one global stylesheet. Design tokens (`--stone-50`, `--ink`, `--accent`, etc.) live on `:root`. Fonts stay `Marcellus` (headings/display) + `Jost` (body) via Google Fonts, loaded in `index.html`.
- `src/data/{projects,services,process}.ts` — typed content. `projects.ts` defines the `ProjectStatus` union (`design_complete | built | preliminary_complete | pre_construction`) and a `PROJECT_STATUS_LABEL` map — use this instead of ever writing a raw status string in a component, and instead of the old ambiguous free-text "Tamamlandı" (which meant "design done" in some places and "construction done" in others on the legacy site).
- `src/components/*.tsx` — one component per file (`Nav`, `WhatsAppFloat`, `Footer`, `HeroCarousel`, `PhotoHero`, `ProjectCard`, `ProjectGallery`, `ServiceCard`, `ProcessList`, `LeadForm`, `RiskBand`).
- `src/pages/*.tsx` — one page per route (`Home`, `Hizmetler`, `Studio`, `Surec`, `Iletisim`, `ProjelerIndex`, `ProjeDetay`). Each page owns its own `<Head>` (title/description/canonical/og:*) via `vite-react-ssg`'s `Head` component — see "SEO / per-route `<Head>`" below before adding a page.
- `public/` — `CNAME`, `.nojekyll`, `robots.txt`, `sitemap.xml`, `images/*`. Vite's `publicDir` copies these verbatim to `dist/` on build (see Hosting below). `robots.txt`/`sitemap.xml`/`CNAME`/`.nojekyll`/`images/` also still exist at the repo root as the original files — the `public/` copies are what actually ship; keep both in sync if either changes (e.g. adding a new project image: drop it in `images/` **and** `public/images/`, or just always edit the one under `public/` and copy back).
- `legacy-static/` — the retired static site: `Main.dc.html` (the last live Design Canvas artboard), `index.html` (its GitHub-Pages-served flattened mirror), `preview/` (the in-progress v2 redesign that became the source for this React rebuild's IA/content), `canvas.json`, `.impeccable/`. Kept for history and as a Design Canvas re-seed source if ever needed again — **not built, not served, not edited for routine content changes.**
- `.github/workflows/deploy.yml` — GitHub Actions: on push to `main`, `npm ci` + `npm run build`, then `actions/upload-pages-artifact` + `actions/deploy-pages`.

There is no application code or server in this directory beyond the pre-rendered static build — the one piece of real client-side logic is the lead-capture form (`src/components/LeadForm.tsx`), which POSTs directly to [Web3Forms](https://web3forms.com) via `fetch()` from the browser — no backend of its own.

## SEO / per-route `<Head>`

Every page component renders its own `<Head>` (from `vite-react-ssg`) with `<title>`, `<meta name="description">`, `<link rel="canonical">`, and `og:*` tags — `vite-react-ssg` (via `react-helmet-async`) injects these into that route's pre-rendered `dist/<route>/index.html` at build time. **Do not add a `<title>` or `<meta name="description">` to the root `index.html`** — `Head` *adds* tags to `<head>`, it does not remove conflicting static ones already there, so a static title/description in `index.html` would duplicate rather than get overridden (this happened once during the React migration and was caught by grepping `dist/` for `<title>` before shipping — keep doing that after any `<Head>` change).

## Working with the React app

- Follow `kairo-os/`'s conventions: plain `@vitejs/plugin-react`, TS `strict`, relative imports (no path aliases), one PascalCase component per file, no ESLint/Prettier config to fight.
- New sections/content changes: prefer editing `src/data/*.ts` (content) and the relevant `src/pages/*.tsx` (structure) over touching `src/components/*.tsx`, unless the change is genuinely structural/reusable.
- Framer-motion is used with intent, not decoration — every current use (hero carousel autoplay/cross-fade, `whileInView` section reveals, `staggerChildren` card grids, the nav scroll transition) exists in `ui-ux-pro-max`'s "purposeful motion" sense. Keep new motion additions to the same bar.
- Verification before considering any change done: `npm run typecheck` (must pass clean), `npm run build` (must complete, and `grep -r "<title>" dist/` should show one distinct, correct title per route — see above), and a manual look at `npm run dev` for anything visual/interactive.

## Hosting

**Live at https://kairomimarlik.com** (custom domain, connected 2026-09-03 — DNS at Turhost points 4 A records at GitHub Pages' IPs, `CNAME` file in this repo/`public/` holds the domain, HTTPS is enforced with an approved cert). Also reachable at https://volkanbenzetme.github.io/bodrum-mimarlik-web-sitesi/ (GitHub Pages, repo is public) — same content, GitHub's default URL.

Deploy is via **GitHub Actions** (`.github/workflows/deploy.yml`), not a committed build branch: every push to `main` runs `npm ci && npm run build`, uploads `dist/` as a Pages artifact, and deploys it. **This requires the repo's Settings → Pages → Source to be set to "GitHub Actions"** (it may still say "Deploy from a branch" from the static-site era — that's a GitHub web UI setting, not a file, so it has to be flipped by hand once).

A `.nojekyll` file (`public/.nojekyll`, copied to `dist/.nojekyll` on build) is required — without it GitHub Pages tries to run the build through Jekyll and fails instantly (`duration: 0`, generic "Page build failed"). Don't remove it.

A Cloudflare Pages deployment also exists (`vh-architecture.pages.dev`, project name `vh-architecture` in the `Volkanbnztm@gmail.com` Cloudflare account — named before the rebrand, not renamed since it's unused) but is **not usable as the primary link**: `*.pages.dev` is unreachable from the founder's network in Turkey (confirmed on both WiFi and mobile data — likely an ISP/carrier-level block on that shared subdomain, not a deployment issue). See memory `vh-architecture-pages-dev-blocked` for the full finding.

The founder owns `kairomimarlik.com` (registered at Turhost). DNS points at GitHub Pages — check `git log`/this file for whether that's changed, since a stale note here is worse than none.

## The lead form (`src/components/LeadForm.tsx`)

- Fields: name, phone, email, location, a checkbox list of needs (`ihtiyaclar[]`), an optional free-text scope/budget note, and a message — the full 7-field production form (a simplified 5-field variant existed briefly in the v2 redesign draft and was deliberately **not** carried forward into the React rebuild, per `../AGENT.md`'s note that the founder needs these fields to price a project from the email alone). No price is shown or calculated on the site — pricing is manual, decided by the founder after reading the submission (see `../AGENT.md` Non-Goals).
- Delivery: a `fetch()` POST to `https://api.web3forms.com/submit` from the form's own `onSubmit` handler (React, not a global `document`-level listener like the old static page — no shadow-DOM/timing concerns to work around here).
- The hidden `access_key` input already holds a real Web3Forms key (created 2026-09-02, tied to volkanbnztm@gmail.com) — Web3Forms keys are meant to be embedded client-side like this, they aren't secrets the way an API secret key would be. If it ever needs rotating, generate a new one at https://web3forms.com and swap the value in `LeadForm.tsx`.
- A hidden `botcheck` checkbox is a honeypot for spam — never remove it.
- Do not add a `redirect` hidden field pointing at a hardcoded URL — the on-page success/error state already gives feedback without navigating away.

## Stray files

`EĞTİM` and `web sitesi` at the workspace root (`d:\GENEL\şahsi\3_KURSLAR\11-CLAUDE\`) are empty (0-byte) files with no extension — leftover/placeholder files, not project scaffolding. Don't assume they hold configuration or content.
