# Next.js Stack Template

A reusable Next.js App Router template with TypeScript, Tailwind CSS v4, shadcn/ui, GSAP, and a contact API.

## Stack

### Core
- [Next.js 16.4.3](https://nextjs.org/) - App Router, React Server Components, Turbopack
- [React 19.3.0](https://react.dev/) / React DOM
- [TypeScript 5](https://www.typescriptlang.org/) - Strict mode
- [Tailwind CSS v4](https://tailwindcss.com/) - CSS-first config, `@theme inline`
- [ESLint 9](https://eslint.org/) + `eslint-config-next`

### UI
- [shadcn/ui](https://ui.shadcn.com/) - `base-nova` style, neutral base color
- [@base-ui/react](https://base-ui.com/) - Headless primitives (button, input, ...)
- [Lucide React](https://lucide.dev/) - Icons
- [class-variance-authority](https://cva.style/docs) + [tailwind-merge](https://github.com/dcastil/tailwind-merge) + [clsx](https://github.com/lukeed/clsx) - Styling utilities
- [tw-animate-css](https://github.com/Wombosvideo/tw-animate-css) - Animation utilities
- [Geist](https://vercel.com/font) / Geist Mono - Fonts

### Forms & Validation
- [React Hook Form 7](https://react-hook-form.com/)
- [@hookform/resolvers](https://github.com/react-hook-form/resolvers)
- [Zod 4](https://zod.dev/)

### Motion
- [GSAP 3.15](https://gsap.com/) + [@gsap/react](https://gsap.com/docs/v3/HelperFunctions/react/) (ScrollTrigger)

### State & Feedback
- [Zustand 5](https://zustand.docs.pmnd.rs/) - Client state
- [react-hot-toast](https://react-hot-toast.com/) - Toasts

### Email
- [Nodemailer 10](https://nodemailer.com/) - Contact form delivery

## Features

- App Router with `error.tsx`, `loading.tsx`, and `not-found.tsx` boundaries
- `cacheComponents` and `partialPrefetching` enabled in `next.config.ts`
- shadcn/ui components: `accordion`, `button`, `card`, `input`, `label`, `textarea`
- Contact API route (`POST /api/contact`) validated with Zod and sent via Nodemailer
- Toast provider mounted in the root layout
- GSAP/ScrollTrigger registration helper (`src/lib/gsap.ts`)
- Reduced-motion hook (`useReducedMotion`)
- Metadata helper (`createMetadata`) driven by `siteConfig`
- Design tokens (`spacing`, `typography`) and site config
- Typed content models for landing-page sections
- Mandatory section order: Hero → Social Proof → Featured Projects → About → Process → Testimonials → FAQ → Final CTA → Footer

## Structure

```
src/
├── app/
│   ├── api/contact/     # Contact form endpoint
│   ├── error.tsx        # Error boundary
│   ├── loading.tsx      # Loading UI
│   ├── layout.tsx       # Root layout + fonts + toast provider
│   └── not-found.tsx    # 404 page
├── components/
│   ├── providers/       # Toast provider
│   ├── sections/        # Landing-page sections (see sections/README.md)
│   └── ui/              # shadcn/ui components
├── config/              # Site config and design tokens
├── hooks/               # Custom React hooks
├── lib/                 # Utilities (cn, gsap, metadata)
├── styles/              # Global CSS / Tailwind v4 theme
└── types/               # TypeScript type definitions
```

## Getting Started

1. Copy the environment file and fill in values:

   ```bash
   cp .env.example .env.local
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the dev server:

   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Environment Variables

See `.env.example`.

| Variable | Description |
| --- | --- |
| `NEXT_PUBLIC_APP_NAME` | App name |
| `NEXT_PUBLIC_APP_URL` | Public site URL |
| `NODE_ENV` | Environment |
| `SMTP_HOST` | SMTP server host |
| `SMTP_PORT` | SMTP server port (default 587) |
| `SMTP_USER` | SMTP username |
| `SMTP_PASS` | SMTP password |
| `CONTACT_EMAIL` | Recipient for contact messages |

## shadcn/ui

Configured in `components.json` (`base-nova` style). Add components with:

```bash
npx shadcn@latest add <component>
```

## Notes

- Path alias: `@/*` → `src/*`.
- Utility `cn` is re-exported from `src/lib/utils.ts`.
- Reduced-motion support is opt-in via `useReducedMotion`.