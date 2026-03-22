# cesarortiz.co — Personal Portfolio

Personal portfolio website for Cesar Ortiz — founder, product builder, and software architect. Built as a production-quality web application showcasing technical philosophy, case studies, and the NevadaTech company story.

**Live**: [cesarortiz.co](https://cesarortiz.co)

---

## What It Does

- **Bilingual experience** (EN / ES) with locale-aware routing and fully translated content
- **8 home page sections**: Hero, About, How I Think, Projects, Experience, Skills, NevadaTech, Contact
- **Case study pages** with animated metrics and structured narrative for each project
- **Contact form** with client + server validation, delivered via Resend email API
- **Dark / Light mode** with persisted user preference
- **CV download** in both languages
- **SEO-optimized**: sitemap, robots.txt, Open Graph, locale-specific metadata, canonical URLs

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 (strict mode) |
| Styling | Tailwind CSS v4 |
| Animations | Motion v12 (Framer Motion successor) |
| i18n | next-intl v4 |
| Theming | next-themes |
| Icons | Lucide React |
| Email | Resend + React Email |
| Validation | Zod |
| Analytics | Vercel Analytics |
| Deployment | Vercel |

---

## Architecture

### Directory Structure

```
src/
├── app/
│   ├── [locale]/               # i18n dynamic segment (en / es)
│   │   ├── layout.tsx          # Locale layout — metadata, fonts, providers
│   │   ├── page.tsx            # Homepage — all sections composed here
│   │   ├── projects/[slug]/    # Dynamic case study pages
│   │   └── cv/                 # CV page
│   ├── api/contact/route.ts    # POST endpoint — email delivery via Resend
│   ├── sitemap.ts              # Dynamic sitemap generation (10 routes)
│   ├── robots.ts               # robots.txt config
│   └── manifest.ts             # PWA manifest
│
├── components/
│   ├── layout/                 # Header, Footer, ThemeProvider
│   ├── sections/               # One component per home page section
│   ├── case-study/             # Reusable case study template
│   ├── emails/                 # React Email templates
│   └── ui/                     # Primitives: ThemeToggle, LanguageSwitcher, ScrollProgress, GradientGlow
│
├── content/                    # Static data (projects, experience, skills)
├── i18n/                       # Locale routing, request config, navigation helpers
├── lib/                        # cn() utility, Zod validation schemas
├── styles/                     # globals.css — design tokens, custom animations
└── types/                      # Shared TypeScript interfaces

messages/
├── en.json                     # English translations
└── es.json                     # Spanish translations
```

### Key Patterns

#### i18n Routing
Uses `next-intl` with a dynamic `[locale]` segment. Middleware in `src/proxy.ts` auto-detects locale. Navigation helpers in `src/i18n/navigation.ts` wrap Next.js primitives to preserve locale on every link.

```
/en           → English homepage
/es           → Spanish homepage
/en/projects/nevada-demo
/es/projects/nevada-demo
```

#### Content-Driven Architecture
Static content (projects, experience, skills) lives in `src/content/` as typed TypeScript. Translations live in `messages/`. Components receive data as props — no content hard-coded in components.

#### Server / Client Boundary
- **Server components**: metadata generation, static content rendering, i18n translation fetching
- **Client components**: interactive sections (animations, forms, hamburger menu, scroll tracking)

#### Form Architecture
```
User input → Zod client validation → POST /api/contact → Zod server validation → Resend API → React Email template
```
Includes a honeypot field for spam prevention.

#### Animation Strategy
All animations use the Motion library (`motion/react`). Key patterns:

- **Entrance on scroll**: `whileInView` + `viewport={{ once: true }}`
- **Stagger children**: `staggerChildren` delay between list items
- **Reduced motion**: `useReducedMotion()` sets all durations to `0ms` — animations are opt-out, not opt-in
- **Interactive**: spotlight radial gradient on project cards follows mouse position

#### Header / Navigation
Fixed navbar with scroll-aware active section tracking via `IntersectionObserver`. On mobile, a drawer slides in from the right with staggered nav item animations. Body scroll is locked while the drawer is open.

#### Design Tokens
Tailwind v4 CSS-first theming. All colors are CSS custom properties:

```css
/* Example tokens */
--color-background
--color-foreground
--color-accent          /* #2563eb light / #3b82f6 dark */
--color-accent-secondary /* #7c3aed */
--color-card
--color-border
```

Typography uses **Inter** (sans) and **JetBrains Mono** (code), loaded via `next/font/google`.

---

## Implemented Patterns

| Pattern | Where |
|---|---|
| App Router with i18n segments | `src/app/[locale]/` |
| Dynamic static generation (`generateStaticParams`) | `projects/[slug]/page.tsx` |
| Server Actions alternative (API Route) | `app/api/contact/route.ts` |
| Content / UI separation | `src/content/` + `src/components/` |
| Compound component (case study) | `components/case-study/case-study.tsx` |
| Controlled form with Zod | `components/sections/contact.tsx` |
| Scroll-based IntersectionObserver | `components/layout/header.tsx` |
| Animated counter (useEffect + rAF) | `components/case-study/case-study.tsx` |
| Spotlight mouse-follow effect | `components/sections/projects.tsx` |
| Honeypot anti-spam | `components/sections/contact.tsx` + API route |
| React Email templates | `components/emails/contact.tsx` |
| CSS custom property theming (Tailwind v4) | `src/styles/globals.css` |
| `cn()` utility (clsx + tailwind-merge) | `src/lib/utils.ts` |
| `useReducedMotion` accessibility | All animated sections |

---

## Getting Started

### Prerequisites

- Node.js 20+
- A [Resend](https://resend.com) account and API key

### Setup

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local
# Add your RESEND_API_KEY to .env.local

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

```bash
npm run dev      # Development server
npm run build    # Production build
npm run start    # Production server
npm run lint     # ESLint
```

### Bundle Analysis

```bash
ANALYZE=true npm run build
```

---

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| `RESEND_API_KEY` | Yes | API key for email delivery via Resend |

---

## SEO

- **Sitemap**: `/sitemap.xml` — auto-generated, 10 routes (2 locales × 5 paths)
- **robots.txt**: `/robots.txt` — allow all, sitemap reference
- **Open Graph**: locale-specific (`en_US` / `es_CO`), title, description
- **Canonical**: per-locale canonical URL
- **Favicons**: theme-aware SVG (light + dark mode)
- **Lighthouse target**: ≥90 across all categories

---

## Deployment

Deployed on [Vercel](https://vercel.com). Set the `RESEND_API_KEY` environment variable in your Vercel project settings.

---

## License

MIT
