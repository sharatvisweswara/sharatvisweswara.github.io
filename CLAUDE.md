# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start dev server at localhost:4321
npm run build    # build to ./dist/
npm run preview  # preview the production build locally
```

There are no tests or linting scripts configured.

## Architecture

This is an [Astro](https://astro.build) blog deployed to GitHub Pages via `.github/workflows/deploy.yml` on every push to `main`.

**Content** lives in `src/content/blog/` as `.md` or `.mdx` files. The collection schema (defined in `src/content.config.ts`) requires `title`, `description`, and `pubDate` fields; `updatedDate` is optional. The `draft` field is not in the schema — to hide a post, don't commit it.

**Routing** follows Astro's file-based convention:
- `/` → `src/pages/index.astro`
- `/blog/` → `src/pages/blog/index.astro` (lists all posts sorted by date)
- `/blog/[slug]/` → `src/pages/blog/[...slug].astro` (individual post)
- `/about/` → `src/pages/about.astro`
- `/rss.xml` → `src/pages/rss.xml.js`

**Shared constants** (`SITE_TITLE`, `SITE_DESCRIPTION`) are in `src/consts.ts`.

**Layout hierarchy**: pages use `src/layouts/BlogPost.astro` which pulls in `src/components/BaseHead.astro` (meta/SEO), `Header.astro`, and `Footer.astro`.

**Styles** are global in `src/styles/global.css`; component-scoped styles are written inline in each `.astro` file's `<style>` block.

## Adding a blog post

Create `src/content/blog/<slug>.md` (or `.mdx`) with:

```markdown
---
title: 'Post title'
description: 'One-line summary'
pubDate: 'Jan 01 2026'
---

Content here.
```
