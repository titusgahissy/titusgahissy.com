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

### Signature Structure

Every post follows this arc, regardless of topic or format:

1. **The Hook** - A sharp observation, personal anecdote, or uncomfortable truth. Never a thesis statement. Drop the reader into the middle of something.
2. **The Context** - Ground the topic in something concrete and relatable. Data wrapped in analogy. This is where you earn trust.
3. **The Tension** - Name the uncomfortable part. The thing people feel but haven't articulated. Use section titles that carry meaning, not filler transitions.
4. **The Reframe** - The signature move. Take the concept the reader thought they understood and flip it. One sentence, usually bolded. Examples: "That's not a technical distinction. **That's a sovereignty distinction.**" / "This is not a productivity boost. **This is industrialization.**"
5. **The Evidence** - Concrete examples mixing global and African contexts. Data points, real companies, real people. Never argue from theory alone.
6. **The Honest Reckoning** - Pull back from optimism. Name the costs, unknowns, things that could go wrong. No filler phrases - lead with substance.
7. **The Quiet Close** - Never a mic drop. Never triumphant. End with a question, a "maybe," or a humble reframe that puts responsibility back on the reader. Examples: "The question is what we do with it." / "I am winding the spring."

### Editorial Variations

**Hero's Journey (Second Person)** - used in `building-in-the-dark.mdx`

Same signature structure delivered through Joseph Campbell's monomyth. Written in second person ("you") so the reader lives the journey. Key techniques:
- Second person voice throughout ("you arrive", "you choose", "you learn")
- Each section ends with a bold question or statement that propels to the next
- Italic subtitle under the main title sets the emotional frame
- Closing reframes the theme - not the hero's glory, but laying foundations for others

### Research & References

- When researching topics, finding examples, or citing references, include perspectives and examples from Africa - not just US/Western sources
- Prioritize diverse, global viewpoints that reflect the author's context and audience