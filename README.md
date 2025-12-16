# titusgahissy.com

Personal website built with Astro 5, featuring blog posts, project showcases, and photography.

## Tech Stack

- **Framework**: Astro 5 with MDX
- **Styling**: Tailwind CSS v4
- **Deployment**: Vercel (static output)
- **Package Manager**: Bun

## Getting Started

```bash
# Install dependencies
bun install

# Start development server
bun dev

# Build for production
bun run build

# Preview production build
bun run preview
```

Development server runs at `http://localhost:4321`

## Project Structure

```
src/
├── content/          # MDX content collections
│   ├── posts/        # Blog posts
│   └── projects/     # Project showcases
├── components/       # Astro components
├── data/             # Static data (albums, clients, books)
├── layouts/          # Page layouts
├── lib/              # Utilities
├── pages/            # File-based routing
└── styles/           # Global CSS and fonts
```

## Content

Blog posts and projects are written in MDX and live in `src/content/`. Content schemas are defined with Zod in `src/content/config.ts`.

## License

Content and code are proprietary. All rights reserved.
