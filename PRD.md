# Product Requirements Document (PRD)

## Personal Portfolio Website — Cesar Javier Ortiz Montero

| Field          | Value                                    |
| -------------- | ---------------------------------------- |
| Author         | Cesar Javier Ortiz Montero              |
| Version        | 1.0                                      |
| Status         | Draft                                    |
| Created        | 2026-03-19                               |
| Last Updated   | 2026-03-19                               |
| Target Launch  | TBD                                      |

---

## Table of Contents

1. [Overview](#1-overview)
2. [Goals & Success Metrics](#2-goals--success-metrics)
3. [Target Audience](#3-target-audience)
4. [User Stories](#4-user-stories)
5. [Information Architecture](#5-information-architecture)
6. [Page Requirements](#6-page-requirements)
7. [Technical Requirements](#7-technical-requirements)
8. [Design Requirements](#8-design-requirements)
9. [i18n Requirements](#9-i18n-requirements)
10. [Performance Requirements](#10-performance-requirements)
11. [SEO Requirements](#11-seo-requirements)
12. [Content Requirements](#12-content-requirements)
13. [Project Showcase Requirements](#13-project-showcase-requirements)
14. [Future Considerations](#14-future-considerations)
15. [Out of Scope (v1)](#15-out-of-scope-v1)

---

## 1. Overview

### 1.1 Product Summary

A personal portfolio website for Cesar Javier Ortiz Montero — Full Stack Developer, CEO & Co-Founder of NevadaTech, and AWS certified cloud practitioner based in Santa Marta, Colombia.

This is **not** a conventional "hire me" developer portfolio. It is a **product-builder / founder / architect** portfolio that communicates how Cesar thinks about problems, designs systems, and builds products — not just what technologies he uses. The central narrative is the transition from Accounting & Finance into software engineering and entrepreneurship, culminating in co-founding NevadaTech (nevadatech.co), a digital transformation company.

### 1.2 Core Narrative

> "From accountant to CEO building enterprise SaaS products."

The portfolio must surface personality, technical philosophy, and the founder journey. Every section should reinforce the idea that Cesar is someone who understands both the business problem and the engineering solution.

### 1.3 Key Differentiators

| Differentiator              | How It Manifests                                                                 |
| --------------------------- | -------------------------------------------------------------------------------- |
| Founder perspective         | Dedicated NevadaTech section, business-aware case studies                        |
| Architectural depth         | "How I Think" section, case studies that walk through design decisions            |
| Career narrative            | About section that tells the accounting-to-CEO story                             |
| Technical philosophy        | Explicit stance: concepts > code, foundations first, clean architecture          |
| Bilingual                   | Full English/Spanish i18n — reflecting the target market for NevadaTech          |

---

## 2. Goals & Success Metrics

### 2.1 Goals

| # | Goal                                                                                           | Priority |
| - | ---------------------------------------------------------------------------------------------- | -------- |
| 1 | Establish Cesar as a product-minded architect, not just another developer                      | P0       |
| 2 | Showcase 3 deep case studies that demonstrate thinking process and architectural decisions      | P0       |
| 3 | Tell the founder story — NevadaTech, the team, the vision                                      | P0       |
| 4 | Provide a bilingual (EN/ES) experience that feels native in both languages                     | P0       |
| 5 | Achieve top-tier performance, accessibility, and SEO scores                                    | P1       |
| 6 | Serve as a living proof-of-concept of Cesar's frontend capabilities                            | P1       |
| 7 | Generate inbound leads for NevadaTech and/or freelance consulting                              | P2       |

### 2.2 Success Metrics

| Metric                        | Target                  | Measurement Method        |
| ----------------------------- | ----------------------- | ------------------------- |
| Lighthouse Performance        | >= 90                   | Lighthouse CI             |
| Lighthouse Accessibility      | >= 90                   | Lighthouse CI             |
| Lighthouse Best Practices     | >= 90                   | Lighthouse CI             |
| Lighthouse SEO                | >= 90                   | Lighthouse CI             |
| Largest Contentful Paint      | < 2.5s                  | Core Web Vitals           |
| First Input Delay             | < 100ms                 | Core Web Vitals           |
| Cumulative Layout Shift       | < 0.1                   | Core Web Vitals           |
| Time to Interactive           | < 1s on 4G              | WebPageTest               |
| Contact form submissions      | Baseline tracking       | Analytics events          |
| CV download count             | Baseline tracking       | Analytics events          |
| Average session duration      | > 2 minutes             | Vercel Analytics          |
| Bounce rate                   | < 50%                   | Vercel Analytics          |

---

## 3. Target Audience

### 3.1 Primary Audiences

| Audience                  | What They Care About                                                          | Key Sections                          |
| ------------------------- | ----------------------------------------------------------------------------- | ------------------------------------- |
| Potential clients         | Can this person/company solve my business problem?                            | Case Studies, NevadaTech, Contact     |
| Hiring managers / CTOs    | Depth of architectural knowledge, leadership, real-world results              | How I Think, Case Studies, Experience |
| Technical recruiters      | Stack, years of experience, certifications, downloadable CV                   | Skills, Experience, CV Download       |
| Fellow developers         | Technical philosophy, code quality, architecture patterns                     | How I Think, Case Studies, Blog*      |
| Potential co-founders     | Vision, leadership ability, track record of building                          | About, NevadaTech, Case Studies       |

### 3.2 Secondary Audiences

- **NevadaTech prospects** arriving via the company site who want to learn about the CEO.
- **Conference organizers / community leaders** evaluating Cesar as a speaker or mentor.

---

## 4. User Stories

### 4.1 Navigation & Discovery

| ID    | Story                                                                                                     | Priority |
| ----- | --------------------------------------------------------------------------------------------------------- | -------- |
| US-01 | As a visitor, I want to immediately understand who Cesar is and what he does within 5 seconds of landing.  | P0       |
| US-02 | As a visitor, I want to navigate to any section within 1 click from any page.                              | P0       |
| US-03 | As a visitor, I want to switch between English and Spanish without losing my scroll position or context.   | P0       |
| US-04 | As a visitor, I want to toggle between dark and light mode, and have my preference remembered.             | P0       |
| US-05 | As a mobile user, I want the full experience on my phone with no horizontal scroll or broken layouts.      | P0       |

### 4.2 Content Consumption

| ID    | Story                                                                                                     | Priority |
| ----- | --------------------------------------------------------------------------------------------------------- | -------- |
| US-06 | As a potential client, I want to read a case study to understand how Cesar approaches a real problem.      | P0       |
| US-07 | As a hiring manager, I want to see career progression with quantifiable achievements.                      | P0       |
| US-08 | As a recruiter, I want to download a PDF resume in one click.                                              | P0       |
| US-09 | As a developer, I want to understand Cesar's technical philosophy and what principles guide his work.      | P1       |
| US-10 | As a visitor, I want to see what technologies Cesar uses grouped by context, not just a wall of logos.     | P1       |

### 4.3 Engagement & Contact

| ID    | Story                                                                                                     | Priority |
| ----- | --------------------------------------------------------------------------------------------------------- | -------- |
| US-11 | As a potential client, I want to contact Cesar directly through a form without leaving the site.           | P0       |
| US-12 | As a visitor, I want to access Cesar's LinkedIn, GitHub, and email quickly.                                | P0       |
| US-13 | As a visitor, I want to learn about NevadaTech and its services from the portfolio.                        | P1       |

### 4.4 Accessibility & Performance

| ID    | Story                                                                                                     | Priority |
| ----- | --------------------------------------------------------------------------------------------------------- | -------- |
| US-14 | As a user with a screen reader, I want all content to be properly labeled and navigable.                   | P0       |
| US-15 | As a user on a slow connection, I want the site to load fast and be usable within 1 second.               | P0       |

---

## 5. Information Architecture

### 5.1 Sitemap

```
/
├── /[locale]/                          # Landing / Hero
│   ├── #about                          # About / My Story (section)
│   ├── #how-i-think                    # Technical Philosophy (section)
│   ├── #projects                       # Project Cards (section)
│   ├── #experience                     # Experience Timeline (section)
│   ├── #skills                         # Skills & Technologies (section)
│   ├── #nevadatech                     # NevadaTech Founder Section (section)
│   ├── #contact                        # Contact Form (section)
│   │
│   ├── /projects/
│   │   ├── /nevada-inventory           # Case Study: Nevada Inventory System
│   │   ├── /meeting-scheduler          # Case Study: Meeting Scheduler
│   │   └── /nevadatech                 # Case Study: NevadaTech Founder Story
│   │
│   └── /cv                             # CV Download / Preview page
│
├── /sitemap.xml
├── /robots.txt
└── /manifest.json
```

### 5.2 Navigation Structure

**Primary Navigation (persistent header):**

| Item           | Target                   | Type       |
| -------------- | ------------------------ | ---------- |
| About          | `#about`                 | Scroll     |
| How I Think    | `#how-i-think`           | Scroll     |
| Projects       | `#projects`              | Scroll     |
| Experience     | `#experience`            | Scroll     |
| NevadaTech     | `#nevadatech`            | Scroll     |
| Contact        | `#contact`               | Scroll     |
| [Lang Toggle]  | Switch locale            | Action     |
| [Theme Toggle] | Switch dark/light        | Action     |
| [CV Download]  | `/cv` or direct PDF      | Link       |

**Mobile Navigation:** Hamburger menu or slide-out drawer with the same items.

### 5.3 Page Types

| Type            | Layout Strategy                              | Examples                        |
| --------------- | -------------------------------------------- | ------------------------------- |
| Landing page    | Single-page with scroll sections             | `/en/`, `/es/`                  |
| Case study page | Long-form article with sidebar navigation    | `/en/projects/nevada-inventory` |
| CV page         | Print-optimized layout with download button  | `/en/cv`                        |

---

## 6. Page Requirements

### 6.1 Hero / Landing Section

**Purpose:** Immediate identification — who Cesar is, what he does, why he's different.

| Element                | Details                                                                              |
| ---------------------- | ------------------------------------------------------------------------------------ |
| Name                   | "Cesar Javier Ortiz Montero" — full, prominent                                      |
| Title                  | "Full Stack Developer & Founder"                                                     |
| Tagline                | Short, memorable (e.g., "Developer. Founder. Problem Solver." — finalize in design)  |
| Brief intro            | 1-2 sentences max. Sets the narrative tone.                                          |
| Primary CTA            | "View my work" → scrolls to Projects section                                         |
| Secondary CTA          | "Get in touch" → scrolls to Contact section                                          |
| Social links           | GitHub, LinkedIn, email — icon-only, accessible labels                               |
| Background             | Subtle, clean — no distracting patterns. Optional: minimal animated gradient or mesh |

**Behavior:**
- Fade-in animation on load (< 300ms, reduced-motion safe).
- Name and tagline must be visible without scrolling on all viewports.

### 6.2 About / My Story Section

**Purpose:** The narrative that differentiates Cesar from every other developer portfolio.

| Element                 | Details                                                                                         |
| ----------------------- | ----------------------------------------------------------------------------------------------- |
| Personal photo          | Professional headshot or candid professional photo. Optimized via `next/image`.                  |
| Story narrative         | 3-4 paragraphs covering: accounting background → discovering tech → learning to code → building products → founding NevadaTech. Written in first person. |
| Key values              | 3-4 value cards (e.g., "Concepts over code", "Foundations first", "Build to last", "Lead with curiosity") |
| AWS certification badge | Visual badge with link to verification                                                          |

**Content Guidelines:**
- Conversational but professional tone.
- Must answer: "Why should I care about this person?"
- Avoid generic statements like "passionate developer" — show, don't tell.

### 6.3 How I Think Section

**Purpose:** Showcase technical philosophy and approach to problem-solving. This is the differentiator.

| Element                 | Details                                                                                                    |
| ----------------------- | ---------------------------------------------------------------------------------------------------------- |
| Philosophy pillars      | 3-5 cards/blocks, each with a principle title and short explanation                                         |
| Architecture approach   | Visual or textual explanation of preferred patterns (Clean, Hexagonal, DDD, Screaming Architecture)         |
| Decision-making process | Brief walkthrough of how Cesar approaches a new project (understand the domain → define boundaries → choose patterns → implement → test) |

**Suggested Pillars:**

1. **Concepts > Code** — Understanding WHY before writing HOW. Frameworks change; principles don't.
2. **Architecture First** — Clean, Hexagonal, DDD. The structure should scream the domain.
3. **Foundations Before Frameworks** — Design patterns, TypeScript, bundlers — then React/Angular.
4. **Test Everything That Matters** — 7,749 tests and 97% coverage isn't vanity; it's confidence.
5. **Build Products, Not Projects** — Think like a founder: business impact, user experience, maintainability.

### 6.4 Projects / Case Studies Section

**Purpose:** The proof. Three deep case studies that show thinking, not just output.

**Landing view (on main page):**

| Element                | Details                                                               |
| ---------------------- | --------------------------------------------------------------------- |
| Project cards          | 3 cards, one per project                                              |
| Card content           | Project name, one-line description, key tech tags, thumbnail/mockup   |
| Card interaction       | Hover effect (subtle scale or border glow), click → case study page   |
| Featured label         | Optional "Featured" or "SaaS" badge on Nevada Inventory               |

**Case study page structure:** See [Section 13](#13-project-showcase-requirements) for detailed requirements per project.

### 6.5 NevadaTech Founder Section

**Purpose:** Tell the company story — this is as much about leadership as it is about technology.

| Element                | Details                                                                                         |
| ---------------------- | ----------------------------------------------------------------------------------------------- |
| Company intro          | What NevadaTech does, when it was founded, the mission                                          |
| Co-founders            | Cesar (CEO), Andres Santana (CTO), Marlon Ramirez (COO) — photos + short bios                  |
| Services overview      | Categorized list: Web Dev, Mobile, Cloud, AI/ML, UI/UX, DevOps, Consulting, E-commerce         |
| Client logos/names     | Bambu Coliving, ToPra, FZ Academia, VR Experience                                              |
| CTA                    | "Visit nevadatech.co" — external link, opens in new tab                                        |
| Company values/vision  | Brief statement about digital transformation and the Colombian/LatAm tech ecosystem             |

### 6.6 Skills & Technologies Section

**Purpose:** Show technical breadth with context — not a logo dump.

**Grouping:**

| Category       | Technologies                                                                        |
| -------------- | ----------------------------------------------------------------------------------- |
| Frontend       | React, Next.js, Angular, TypeScript, Tailwind CSS, shadcn/ui, Framer Motion        |
| Backend        | Node.js, NestJS, GraphQL, Apollo, REST                                               |
| Databases      | PostgreSQL, MongoDB, Prisma, Redis                                                   |
| Architecture   | Clean Architecture, Hexagonal, DDD, Screaming Architecture, CQRS                    |
| Cloud & DevOps | AWS (certified), Vercel, Docker, CI/CD                                               |
| Tools          | Git, LazyVim, Tmux/Zellij, Figma                                                    |

**Presentation:**
- Each technology with an icon and proficiency context (e.g., "Primary stack" / "Production experience" / "Familiar").
- Avoid arbitrary skill bars or percentage ratings — they are meaningless.
- Consider grouping as tabbed panels or an interactive grid.

### 6.7 Experience Timeline Section

**Purpose:** Career progression with substance.

| Element                | Details                                                                                         |
| ---------------------- | ----------------------------------------------------------------------------------------------- |
| Timeline format        | Vertical timeline, most recent first                                                            |
| Each entry             | Company, role, date range, 2-3 bullet points with quantifiable achievements                     |
| Highlight              | NevadaTech as current — visually distinct (larger card, different color)                         |

**Required achievements to feature:**
- 40% response time reduction (Frava Digital or relevant company)
- 7,749 tests / 97% coverage (Nevada Inventory)
- Multi-tenant SaaS designed for 50+ warehouses, 100,000+ products
- Any other quantifiable impact from past roles

### 6.8 Contact Section

**Purpose:** Make it frictionless to reach out.

| Element                | Details                                                                    |
| ---------------------- | -------------------------------------------------------------------------- |
| Contact form           | Name, email, message — minimal fields, client-side validation with Zod     |
| Form submission        | Server action or API route → email delivery (Resend, SendGrid, or similar) |
| Direct links           | Email (mailto), LinkedIn, GitHub — icon + text                             |
| Location               | "Santa Marta, Colombia" — text only, no map                               |
| Availability status    | Optional: "Open to consulting" / "Available for projects" indicator        |

**Validation:**
- Name: required, min 2 characters
- Email: required, valid email format
- Message: required, min 10 characters
- Honeypot field for basic spam prevention

### 6.9 Downloadable CV Page

**Purpose:** One-click access to a professional resume.

| Element                | Details                                                                    |
| ---------------------- | -------------------------------------------------------------------------- |
| PDF download button    | Prominent, above the fold                                                  |
| Inline preview         | Optional: render CV content as a web page (print-optimized CSS)            |
| CV versions            | English and Spanish — auto-detect from current locale                      |
| File naming            | `cesar-ortiz-cv-en.pdf` / `cesar-ortiz-cv-es.pdf`                         |

---

## 7. Technical Requirements

### 7.1 Stack

| Layer              | Technology                  | Version    | Notes                                      |
| ------------------ | --------------------------- | ---------- | ------------------------------------------ |
| Framework          | Next.js                     | 15+        | App Router, SSG, ISR                       |
| UI Library         | React                       | 19         | Server Components where possible           |
| Language           | TypeScript                  | 5.x        | Strict mode enabled                        |
| Styling            | Tailwind CSS                | v4         | Design tokens via CSS variables            |
| Animation          | Framer Motion               | Latest     | Subtle, professional, reduced-motion safe  |
| i18n               | next-intl                   | Latest     | URL-based locale routing                   |
| Theming            | next-themes                 | Latest     | System detection + manual toggle           |
| Deployment         | Vercel                      | —          | Preview deployments, custom domain         |
| Analytics          | Vercel Analytics            | —          | Privacy-friendly, no cookie banner needed  |

### 7.2 Architecture Principles

- **App Router** — All routes use the Next.js App Router (`app/` directory).
- **Server Components by default** — Client Components only when interactivity is required (theme toggle, language switcher, contact form, animations).
- **Static Generation (SSG)** — All pages are statically generated at build time. No SSR required for v1.
- **Component structure** — Atomic design: atoms, molecules, organisms, templates, pages.
- **Separation of concerns** — Content (i18n JSON files) separated from components. No hardcoded strings.

### 7.3 Project Structure (Recommended)

```
src/
├── app/
│   └── [locale]/
│       ├── layout.tsx
│       ├── page.tsx                    # Landing page with all sections
│       ├── projects/
│       │   └── [slug]/
│       │       └── page.tsx            # Case study pages
│       └── cv/
│           └── page.tsx                # CV page
├── components/
│   ├── ui/                            # Atoms: Button, Badge, Card, etc.
│   ├── sections/                      # Organisms: Hero, About, Projects, etc.
│   ├── layout/                        # Header, Footer, Navigation
│   └── case-study/                    # Case study specific components
├── content/
│   ├── projects/                      # Case study data (MDX or JSON)
│   └── experience/                    # Timeline data
├── i18n/
│   ├── en.json
│   ├── es.json
│   └── request.ts                     # next-intl config
├── lib/
│   ├── utils.ts
│   └── validations.ts                 # Zod schemas
├── styles/
│   └── globals.css                    # Tailwind directives, CSS variables
└── types/
    └── index.ts                       # Shared TypeScript types
```

### 7.4 Dependencies (Core)

| Package              | Purpose                                |
| -------------------- | -------------------------------------- |
| `next`               | Framework                              |
| `react`, `react-dom` | UI library                             |
| `typescript`         | Language                               |
| `tailwindcss`        | Styling                                |
| `framer-motion`      | Animations                             |
| `next-intl`          | Internationalization                   |
| `next-themes`        | Dark/light mode                        |
| `zod`                | Form validation                        |
| `@vercel/analytics`  | Analytics                              |
| `lucide-react`       | Icons                                  |

### 7.5 Code Quality

| Tool             | Purpose                         | Config                              |
| ---------------- | ------------------------------- | ----------------------------------- |
| ESLint           | Linting                         | Next.js recommended + strict rules  |
| Prettier         | Formatting                      | Project-wide config                 |
| TypeScript       | Type safety                     | `strict: true`, no `any`            |
| Husky            | Git hooks                       | Pre-commit: lint + format           |
| lint-staged      | Staged file processing          | Run ESLint + Prettier on staged     |

---

## 8. Design Requirements

### 8.1 Design Principles

1. **Minimalist and clean** — Whitespace is a feature, not wasted space.
2. **Content-first** — The design serves the content, never the other way around.
3. **Mobile-first responsive** — Designed for mobile, enhanced for desktop.
4. **Subtle motion** — Animations add polish, not distraction. All animations respect `prefers-reduced-motion`.
5. **Professional, not corporate** — Warm, approachable, human — but still serious.

### 8.2 Design References

| Reference                          | What to Borrow                                              |
| ---------------------------------- | ----------------------------------------------------------- |
| brittanychiang.com                 | Dark minimalist aesthetic, one-page flow, sticky nav         |
| itssharl.ee                        | Dark/light mode implementation, Next.js patterns             |
| codewonders.dev                    | Pure minimalism, typography-forward, clean spacing           |

### 8.3 Typography

| Role           | Recommendation                                         |
| -------------- | ------------------------------------------------------ |
| Headings       | Inter, Satoshi, or similar geometric sans-serif         |
| Body           | Same family or complementary sans-serif                 |
| Code/mono      | JetBrains Mono or Fira Code (for case study code blocks)|
| Loading        | `next/font` for zero-FOUT optimization                  |

### 8.4 Color System

**Dark Mode (Primary):**

| Token                 | Usage                    | Guideline                              |
| --------------------- | ------------------------ | -------------------------------------- |
| `--background`        | Page background          | Near-black (e.g., `#0a0a0a`)          |
| `--foreground`        | Primary text             | Off-white (e.g., `#ededed`)           |
| `--muted`             | Secondary text           | Gray (e.g., `#888888`)               |
| `--accent`            | Links, CTAs, highlights  | Brand color (choose: blue, teal, or green) |
| `--border`            | Dividers, card borders   | Subtle gray (e.g., `#222222`)         |

**Light Mode:**
- Inverted palette with the same accent color.
- Ensure minimum 4.5:1 contrast ratio for all text (WCAG AA).

### 8.5 Spacing & Layout

| Property            | Value                                          |
| ------------------- | ---------------------------------------------- |
| Max content width   | 1200px (prose sections: 720px)                 |
| Section padding     | 80px-120px vertical on desktop, 48px on mobile |
| Grid system         | CSS Grid / Tailwind grid, 12-column            |
| Breakpoints         | Tailwind defaults: sm(640), md(768), lg(1024), xl(1280) |

### 8.6 Animation & Interaction System

#### 8.6.1 Animation Philosophy

> Motion should **guide, inform, and delight** — never distract. Every animation must serve a purpose: draw attention to content, provide feedback, or enhance spatial understanding. The portfolio itself is proof of craft — animations should feel intentional, not gratuitous.

**Technology stack:**
- **Framer Motion** — Primary animation library (scroll reveals, page transitions, layout animations, hover effects)
- **CSS Scroll-Driven Animations** — For scroll progress indicator and simple parallax (compositor thread, zero JS)
- **CSS transitions** — For micro-interactions (hover states, focus styles, color transitions)
- **Lenis** — Smooth scrolling library (optional, only if design demands momentum scrolling; otherwise native `scroll-behavior: smooth`)

**Performance rules:**
- ONLY animate GPU-accelerated properties: `transform` (translate, scale, rotate) and `opacity`
- NEVER animate: `width`, `height`, `top`, `left`, `margin`, `padding`, `box-shadow` on multiple elements, `filter: blur()` > 10px
- Stagger animations rather than running many simultaneously
- Framer Motion bundle: ~32KB gzipped — acceptable for the interaction value it provides

#### 8.6.2 Scroll Animations

| Animation | Section | Behavior | Technology | Duration |
|-----------|---------|----------|------------|----------|
| Fade-up reveal | All sections | Elements fade in and translate up (20px) as they enter viewport | Framer Motion `whileInView` | 400-600ms, ease-out |
| Staggered children | Skills grid, Experience timeline, Project cards | Children animate sequentially with 50-100ms delay between each | Framer Motion `staggerChildren` variant | 50-100ms stagger |
| Scroll progress bar | Global (top of page) | Thin line across top of viewport showing reading progress | CSS `animation-timeline: scroll()` | Continuous, no JS |
| Section heading reveal | All section headings | Heading slides up with slight opacity fade | Framer Motion `whileInView` | 300-400ms, ease-out |
| Parallax background | Hero section only | Subtle background element moves at 0.3x scroll speed | CSS `animation-timeline: scroll()` | Continuous |

**Scroll animation rules:**
- Use `viewport={{ once: true }}` — elements animate only on FIRST appearance, not on re-scroll
- Translate distance: 20-30px maximum (subtle, not dramatic)
- Parallax speed differential: 0.2-0.3x maximum (higher causes motion sickness)
- No horizontal scroll animations

#### 8.6.3 Hero Section Animations

| Animation | Element | Behavior | Technology | Duration |
|-----------|---------|----------|------------|----------|
| Split text reveal | Name (h1) | Characters/words animate in sequentially with slight fade-up | Framer Motion `staggerChildren` + `motion.span` per word | 600-800ms total, 40ms stagger per word |
| Fade-up | Title/tagline | Fades in and translates up after name animation completes | Framer Motion `animate` with delay | 400ms, ease-out, 200ms delay after name |
| Fade-in | CTAs + social links | Appear after tagline, slight scale from 0.95 | Framer Motion `animate` with delay | 300ms, ease-out, 400ms delay after name |
| Subtle gradient shift | Background (optional) | Slow-moving gradient or mesh that shifts color subtly | CSS `@keyframes` with `background-position` | 15-20s loop, linear |

**Hero animation sequence (orchestrated):**
1. Name text reveals (0ms - 800ms)
2. Title/tagline fades up (800ms - 1200ms)
3. CTAs and social links appear (1000ms - 1300ms)
4. Total hero animation: < 1.5 seconds

#### 8.6.4 Hover & Cursor Interactions

| Interaction | Element | Behavior | Technology | Duration |
|-------------|---------|----------|------------|----------|
| Spotlight cursor | Project cards | Radial gradient glow follows cursor position over the card, revealing a subtle light effect | Framer Motion `useMotionValue` + `useTransform` tracking mouse position | Continuous (follows cursor) |
| Card lift | Project cards | Scale to 1.02x + subtle border glow on hover | Framer Motion `whileHover` | 200ms, ease-in-out |
| Image zoom | Project card thumbnails | Inner image scales to 1.05x within clipped container | CSS `transform: scale()` on `:hover` | 300ms, ease-out |
| Nav underline | Navigation links | Underline expands from center using `scaleX` transform | CSS `::after` pseudo-element with `transform: scaleX()` | 200ms, ease-in-out |
| Button feedback | All buttons | Scale down to 0.97x on press, subtle color shift on hover | Framer Motion `whileHover` + `whileTap` | 100ms tap, 150ms hover |
| Social icon hover | Social links (GitHub, LinkedIn, etc.) | Slight lift (translateY -2px) + color transition to brand color | CSS `transition` on `:hover` | 200ms, ease |
| Skill tag hover | Technology tags | Background color fill animation + subtle scale | CSS `transition` | 150ms, ease |
| Link hover | Inline text links | Underline offset animation (moves down slightly, changes color) | CSS `text-decoration` + `transition` | 150ms, ease |

**Spotlight cursor specification:**
- Track mouse position relative to card using `onMouseMove`
- Apply radial gradient at cursor position: `radial-gradient(600px circle at ${x}px ${y}px, rgba(accent, 0.06), transparent 40%)`
- Effect visible only on hover (opacity 0 → 1 on card enter)
- Inspired by brittanychiang.com card effect
- Must NOT interfere with card content readability

#### 8.6.5 Page Transitions

| Transition | Trigger | Behavior | Technology | Duration |
|------------|---------|----------|------------|----------|
| Page exit | Navigate away | Current page fades out + slight translateY down (10px) | Framer Motion `AnimatePresence` with `mode="wait"` | 200ms, ease-in |
| Page enter | Route loads | New page fades in + translateY up from 10px | Framer Motion `AnimatePresence` | 300ms, ease-out |
| Case study enter | Click project card → case study | Card position morphs/expands into case study header (optional, stretch goal) | Framer Motion `layoutId` shared layout animation | 400ms, spring |

**Page transition rules:**
- Total transition time (exit + enter): < 500ms
- `AnimatePresence` must wrap page content, NOT layout/navigation
- Context providers must be BELOW the transition wrapper
- After exit animation completes, scroll to top before enter animation
- Add `scroll={false}` to `<Link>` components to prevent premature scroll

#### 8.6.6 Theme Toggle Animation

| Animation | Element | Behavior | Technology | Duration |
|-----------|---------|----------|------------|----------|
| Icon morph | Theme toggle button | Sun ↔ Moon icon transition with rotation + scale | Framer Motion `AnimatePresence` + `layout` | 300ms, spring (stiffness: 200, damping: 10) |
| Color transition | All themed elements | Background, text, and border colors transition smoothly | CSS `transition: color, background-color, border-color` | 200ms, ease |
| No flash | Page load | Prevent FOUC (Flash of Unstyled Content) on theme load | `next-themes` with `attribute="class"` + script in `<head>` | Instant |

#### 8.6.7 Navigation Animations

| Animation | Element | Behavior | Technology | Duration |
|-----------|---------|----------|------------|----------|
| Sticky blur | Header | Blur background + slight shadow appears on scroll past hero | CSS `backdrop-filter: blur(12px)` + Framer Motion scroll listener | 200ms, ease |
| Auto-hide/show | Header (optional) | Header hides on scroll down, appears on scroll up | Framer Motion `useScroll` + `useMotionValueEvent` | 200ms, ease-in-out |
| Active section highlight | Nav links | Current section link gets accent color/underline as user scrolls | Intersection Observer + CSS transition | 150ms, ease |
| Mobile menu | Hamburger → slide drawer | Menu slides in from right with staggered link appearance | Framer Motion `animate` + `staggerChildren` | 300ms slide, 50ms stagger per item |
| Hamburger morph | Menu icon | Three bars morph into X on open | CSS transform on `::before` / `::after` pseudo-elements | 200ms, ease |

#### 8.6.8 Contact Form Interactions

| Interaction | Element | Behavior | Technology | Duration |
|-------------|---------|----------|------------|----------|
| Label float | Form inputs | Label moves from inside input to above on focus | CSS `transform: translateY()` + `:focus-within` | 200ms, ease |
| Focus ring | Form inputs | Border transitions to accent color on focus | CSS `transition: border-color` | 150ms, ease |
| Validation feedback | Form inputs | Red border + error message slides in on invalid, green check on valid | Framer Motion `AnimatePresence` for error message | 200ms, ease-out |
| Submit button | Submit CTA | Loading spinner appears inside button, disabling interaction | Framer Motion `AnimatePresence` + `layout` | 200ms |
| Success state | Form | Form fades out, success message with checkmark animation fades in | Framer Motion `AnimatePresence` | 400ms, ease |

#### 8.6.9 Experience Timeline Animations

| Animation | Element | Behavior | Technology | Duration |
|-----------|---------|----------|------------|----------|
| Line draw | Timeline vertical line | Line draws downward as user scrolls through section | CSS `animation-timeline: view()` with `clip-path` or `scaleY` | Continuous with scroll |
| Node appear | Timeline dots/nodes | Each dot scales from 0 → 1 as timeline line reaches it | Framer Motion `whileInView` | 300ms, spring |
| Card reveal | Experience cards | Alternating cards slide in from left/right (desktop), fade-up (mobile) | Framer Motion `whileInView` with directional variants | 400ms, ease-out, 100ms stagger |

#### 8.6.10 Case Study Page Animations

| Animation | Element | Behavior | Technology | Duration |
|-----------|---------|----------|------------|----------|
| Header parallax | Case study hero image/banner | Image moves at 0.3x scroll speed behind title | CSS `animation-timeline: scroll()` | Continuous |
| Section reveals | Content blocks | Staggered fade-up as sections enter viewport | Framer Motion `whileInView` | 400ms, ease-out |
| Code block appear | Code snippets | Slides in with subtle border glow | Framer Motion `whileInView` | 300ms, ease-out |
| Architecture diagram | Diagrams/images | Fade in + slight scale from 0.95 | Framer Motion `whileInView` | 500ms, ease-out |
| Stats counter | Key metrics (97% coverage, 7749 tests, etc.) | Number counts up from 0 to final value when in viewport | Framer Motion `useInView` + `useSpring` for value interpolation | 1000-1500ms |
| Tech stack chips | Technology badges in case study | Staggered appearance with slight scale + fade | Framer Motion `staggerChildren` | 50ms stagger |

#### 8.6.11 Accessibility — Reduced Motion Protocol

**This is MANDATORY, not optional.**

| Requirement | Implementation |
|-------------|----------------|
| Global detection | Use Framer Motion `useReducedMotion()` hook at app level |
| Fallback behavior | All scroll reveals → instant `opacity: 1` (no translate, no stagger) |
| Parallax | Disabled entirely — elements render at final position |
| Page transitions | Instant cut (no fade, no slide) |
| Hover effects | Preserved (non-motion-based: color shifts, opacity changes only) |
| Spotlight cursor | Preserved (follows cursor, no animation per se) |
| Theme toggle | Instant color switch (no rotation on icon) |
| Stats counter | Show final number immediately (no counting animation) |
| CSS implementation | `@media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; } }` |
| Framer Motion | Create `reducedMotionVariants` that set `transition: { duration: 0 }` and remove all `translateY`/`translateX` |
| Testing | Test with "Reduce motion" enabled in OS accessibility settings |

**Reduced motion does NOT mean no visual feedback.** Color changes, opacity shifts, and focus states should still work — only MOVEMENT is removed.

#### 8.6.12 Animation Performance Budget

| Metric | Target |
|--------|--------|
| Simultaneous animated elements | Max 10 at any given time |
| Animation JS bundle (Framer Motion) | ~32KB gzipped |
| Frame rate during animations | 60fps (test on mid-range mobile) |
| Main thread blocking | 0ms (all animations on compositor thread or rAF) |
| Layout thrashing | Zero — no animated property triggers layout |

**Testing protocol:**
- Chrome DevTools Performance tab — look for long "Recalculate Style" or "Layout" entries during animations
- Test on real mobile devices (not just throttled desktop)
- Lighthouse Performance score must remain 90+ with all animations active

### 8.7 Component Design Specifications

| Component         | Specs                                                                          |
| ----------------- | ------------------------------------------------------------------------------ |
| Buttons           | Rounded (8px), clear hover/focus states, minimum 44x44px touch target          |
| Cards             | Subtle border or shadow, hover lift effect, consistent padding (24px)          |
| Timeline          | Vertical line with dots, alternating sides on desktop, single column on mobile |
| Navigation        | Sticky top, blur background, auto-hide on scroll down (optional)               |
| Project cards     | Image/mockup + title + description + tech tags + CTA + spotlight cursor effect |
| Skill items       | Icon + name + context label, grid layout                                       |

---

## 9. i18n Requirements

### 9.1 Supported Locales

| Locale | Language | Status   |
| ------ | -------- | -------- |
| `en`   | English  | Primary  |
| `es`   | Spanish  | Primary  |

### 9.2 Routing Strategy

- URL-based locale prefix: `/en/...`, `/es/...`
- Default locale: `en` (configurable)
- Locale detection: `Accept-Language` header on first visit → redirect to detected locale
- Locale persistence: Once selected, store preference (cookie or URL)

### 9.3 Translation Scope

**Everything user-facing must be translated:**

| Content Type            | Translation Method                           |
| ----------------------- | -------------------------------------------- |
| UI strings              | `next-intl` message files (JSON)             |
| Navigation labels       | i18n JSON                                    |
| Section headings        | i18n JSON                                    |
| About narrative          | i18n JSON (supports rich text / HTML)        |
| Case study content      | Separate MDX files per locale, or i18n JSON  |
| Meta titles/descriptions| i18n JSON                                    |
| Alt text for images     | i18n JSON                                    |
| CV PDF                  | Separate PDF files per locale                |
| Form validation messages| i18n JSON                                    |

### 9.4 Language Switcher

| Requirement                                                  |
| ------------------------------------------------------------ |
| Visible in the main navigation (header)                      |
| Shows current language (flag icon or text abbreviation)      |
| Clicking switches locale and updates the URL                 |
| Preserves scroll position and current section                |
| Preserves theme preference across locale switches            |

### 9.5 Content Parity

- Both languages must have 100% content parity at launch.
- No sections should fall back to English when viewing in Spanish (or vice versa).
- Case study content must be fully written in both languages — not machine-translated.

---

## 10. Performance Requirements

### 10.1 Core Web Vitals Targets

| Metric                      | Target     | Classification |
| --------------------------- | ---------- | -------------- |
| Largest Contentful Paint    | < 2.5s     | Good           |
| Interaction to Next Paint   | < 200ms    | Good           |
| Cumulative Layout Shift     | < 0.1      | Good           |

### 10.2 Lighthouse Targets

| Category         | Minimum Score |
| ---------------- | ------------- |
| Performance      | 90            |
| Accessibility    | 90            |
| Best Practices   | 90            |
| SEO              | 90            |

### 10.3 Optimization Strategies

| Strategy                     | Implementation                                                      |
| ---------------------------- | ------------------------------------------------------------------- |
| Static Generation            | All pages pre-rendered at build time (SSG)                          |
| Image optimization           | `next/image` with WebP/AVIF, responsive srcsets, lazy loading       |
| Font optimization            | `next/font` — self-hosted, preloaded, `font-display: swap`         |
| Code splitting               | Automatic via Next.js App Router + dynamic imports for heavy components |
| Bundle analysis              | `@next/bundle-analyzer` — monitor JS bundle size                    |
| CSS optimization             | Tailwind CSS purging unused styles                                  |
| Prefetching                  | Next.js Link prefetch for case study pages                          |
| Animation performance        | Framer Motion `layout` animations, GPU-accelerated transforms only  |
| Third-party scripts          | Defer analytics; no external fonts (self-hosted via next/font)      |

### 10.4 Performance Budget

| Asset Type       | Max Size (compressed) |
| ---------------- | --------------------- |
| HTML             | < 20 KB               |
| CSS              | < 30 KB               |
| JavaScript       | < 100 KB (first load) |
| Images (hero)    | < 200 KB              |
| Images (other)   | < 100 KB each         |
| Total page weight| < 500 KB (first load) |

---

## 11. SEO Requirements

### 11.1 Technical SEO

| Requirement                          | Implementation                                           |
| ------------------------------------ | -------------------------------------------------------- |
| Dynamic metadata                     | `generateMetadata()` per page with locale-aware titles   |
| Open Graph tags                      | Title, description, image, URL per page                  |
| Twitter Card tags                    | `twitter:card`, `twitter:title`, `twitter:description`   |
| Canonical URLs                       | Self-referencing canonical with locale                   |
| hreflang tags                        | `<link rel="alternate" hreflang="en" />` and `es`       |
| Sitemap                              | Auto-generated `sitemap.xml` with all localized pages    |
| Robots.txt                           | Allow all, reference sitemap                             |
| Structured data (JSON-LD)            | Person schema, Organization schema (NevadaTech)          |
| Heading hierarchy                    | Single `<h1>` per page, logical `<h2>`-`<h6>` nesting   |

### 11.2 Content SEO

| Requirement                          | Details                                                  |
| ------------------------------------ | -------------------------------------------------------- |
| Page titles                          | `{Page} | Cesar Ortiz — Full Stack Developer & Founder`  |
| Meta descriptions                    | 150-160 characters, unique per page, keyword-aware       |
| Image alt text                       | Descriptive, translated per locale                       |
| URL structure                        | Clean, readable slugs: `/en/projects/nevada-inventory`   |
| Internal linking                     | Case studies link to relevant skills/experience sections  |

### 11.3 Social Sharing

| Asset                | Specs                                                      |
| -------------------- | ---------------------------------------------------------- |
| OG Image (default)   | 1200x630px, name + title + brand color, both locales       |
| OG Image (per case study) | 1200x630px, project name + key visual                 |
| Favicon              | Multi-size: 16x16, 32x32, 180x180 (Apple Touch), SVG      |

---

## 12. Content Requirements

### 12.1 Tone & Voice

| Attribute     | Guideline                                                                         |
| ------------- | --------------------------------------------------------------------------------- |
| Tone          | Professional yet human. Warm but substantive. Confident without arrogance.        |
| Voice         | First person ("I built...", "My approach..."). Active voice. Short sentences.     |
| Avoid         | Buzzwords, jargon without explanation, passive voice, generic statements.         |
| Show          | Decisions made and WHY. Numbers and outcomes. The thinking behind the code.       |

### 12.2 Content Deliverables

| Content Item                      | Format          | Locales | Owner  |
| --------------------------------- | --------------- | ------- | ------ |
| Hero tagline + intro              | i18n JSON       | EN, ES  | Cesar  |
| About / My Story narrative        | i18n JSON       | EN, ES  | Cesar  |
| How I Think pillars               | i18n JSON       | EN, ES  | Cesar  |
| Case study: Nevada Inventory      | MDX or JSON     | EN, ES  | Cesar  |
| Case study: Meeting Scheduler     | MDX or JSON     | EN, ES  | Cesar  |
| Case study: NevadaTech            | MDX or JSON     | EN, ES  | Cesar  |
| Experience timeline entries       | JSON            | EN, ES  | Cesar  |
| Skills data                       | JSON            | EN, ES  | Cesar  |
| NevadaTech section content        | i18n JSON       | EN, ES  | Cesar  |
| Contact form labels               | i18n JSON       | EN, ES  | Cesar  |
| CV PDF                            | PDF             | EN, ES  | Cesar  |
| Professional headshot             | WebP/AVIF       | —       | Cesar  |
| Co-founder photos                 | WebP/AVIF       | —       | Cesar  |
| Project screenshots/mockups       | WebP/AVIF       | —       | Cesar  |
| OG images                         | PNG             | EN, ES  | Design |

### 12.3 Content Guidelines for Case Studies

Each case study must follow this narrative arc:

1. **The Problem** — What real-world problem existed? Who was affected? Why did it matter?
2. **The Approach** — How did Cesar think about the solution? What options were considered?
3. **Key Decisions** — Specific architectural/technical decisions with reasoning (e.g., "Why Hexagonal Architecture?" — not just "I used Hexagonal Architecture").
4. **The Build** — Notable implementation details, challenges overcome, patterns applied.
5. **The Result** — Quantifiable outcomes, current state, lessons learned.
6. **Technical Deep Dive** — Optional: architecture diagrams, code snippets (syntax highlighted), performance benchmarks.

---

## 13. Project Showcase Requirements

### 13.1 Nevada Inventory System

**Case Study Title:** "How I Designed a Multi-Tenant SaaS from Scratch: Hexagonal Architecture to 100K Products"

| Attribute              | Value                                                                              |
| ---------------------- | ---------------------------------------------------------------------------------- |
| Type                   | SaaS — Production, real paying client                                              |
| Status                 | Active / In production                                                             |

**Backend — improved-parakeet:**

| Detail                 | Value                                                                              |
| ---------------------- | ---------------------------------------------------------------------------------- |
| Framework              | NestJS 11                                                                          |
| Architecture           | DDD + Hexagonal + Screaming Architecture                                           |
| Database               | PostgreSQL + Prisma 7                                                              |
| Cache                  | Redis                                                                              |
| Auth                   | JWT + RBAC with 80+ granular permissions                                           |
| Multi-tenancy          | Full tenant isolation                                                              |
| Integration            | VTEX e-commerce platform                                                           |
| Tests                  | 7,749 tests, 97% coverage                                                         |
| Scale target           | 50+ warehouses, 100,000+ products                                                 |

**Frontend — jubilant-octo-invention:**

| Detail                 | Value                                                                              |
| ---------------------- | ---------------------------------------------------------------------------------- |
| Framework              | Next.js 16 + React 19                                                              |
| Language               | TypeScript (strict)                                                                |
| Styling                | Tailwind CSS 4 + shadcn/ui                                                         |
| Architecture           | Clean / Hexagonal Architecture                                                     |
| API pattern            | BFF (Backend for Frontend)                                                         |
| Validation             | Zod                                                                                |
| i18n                   | Full internationalization                                                          |
| Reports                | 17 report types                                                                    |

**Case Study Must Cover:**
- Why DDD + Hexagonal for an inventory system (domain complexity justification)
- Multi-tenant design decisions (data isolation strategy)
- RBAC design with 80+ permissions (how granularity was determined)
- VTEX integration challenges and solutions
- Testing strategy (why 97% coverage matters, what's in the 3%)
- Scale considerations (how architecture supports 100K+ products)
- BFF pattern rationale on the frontend

**Visual Assets Needed:**
- Architecture diagram (hexagonal layers)
- Database schema overview (simplified)
- RBAC permission model diagram
- Screenshots of key UI flows (dashboard, reports, inventory management)

### 13.2 Meeting Scheduler

**Case Study Title:** "How I Built a Fair Assignment Engine with Zero Side Effects"

| Attribute              | Value                                                                              |
| ---------------------- | ---------------------------------------------------------------------------------- |
| Type                   | Internal tool — Production                                                         |
| Status                 | Active                                                                             |

**Technical Details:**

| Detail                 | Value                                                                              |
| ---------------------- | ---------------------------------------------------------------------------------- |
| Framework              | Next.js 16.2                                                                       |
| Language               | TypeScript 5                                                                       |
| Styling                | Tailwind CSS 4                                                                     |
| Core feature           | Pure assignment engine with LRU rotation algorithm                                 |
| Key constraint         | Zero side effects in the assignment logic                                          |
| Replaces               | Manual spreadsheet-based assignment process                                        |

**Features to Highlight:**
- Publisher management system
- Meeting scheduling and assignment
- Attendant rotation with fairness guarantee (LRU)
- S-140 and S-89 printable form generation
- CSV import/export for data portability

**Case Study Must Cover:**
- The real problem: manual spreadsheets causing unfair assignments
- Why a pure function / zero side effects approach was chosen
- LRU rotation algorithm design and fairness guarantee
- How printable forms (S-140, S-89) were generated
- Design decisions around data import/export

**Visual Assets Needed:**
- Algorithm visualization (LRU rotation concept)
- Screenshots of the scheduling interface
- Example of generated S-140/S-89 forms

### 13.3 NevadaTech — Founder Story

**Case Study Title:** "From Accountant to CEO: Founding a Tech Company"

| Attribute              | Value                                                                              |
| ---------------------- | ---------------------------------------------------------------------------------- |
| Type                   | Company / Entrepreneurship                                                         |
| Website                | nevadatech.co                                                                      |
| Status                 | Active                                                                             |

**Company Details:**

| Detail                 | Value                                                                              |
| ---------------------- | ---------------------------------------------------------------------------------- |
| Co-founders            | Cesar Ortiz (CEO), Andres Santana (CTO), Marlon Ramirez (COO)                     |
| Services               | Web Dev, Mobile, Cloud, AI/ML, UI/UX, DevOps, Consulting, E-commerce              |
| Clients                | Bambu Coliving, ToPra, FZ Academia, VR Experience                                  |
| Focus                  | Digital transformation for businesses                                              |

**Case Study Must Cover:**
- The origin story: how an accountant ended up founding a tech company
- Why Santa Marta / Colombia — the LatAm tech ecosystem opportunity
- Building a team: choosing co-founders with complementary skills
- Service offering evolution — what the market needed vs. what was planned
- Client stories: real impact delivered (if possible with client permission)
- Lessons learned as a first-time founder

**Visual Assets Needed:**
- Team photo (co-founders)
- NevadaTech logo
- Client project screenshots or logos (with permission)
- Optional: office/workspace photos

---

## 14. Future Considerations

These items are explicitly **not in v1** but are planned for future iterations. The architecture should not prevent their addition.

| Feature                        | Priority | Notes                                                         |
| ------------------------------ | -------- | ------------------------------------------------------------- |
| Blog / Technical Writing       | v2       | MDX-based, categorized, with code syntax highlighting         |
| Blog RSS feed                  | v2       | Standard RSS/Atom feed for blog posts                         |
| Newsletter signup              | v2       | Email capture for technical writing updates                   |
| Testimonials section           | v2       | Client/colleague quotes with attribution                      |
| Speaking / Events section      | v2       | If conference speaking begins                                 |
| Interactive architecture demos | v3       | Live diagrams showing hexagonal/clean architecture layers     |
| Guestbook                      | v3       | Visitor-submitted messages (a la GitHub-style guestbook)      |
| CMS integration                | v3       | Headless CMS (Contentful, Sanity) for non-developer editing   |
| Additional locales             | v3       | Portuguese (for Brazilian market expansion)                   |
| A/B testing                    | v3       | Test different CTAs, layouts for conversion optimization      |

**Architectural Implications:**
- Content should be structured data (JSON/MDX), not hardcoded JSX — enabling future CMS migration.
- Blog routing should be anticipated in the URL structure (`/[locale]/blog/[slug]`).
- The i18n system should support adding new locales with minimal effort.

---

## 15. Out of Scope (v1)

The following are explicitly **excluded** from the v1 release to control scope:

| Item                                    | Reason                                                    |
| --------------------------------------- | --------------------------------------------------------- |
| Blog / articles section                 | Scope control — planned for v2                            |
| CMS integration                         | Not needed with 3 case studies — JSON/MDX is sufficient   |
| User authentication                     | No user accounts needed                                   |
| E-commerce / payments                   | Not applicable                                            |
| Database                                | Static site — no persistent data storage                  |
| Admin dashboard                         | Content managed via code, not a CMS                       |
| Automated testing (E2E)                 | Scope control — manual QA for v1, add Playwright in v2    |
| Newsletter / email capture              | Planned for v2 alongside blog                             |
| Comments system                         | No blog in v1, so no comments needed                      |
| Backend API (beyond contact form)       | Static site — contact form uses a third-party service     |
| PWA / Service Worker                    | Scope control — not needed for a portfolio site           |
| Complex page transitions                | Performance risk — simple fade-ins only                   |
| Video content                           | Performance budget concern — defer to v2 if needed        |
| Multiple theme options (beyond 2)       | Dark + Light is sufficient for v1                         |
| Visitor analytics dashboard             | Vercel Analytics provides what's needed                   |

---

## Appendix A: Accessibility Checklist (WCAG 2.1 AA)

| Requirement                                  | Implementation                                      |
| -------------------------------------------- | --------------------------------------------------- |
| Color contrast ratio >= 4.5:1 (text)         | Validate with axe-core or Lighthouse                |
| Color contrast ratio >= 3:1 (large text/UI)  | Validate with axe-core or Lighthouse                |
| All images have alt text                     | Translated per locale via i18n                      |
| Keyboard navigable                           | Tab order, focus visible, skip-to-content link      |
| ARIA labels on interactive elements          | Icons, toggles, form inputs                         |
| Semantic HTML                                | `<nav>`, `<main>`, `<section>`, `<article>`, etc.  |
| Focus management on route changes            | Announce page changes to screen readers             |
| Reduced motion support                       | `prefers-reduced-motion` disables all animations    |
| Form error announcements                     | `aria-live` or `role="alert"` for validation errors |
| Language attribute                           | `<html lang="en">` / `<html lang="es">`            |

---

## Appendix B: Deployment & Infrastructure

| Aspect               | Detail                                                       |
| --------------------- | ------------------------------------------------------------ |
| Hosting               | Vercel (free tier or Pro)                                    |
| Custom domain         | TBD (e.g., cesarortiz.dev, cesarortiz.co)                   |
| SSL                   | Automatic via Vercel                                         |
| CDN                   | Vercel Edge Network (automatic)                              |
| Preview deployments   | Automatic per branch/PR                                      |
| Environment variables | Contact form API keys (Resend/SendGrid)                      |
| CI/CD                 | Vercel Git integration (auto-deploy on push to main)         |
| Monitoring            | Vercel Analytics + Speed Insights                            |

---

*End of document.*
