# SKILLS.md — Agent Skill Reference

> What an AI agent needs to be able to do when working on this portfolio.

---

## 1. UI & Animation Skills

### Motion (Framer Motion v12)
- Import: `import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react'`
- Build stagger containers with `variants` + `staggerChildren`
- Use `whileInView` with `viewport={{ once: true }}` for scroll-triggered reveals
- Use `whileHover={{ y: -2 }}` spring for subtle lift effects
- Apply `AnimatePresence` for mount/unmount transitions (e.g. mobile menu)
- Know when NOT to animate: don't wrap every single element — focus on sections, cards, list containers

### Tailwind CSS
- Dark-mode design with rgba glassmorphism (`backdrop-blur-xl`, `bg-[rgba(...)]`)
- Responsive two-column layout (`lg:flex`, `lg:sticky`, `lg:w-1/2`)
- Custom class values with bracket notation (`shadow-[0_0_24px_rgba(...)]`)
- Group hover patterns (`group/list`, `lg:group-hover/list:opacity-50`)

---

## 2. Content Update Skills

### Adding a new project
1. Duplicate an existing `<motion.li>` block in the Projects section
2. Update: title, description, href, image src (`/projectname.png`), tech tags
3. Add the screenshot to `/public/`
4. Follow the exact same HTML structure — do not invent new patterns

### Adding a new blog post
1. Duplicate an existing `<li>` block in the Writing section
2. Update: year, title, description, href (external blog link)

### Updating experience
- Dates header: change `2023 — Present` text in the `<header>` of the experience card
- Description: update the `<p>` text describing the role
- Tech tags: update the array passed to `.map()` in the `ul`

---

## 3. Design System Skills

### Color consistency
- Only use `#a78bfa` as the accent (muted violet) — no bright purple, no pink
- For borders on hover: `rgba(167, 139, 250, 0.20)`
- For glow shadows: `rgba(167, 139, 250, 0.12)`
- For tag backgrounds: `rgba(167, 139, 250, 0.08)`
- Keep social icon brand colors (they only appear on hover)

### Background effects
- Mouse gradient: uses `mousePosition` state, `radial-gradient` with low opacity
- Ambient orbs: CSS keyframe animations, classes `ambient-orb-1` / `ambient-orb-2`
- Fixed background div with `#06060c` gradient

---

## 4. Code Quality Skills

### TypeScript
- Always type event handlers (`e: MouseEvent`, `e: React.MouseEvent`)
- No `any` types
- Keep the `{ years: number; months: number }` return type on `calculateYearsOfExperience`

### Component structure
- `'use client'` at top (required for hooks)
- Constants (variants, etc.) defined OUTSIDE the component function
- Hooks (`useState`, `useEffect`) at the top of the component
- Helper functions (`calculateYearsOfExperience`, `scrollToSection`) inside component body

### Performance
- All animations use `once: true` in viewport to avoid re-triggering
- CSS animations (ambient orbs) preferred over JS animations for background effects
- Mouse position updated on `mousemove` with `requestAnimationFrame` would be ideal (but current implementation is fine)

---

## 5. Next.js Skills

### Image handling
- Use `next/image` `<Image>` component for all project screenshots
- Required: `width`, `height`, `src`, `alt` props
- Style with `className` for responsive sizing

### Link handling
- Internal routes (`/photos`): use `next/link` `<Link>`
- External links: use `<a>` with `target="_blank" rel="noreferrer"`
- Smooth scroll to sections: `element.scrollIntoView({ behavior: 'smooth' })`

### Fonts
- Fonts are loaded in `layout.tsx` and injected as CSS variables
- Reference in Tailwind: `font-inter`, `font-poppins`, `font-mono`, `font-baloo-bhai-2`

---

## 6. Files Never to Touch

- `src/app/layout.tsx` — font config and metadata (only update if explicitly asked)
- `public/resume.pdf` — binary file
- `next.config.mjs` — build config
- `src/app/sitemap.ts` — SEO sitemap

---

## 7. Deployment

- Platform: Vercel (auto-deploys on push to `main`)
- No environment variables needed for the portfolio itself
- `next build` should complete without errors before pushing
