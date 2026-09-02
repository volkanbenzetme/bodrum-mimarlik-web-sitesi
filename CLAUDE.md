# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this directory.

## What this is

This is a **Claude Design canvas** project: a one-page marketing website for **VH Architecture**, Volkan's personal architecture/villa-design firm in Bodrum, Turkey — authored as a `.dc.html` artboard. It lives under `agents/vh-architecture/` in the wider Agent-dosyaları workspace; see `../AGENT.md` for the goals this site serves and `../skills/update-site-content.md` for the process to follow when editing it.

- `canvas.json` — canvas manifest. Declares the artboard(s) that make up the design, their position/size on the infinite canvas, and which file to open by default (`launch.file`). Currently a single artboard, `Main.dc.html`, sized 1440×7000.
- `Main.dc.html` — the actual page content: a full static HTML/CSS document wrapped in an `<x-dc>` element, loading `./support.js` (injected by the Design Canvas runtime, not a file to edit here).

There is no application code or server in this directory. The one piece of real client-side logic is the lead-capture form at the bottom of `Main.dc.html`, which POSTs directly to [Web3Forms](https://web3forms.com) via `fetch()` — no backend of its own.

## Hosting

**Live at https://volkanbenzetme.github.io/bodrum-mimarlik-web-sitesi/** (GitHub Pages, repo is public). `index.html` in this folder is the served copy — a plain-HTML version of `Main.dc.html` with the `{{accent}}` template placeholder resolved to a literal color and the `<x-dc>`/`<helmet>` wrapper flattened into a real `<head>`, since GitHub Pages has no Design Canvas runtime to do that. **There is no build step wiring these together — after editing `Main.dc.html`, manually re-apply the same two changes to `index.html` (or regenerate it) and commit both.**

A Cloudflare Pages deployment also exists (`vh-architecture.pages.dev`, project name `vh-architecture` in the `Volkanbnztm@gmail.com` Cloudflare account) but is **not usable as the primary link**: `*.pages.dev` is unreachable from the founder's network in Turkey (confirmed on both WiFi and mobile data — likely an ISP/carrier-level block on that shared subdomain, not a deployment issue). See memory `vh-architecture-pages-dev-blocked` for the full finding. If/when a real custom domain is attached to that Cloudflare Pages project, it should work fine and could replace GitHub Pages as the primary link.

## Working with `Main.dc.html`

- Treat it as hand-authored design output, not application source: self-contained page with inline `<style>` and CSS custom properties (colors, spacing) at the top of the `<style>` block, no build step, no bundler, no JS framework.
- Use the **design** skill when creating a *new* canvas or re-seeding one from scratch. This *existing* canvas is edited directly by modifying this file and, if artboard geometry changes (position/size/adding new artboards), keeping `canvas.json` in sync.
- The page is organized into `<section>` blocks with Turkish `id`s reflecting the site's information architecture — edit within a section's existing markup/CSS patterns rather than introducing new structural conventions:
  - `#felsefe` — philosophy/intro
  - `#hizmetler` — services
  - `#projeler` — featured projects
  - `#surec` — process (design-to-delivery)
  - `#referanslar` — testimonials
  - `#iletisim` — contact + lead form
- Fonts are loaded from Google Fonts (`Marcellus` for headings/display, `Jost` for body text) via a `<link>` in the `<helmet>` block — keep using these two typefaces rather than adding new ones.
- There is no verification command to run after edits (no linter/build/tests). To check a change, open the artboard in the Design Canvas viewer/Artifact preview rather than trying to execute it as a script.

## The lead form (`#lead-form`)

- Fields: name, phone, email, location, a checkbox list of needs (`ihtiyaclar[]`), an optional free-text scope/budget note, and a message. No price is shown or calculated on the site — pricing is manual, decided by the founder after reading the submission (see `../AGENT.md` Non-Goals).
- Delivery: a plain `fetch()` POST to `https://api.web3forms.com/submit`, listened for via a `document`-level `submit` event handler (using `composedPath()` so it still works if the Design Canvas runtime ever wraps the form in shadow DOM) — not `getElementById` at parse time, to avoid timing/DOM-ownership issues with the `<x-dc>` runtime.
- The hidden `access_key` input already holds a real Web3Forms key (created 2026-09-02, tied to volkanbnztm@gmail.com) — Web3Forms keys are meant to be embedded client-side like this, they aren't secrets the way an API secret key would be. If it ever needs rotating, generate a new one at https://web3forms.com and swap the value.
- A hidden `botcheck` checkbox is a honeypot for spam — never remove it.
- Do not add a `redirect` hidden field pointing at a hardcoded URL — the deployed URL isn't fixed yet, and the JS success/error message (`#lead-form-status`) already gives on-page feedback without navigating away.

## Stray files

`EĞTİM` and `web sitesi` at the workspace root (`d:\GENEL\şahsi\3_KURSLAR\11-CLAUDE\`) are empty (0-byte) files with no extension — leftover/placeholder files, not project scaffolding. Don't assume they hold configuration or content.
