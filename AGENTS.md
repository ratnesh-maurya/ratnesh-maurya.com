# AGENTS.md — ratn.tech Portfolio

> Context file for AI agents (Cursor, Claude, etc.) working on this codebase.

## Project Identity

Personal portfolio for **Ratnesh Maurya** — Software Development Engineer at Initializ.  
Live at: **https://RatneshMauria.com** (deployed on Vercel)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router, `src/app` directory) |
| Language | TypeScript 5 |
| Styling | **Tailwind CSS v4** — config via `@theme` in `globals.css`, no `tailwind.config.ts` |
| Animation | `motion` v12 (Framer Motion rebranded) — import from `motion/react` |
| Icons | `lucide-react` (UI icons), `react-icons/si` (brand logos) |
| Fonts | Inter, JetBrains Mono (via `next/font/google`, CSS vars `--font-inter`, `--font-jetbrains-mono`) |
| Analytics | `@vercel/analytics`, `@vercel/speed-insights` |

---

## Key Files

| File | Purpose |
|---|---|
| `src/components/Portfolio.tsx` | **Main portfolio component** — entire site lives here |
| `src/app/page.tsx` | Entry point: renders `<Portfolio />` |
| `src/app/layout.tsx` | Root layout with Google Fonts + metadata |
| `src/app/globals.css` | Global CSS + Tailwind v4 `@theme` tokens + ambient orb animations |
| `public/` | Static assets: project screenshots, resume PDF, photo gallery |

---

## Design System

### Color Palette (Muted Violet)

```
Background:       #06060c  (ultra dark)
Card glass:       rgba(255, 255, 255, 0.025)
Text primary:     #e2e8f0
Text secondary:   #94a3b8
Text muted:       #64748b
Accent (violet):  #a78bfa  ← single accent, NO pink/magenta
Accent dim:       rgba(167, 139, 250, 0.10)
Accent border:    rgba(167, 139, 250, 0.20)
Accent text:      #c4b5fd
Border subtle:    rgba(255, 255, 255, 0.06)
Glow:             rgba(167, 139, 250, 0.15)
```

### Typography
- Primary font: `font-baloo-bhai-2` (set on `<body>` in layout)
- Mono: `font-mono` (JetBrains Mono) for code snippets if needed
- Nav labels: `text-xs font-bold uppercase tracking-widest`

### Animation Conventions
- **Import**: `import { motion, AnimatePresence } from 'motion/react'`  
  (NOT `framer-motion` — use the `motion` package)
- **Entrance** (mount): `initial={{ opacity: 0, y: 24 }}` → `animate={{ opacity: 1, y: 0 }}`
- **Scroll reveals**: `whileInView={{ opacity: 1, y: 0 }}` with `viewport={{ once: true, margin: "-60px" }}`
- **Stagger lists**: use `variants` with `staggerChildren: 0.07`
- **Transition easing**: Define `const easeOutQuart: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94]` at module level and reference it — TypeScript needs the tuple type, not inferred `number[]`
- **Hover lifts**: `whileHover={{ y: -2 }}` with spring `{ stiffness: 400, damping: 30 }`
- Always preserve `motion-reduce` class for accessibility (keep CSS fallback)

---

## Layout Pattern

```
<div min-h-screen>
  <BackgroundLayer>        ← fixed, z-0 (dark bg + ambient orbs)
  <MouseGradientOverlay>   ← fixed, z-30, pointer-events-none
  <MobileNav>              ← lg:hidden
  <Container max-w-screen-xl>
    <header sticky left>   ← lg:w-1/2, sticky sidebar (name, nav, socials)
    <main scrollable right> ← lg:w-1/2 (About, Experience, Projects, Writing, Footer)
```

---

## Content Reference (Ratnesh Maurya)

- **Role**: Software Development Engineer @ Initializ (2023–Present)
- **Experience calc start**: `2024-08-01`
- **Stack**: Go, Elixir, PostgreSQL, Redis, Kubernetes, AWS, Kafka
- **LinkedIn**: https://www.linkedin.com/in/ratnesh-maurya
- **GitHub**: https://github.com/ratnesh-maurya
- **Twitter/X**: https://x.com/ratnesh_maurya_
- **Email**: ratneshmaurya2311@gmail.com
- **Blog**: https://blog.ratnesh-maurya.com
- **Resume**: `/resume.pdf`

### Projects
1. Personal Tracker — https://tracker.ratnesh-maurya.com (screenshot: `/tracker.png`)
2. JSONic — https://jsonic.ratnesh-maurya.com (screenshot: `/jsonic.png`)
3. mdconverter — https://mdconverter.ratnesh-maurya.com (screenshot: `/mdconverter.png`)
4. npm-compare — https://npm-compare.ratnesh-maurya.com (screenshot: `/npm-compare.png`)
5. Rehabify — https://rehabify.ratnesh-maurya.com (screenshot: `/rehabify.png`)

### Blog Posts (Writing section)
- "Optimizing Memory Layout in Go: A Deep Dive into Struct Design" (2025)
- "Building This Blog: A Modern Next.js Blog with Markdown" (2025)
- "Understanding S3 and S3 Policies" (2023)

### Nav Sections
`about` | `experience` | `projects` | `writing` | `photos` (→ `/photos` page)

---

## Coding Rules

1. **Never** break existing code formatting style — follow what's already in the file
2. Tailwind classes for all static styles; inline `style={{}}` only for computed/dynamic values (e.g. mouse position)
3. All content lives in `Portfolio.tsx` — do NOT split into multiple files unless asked
4. Keep the two-column layout: sticky left sidebar + scrollable right content
5. `'use client'` must remain at the top of the portfolio component
6. Do NOT add verbose comments that narrate what the code does
7. Use `motion/react` (the `motion` package v12), never `framer-motion`
8. Keep the `useEffect` scroll handler for `activeSection` tracking
9. Keep `calcExp()` dynamic calculation for experience duration
10. Social icons keep their individual brand hover colors
11. **Tailwind v4 only** — no `tailwind.config.ts`, use `@theme` in CSS for custom tokens

---

## Common Patterns

### Tech Tag
```tsx
<div className="flex items-center rounded-full px-3 py-1 text-xs font-medium leading-5 backdrop-blur-sm bg-[rgba(167,139,250,0.08)] border border-[rgba(167,139,250,0.18)] text-[#c4b5fd] hover:bg-[rgba(167,139,250,0.15)] hover:border-[rgba(167,139,250,0.30)] transition-all duration-300">
  {tech}
</div>
```

### Section Card (About)
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-60px" }}
  transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
  className="backdrop-blur-xl bg-[rgba(255,255,255,0.025)] border border-[rgba(255,255,255,0.06)] rounded-2xl p-6 hover:bg-[rgba(255,255,255,0.04)] transition-all duration-300"
>
```

### List Item Card (Experience / Projects)
```tsx
<div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-xl transition-all duration-300 lg:-inset-x-6 lg:block lg:group-hover:backdrop-blur-xl lg:group-hover:bg-[rgba(255,255,255,0.04)] lg:group-hover:border lg:group-hover:border-[rgba(167,139,250,0.2)] lg:group-hover:shadow-[0_0_24px_rgba(167,139,250,0.12)]" />
```
