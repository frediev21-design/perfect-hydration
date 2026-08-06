# Perfect Hydration Sales Platform

Premium conversion-focused landing page for **Perfect Hydration** — built to turn Facebook traffic into WhatsApp orders and scale into a full digital commerce platform.

## Tech Stack

- **Next.js 15** (App Router)
- **React 19**
- **TypeScript** (strict)
- **Tailwind CSS 4**
- **Shadcn/UI**
- **Framer Motion**
- **TanStack Query**
- **Zod** + **React Hook Form**

## Getting Started

### Prerequisites

- Node.js 20+
- npm 10+

### Installation

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start development server |
| `npm run build` | Production build         |
| `npm run start` | Start production server  |
| `npm run lint`  | Run ESLint               |
| `npm run format`| Format with Prettier     |

## Project Structure

```
app/                    # Routes (thin composition layer)
components/
  providers/            # Client providers (React Query, etc.)
  shared/               # Reusable layout primitives
  ui/                   # Shadcn UI primitives
features/               # Feature modules (landing, orders, conversion)
hooks/                  # Shared React hooks
lib/
  config/               # Env + site configuration (Zod validated)
  seo/                  # Metadata helpers
  services/             # Data access layer (Supabase-ready)
  utils/                # Pure utilities
types/                  # Shared TypeScript types
public/images/          # Optimised static assets
```

## Architecture Principles

- **Server Components by default** — client islands only for interactivity
- **Feature-based modules** — scalable for future SaaS expansion
- **Service layer abstraction** — static data today, Supabase/PostgreSQL tomorrow
- **Environment-driven config** — all business values via `.env.local`

## Environment Variables

Copy `.env.example` to `.env.local` and adjust as needed. All public variables are prefixed with `NEXT_PUBLIC_`.

## Deployment

Deploy to [Vercel](https://vercel.com) or any Node.js host:

```bash
npm run build
npm run start
```

Set environment variables in your hosting dashboard before deploying.

## Current Sprint Status

**Sprint 0 — Foundation** ✅

- Project scaffold
- Design tokens & typography
- Config + service layer
- SEO shell (metadata, robots, sitemap)
- Shared UI primitives

**Sprint 1 — Navigation & Footer** ✅

- Sticky glass navigation with mobile menu
- Premium footer with company, products, contact
- Skip-to-content accessibility link
- Reusable WhatsApp & Call CTA buttons
- App shell wrapping all routes

**Sprint 2 — Animated Hero** ✅

- 100vh split layout with product copy and bottle visual
- Floating bottle with glow, reflection, and mouse parallax
- Ambient particles, water ripples, and staggered fade-in
- `id="hero"` section anchor
- Uses product image at `public/images/bottle-5l-deionized-water.jpeg`

**Sprint 3 — Trust Bar & Why Us** ✅

- Animated 5-star trust strip with Gauteng industry badges
- Six glass feature cards with scroll and hover animations
- Section anchor `id="why"` wired to navigation

**Next:** Sprint 4 — Product Applications grid + Product Showcase

## License

Proprietary — Perfect Hydration © 2026
