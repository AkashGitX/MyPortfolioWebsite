# Akash Sutradhar — Portfolio

A premium animated developer portfolio for Akash Sutradhar (Java Backend Developer). Single-page React + Vite app with GSAP animations, Lenis smooth scroll, and glassmorphism UI.

## Run & Operate

- `pnpm --filter @workspace/portfolio run dev` — run the portfolio (via workflow)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React 19, Vite 7, TailwindCSS v4
- Animations: GSAP 3 + ScrollTrigger, Lenis smooth scroll
- Icons: lucide-react, react-icons/si (LeetCode only)
- Fonts: Plus Jakarta Sans, Inter, JetBrains Mono (Google Fonts)

## Where things live

- `artifacts/portfolio/src/pages/Home.tsx` — main page, Lenis setup, loader state
- `artifacts/portfolio/src/index.css` — CSS variables, dark warm palette, grain overlay
- `artifacts/portfolio/src/components/sections/` — all 12 section components
- `artifacts/portfolio/src/components/ui/CustomCursor.tsx` — GSAP custom cursor
- `attached_assets/` — personal photos (hero, about, casual)

## Architecture decisions

- State-controlled Loader: `loaderDone` state in Home.tsx so Loader unmounts after animation, preventing interaction blocking.
- Lenis initialized only after loader completes so smooth scroll doesn't fight with page-entry animations.
- GSAP ScrollTrigger wired to Lenis via `lenis.on("scroll", ScrollTrigger.update)` for perfect sync.
- All `SiLinkedin`/`SiGithub` replaced with lucide-react equivalents since react-icons v5 removed them; only `SiLeetcode` remains from react-icons/si.
- Horizontal pinned scroll in Projects section uses GSAP ScrollTrigger `pin: true` on a flex track.

## Product

- Cinematic loader: "AKASH / SYSTEMS ARCHITECT" text reveal + clip-path wipe
- Hero: animated name chars, role pills, floating blobs, professional photo
- About: event photo, specializations
- Skills: animated pill grid by category (40+ skills)
- Projects: GSAP horizontal pinned scroll — HealthApp, WhatsAppExpense-AI, Hotel Booking Platform
- Achievements: timeline with LeetCode ranks, hackathon finals, Dubai research paper
- Leadership: AEC Science Club lead card
- Experience & Education: Euron internship + AEC CSBS details
- Coding Profiles: GitHub, LinkedIn, LeetCode cards
- Contact: email copy button, social links, mailto form
- Custom cursor: dot + lagging ring with hover scale effect

## User preferences

- Dark warm palette: #1f1f1f background, #f4b183 peach accent, #3b5bff blue accent
- Film grain overlay via SVG feTurbulence at 4% opacity
- All sections ID-tagged for nav smooth scroll

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
