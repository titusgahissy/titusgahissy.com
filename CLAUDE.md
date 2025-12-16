# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
bun dev        # Start development server (http://localhost:4321)
bun run build  # Build for production
bun run preview # Preview production build locally
```

## Architecture

This is an Astro 5 personal website deployed to Vercel with static output.

### Tech Stack
- **Framework**: Astro 5 with MDX support
- **Styling**: Tailwind CSS v4 (via Vite plugin)
- **Deployment**: Vercel static adapter with web analytics
- **Package Manager**: Bun

### Project Structure

```
src/
├── content/          # MDX content collections
│   ├── posts/        # Blog posts
│   ├── projects/     # Project showcases
│   └── config.ts     # Collection schemas (Zod)
├── components/
│   ├── layout/       # Page structure components (Container, PageLayout, etc.)
│   └── mdx/          # MDX-specific components (YouTube embed)
├── data/             # Static data files (albums, clients, books)
├── layouts/          # BaseLayout with SEO, theme, View Transitions
├── lib/              # Utilities (cn for classnames, date formatting, site config)
├── pages/            # File-based routing
└── styles/           # Global CSS with custom fonts and design tokens
```

### Key Patterns

**Path Alias**: Use `@/` to import from `src/` (configured in tsconfig.json)

**Content Collections**: Posts and projects use Astro's content collections with Zod schemas defined in `src/content/config.ts`

**Styling**: Uses Tailwind v4 CSS-first configuration in `globals.css` with:
- OKLCH color system with light/dark mode tokens
- Custom fonts: Satoshi (body), Feature Headline (headings), GT Walsheim Pro (alt headings)
- `cn()` utility in `src/lib/utils.ts` for conditional class merging

**SEO**: BaseLayout handles meta tags, Open Graph, Twitter cards, and JSON-LD structured data

**Theme**: Dark mode via `.dark` class toggle, persisted in localStorage

**Images**: Uses Astro's Image component for optimization
- Optimized images live in `src/assets/img/` (WebP/AVIF conversion, responsive srcset)
- Public images in `public/img/` for: SVGs, client logos, photography albums
- In pages: use `import.meta.glob` with `getImage()` helper pattern
- In MDX: use `<Figure src="path/to/image.jpg" alt="description" />` component

### Writing Style

- Use simple hyphens `-` not em dashes `—` in prose