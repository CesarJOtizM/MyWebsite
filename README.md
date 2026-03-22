# Cesar Ortiz — Personal Portfolio Website

> English | [Español](./README.es.md)

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Pages & Features](#pages--features)
- [Internationalization](#internationalization)
- [Design System](#design-system)
- [API & Backend](#api--backend)
- [SEO & Performance](#seo--performance)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Scripts](#scripts)

---

## Overview

Personal portfolio website for **Cesar Javier Ortiz Montero** — Full Stack Developer, CEO & Co-Founder of [NevadaTech](https://nevadatech.dev). Built to tell a product-focused narrative: from accounting/finance to software engineering and founding a company.

The site highlights a product-building philosophy rather than listing technologies — showcasing how Cesar thinks about architecture, systems, and software at scale.

---

## Tech Stack

| Category | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| UI Library | React 19 |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4 |
| Animations | Motion/React 12 (Framer Motion) |
| Icons | Lucide React |
| i18n | next-intl 4 |
| Theme | next-themes (dark/light mode) |
| Email | Resend + React Email |
| Validation | Zod 4 |
| Analytics | Vercel Analytics |
| Package Manager | Bun |

---

## Project Structure

```
MyWebsite/
├── src/
│   ├── app/                        # Next.js App Router
│   │   ├── [locale]/               # Locale-based routing (/en, /es)
│   │   │   ├── page.tsx            # Home page
│   │   │   ├── cv/page.tsx         # CV download page
│   │   │   ├── projects/[slug]/    # Case study detail pages
│   │   │   ├── layout.tsx          # Locale layout (providers)
│   │   │   └── not-found.tsx       # 404 within locale
│   │   ├── api/contact/route.ts    # Contact form API endpoint
│   │   ├── manifest.ts             # PWA manifest
│   │   ├── robots.ts               # robots.txt generation
│   │   └── sitemap.ts              # sitemap.xml generation
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── header.tsx          # Fixed header: nav, theme toggle, language switcher
│   │   │   ├── footer.tsx          # Site footer
│   │   │   └── theme-provider.tsx  # next-themes wrapper
│   │   ├── sections/               # Home page sections (one per scroll section)
│   │   │   ├── hero.tsx            # Name reveal, tagline, CTAs, social links
│   │   │   ├── about.tsx           # Career story & core values
│   │   │   ├── how-i-think.tsx     # 5-pillar development philosophy
│   │   │   ├── projects.tsx        # Featured projects grid
│   │   │   ├── experience.tsx      # Work timeline
│   │   │   ├── skills.tsx          # Skills by category
│   │   │   ├── nevadatech.tsx      # NevadaTech company section
│   │   │   └── contact.tsx         # Contact form with spam protection
│   │   ├── ui/                     # Reusable UI primitives
│   │   │   ├── gradient-glow.tsx   # Animated background blobs
│   │   │   ├── theme-toggle.tsx    # Dark/light mode button
│   │   │   ├── language-switcher.tsx # EN/ES toggle
│   │   │   ├── scroll-progress.tsx # Top progress bar
│   │   │   └── lost-penguin.tsx    # 404 mascot illustration
│   │   ├── case-study/
│   │   │   └── case-study.tsx      # Reusable case study layout
│   │   └── emails/
│   │       └── contact.tsx         # React Email template
│   │
│   ├── content/                    # Static content data
│   │   ├── projects/index.ts       # Project metadata (slug, URLs)
│   │   ├── experience/index.ts     # Work history data
│   │   └── skills/index.ts         # Skills by category
│   │
│   ├── i18n/                       # Internationalization setup
│   │   ├── routing.ts              # Locale config (en, es)
│   │   ├── request.ts              # Server-side i18n helpers
│   │   └── navigation.ts           # i18n-aware Link/redirect
│   │
│   ├── lib/
│   │   ├── utils.ts                # cn() utility for Tailwind class merging
│   │   └── validations.ts          # Zod schema for contact form
│   │
│   ├── styles/globals.css          # Global styles, custom animations, CSS vars
│   └── types/index.ts              # Global TypeScript types
│
├── messages/
│   ├── en.json                     # English translations (~488 keys)
│   └── es.json                     # Spanish translations (~488 keys)
│
└── public/
    ├── cv/                         # CV PDFs (EN & ES)
    ├── team/                       # Team member photos
    ├── nevadatech/                 # Company logos/assets
    └── penguin.svg                 # 404 mascot
```

---

## Pages & Features

### Home Page (`/[locale]`)

Eight scroll sections compose the full page experience:

1. **Hero** — Animated name reveal, tagline, CTA buttons (View work / Get in touch), social media links.
2. **About** — Career narrative (accounting → software engineering → founder), and 4 core values:
   - Concepts > Code
   - Architecture First
   - Foundations Before Frameworks
   - Build Products, Not Projects
3. **How I Think** — 5-pillar development methodology:
   - Understand the Domain
   - Define Boundaries
   - Choose Patterns Intentionally
   - Build with Confidence
   - Ship and Iterate
4. **Projects** — Showcase grid of 3 featured projects with links to live demos and source code.
5. **Experience** — Chronological timeline of professional roles.
6. **Skills** — Organized by 6 categories (Frontend, Backend, Database, Architecture, Cloud, Tools) with 3 proficiency levels (primary, production, familiar).
7. **NevadaTech** — Company description with team members.
8. **Contact** — Email contact form with real-time validation, honeypot spam protection, and Resend delivery.

### CV Page (`/[locale]/cv`)

Dedicated page to view and download the resume. Serves language-specific PDF files:
- `/en/cv` → `cesar-ortiz-cv-en.pdf`
- `/es/cv` → `cesar-ortiz-cv-es.pdf`

### Project Case Studies (`/[locale]/projects/[slug]`)

Individual deep-dive pages for each featured project:
- `nevada-demo` — Nevada Inventory System (featured, live demo)
- `meeting-scheduler` — Meeting scheduling tool (code available)
- `nevadatech` — NevadaTech company site

### 404 Page

Custom not-found page with the **Lost Penguin** mascot — a friendly SVG character with navigation guidance.

---

## Internationalization

Full bilingual support via **next-intl**:

| Feature | Detail |
|---|---|
| Languages | English (`en`), Spanish (`es`) |
| URL structure | `/en/...` and `/es/...` |
| Default locale | English |
| Scope | All sections, metadata, emails, CV files |

Translations live in `messages/en.json` and `messages/es.json`. The header includes a one-click language switcher that preserves the current page path.

---

## Design System

**Fonts:** Inter (sans-serif) + JetBrains Mono (monospace) via Google Fonts.

**Colors:**
- Primary accent: `#2563eb` (light) / `#3b82f6` (dark)
- Full dark/light mode with CSS custom properties

**Notable Visual Effects:**
- Animated gradient glow blobs in the background
- Scroll progress indicator bar at the top
- Word-reveal animations in the Hero section
- Staggered entrance animations via IntersectionObserver
- Spring-based mobile navigation drawer
- Noise texture overlay for a premium feel
- Backdrop blur on the fixed header

**Accessibility:**
- Focus-visible styles throughout
- ARIA labels on interactive elements
- `prefers-reduced-motion` support for all animations

---

## API & Backend

### `POST /api/contact`

Handles contact form submissions.

**Input (validated with Zod):**
```typescript
{
  name: string       // min 2 chars
  email: string      // valid email format
  message: string    // min 10 chars
  honeypot: string   // must be empty (spam trap)
}
```

**Flow:**
1. Validate input with Zod schema
2. Check honeypot field — reject if filled (bot detected)
3. Render React Email template
4. Send via Resend API
5. Return `{ success: true }` or error JSON

**Email details:**
- From: `hello@cesarortiz.co`
- Reply-to: sender's email
- To: `cesarjavierortizmontero+website@gmail.com`

---

## SEO & Performance

| Feature | Implementation |
|---|---|
| Metadata | Per-locale `generateMetadata()` in each page |
| Open Graph | Titles, descriptions, and locale-aware tags |
| Twitter Cards | Included in metadata |
| Sitemap | Auto-generated at `/sitemap.xml` |
| robots.txt | Auto-generated at `/robots.txt` |
| Hreflang | Alternate language links for EN/ES |
| Image formats | WebP & AVIF via Next.js image optimization |
| Analytics | Vercel Analytics (lightweight, privacy-friendly) |
| Bundle analysis | `ANALYZE=true bun run build` triggers bundle analyzer |

---

## Getting Started

```bash
# Clone the repository
git clone <repo-url>
cd MyWebsite

# Install dependencies
bun install

# Create the environment file
cp .env.example .env.local

# Start the development server
bun dev
```

Open [http://localhost:3000](http://localhost:3000) — it redirects to `/en` by default.

---

## Environment Variables

| Variable | Description |
|---|---|
| `RESEND_API_KEY` | API key from [resend.com](https://resend.com) — required for the contact form |

---

## Scripts

```bash
bun dev        # Start development server (http://localhost:3000)
bun build      # Create production build
bun start      # Start production server
bun lint       # Run ESLint
ANALYZE=true bun build  # Build + open bundle size analyzer
```
