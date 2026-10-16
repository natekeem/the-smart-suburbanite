# The Smart Suburbanite

> **Practical smart home, energy resilience, security, and comfort upgrades for suburban homeowners.**

- **Live URL**: [https://smartsuburbanite.com/](https://smartsuburbanite.com/)
- **Repository**: [natekeem/the-smart-suburbanite](https://github.com/natekeem/the-smart-suburbanite)
- **Deployment**: GitHub Pages with Custom Apex Domain (`smartsuburbanite.com`)
- **Engine / Theme**: Astro 4.x + AstroPaper
- **Publication Corpus**: 21 published long-form guides (as of 2026-10-16)
- **Search & Indexing**: XML/Text Sitemaps (`/sitemap-index.xml`, `/sitemap.txt`), RSS Feed (`/rss.xml`), Pagefind Search

---

## 🏡 Editorial Positioning & Audience

The Smart Suburbanite helps 40+ North American and global English-speaking suburban homeowners make pragmatic decisions about residential technology, energy storage, whole-home backup, security, and automation without subscription traps or tech hype.

### Core Topic Categories

1. **Beginner Guides** (`/categories/beginner-guides/`): Choosing smart platforms, Matter/Thread protocols, local control basics.
2. **Comfort & Convenience** (`/categories/comfort-convenience/`): Smart thermostats, zoned HVAC, lighting automation.
3. **Security & Privacy** (`/categories/security-privacy/`): Subscription-free video doorbells, local NVR cameras, smart deadbolts.
4. **Maintenance & Setup** (`/categories/maintenance-setup/`): Whole-home backup batteries (Tesla Powerwall 3 vs generators), smart water shutoff valves, breaker panel energy monitors.

---

## 🎨 Visual & Quality Standards

- **Authentic Cover Imagery**: Avoids sterile laptop/monitor stock photography. Emphasizes realistic suburban utility equipment (breaker panels, exterior conduits, residential batteries at golden hour) and genuine homeowner settings.
- **Mandatory Inline Visuals**: Every long-form guide includes at least 2 inline explanatory visuals (10-year TCO comparisons, HVAC compressor inrush current waveforms, or electrical schematics) generated at 1200×675 via local headless Chrome.
- **Single-Post Hero Cover Rendering**: Post layouts (`src/pages/posts/[...slug]/index.astro`) render high-resolution hero cover images inside `<article>` with `.article-cover` styling.
- **Human Gate & Integrity**: No automated or unverified AI publishing. Every guide undergoes human review, source verification, and fact-checking.

---

## 🛠️ Local Development & Build

```bash
# Install dependencies
pnpm install

# Start local development server (http://localhost:4321)
pnpm run dev

# Run type check and format verification
pnpm run astro check
pnpm run format:check

# Production build (generates dist/ with Pagefind index)
pnpm run build
```

---

## 📄 License & Attribution

Built with [Astro](https://astro.build) and the [AstroPaper](https://github.com/satnaing/astro-paper) starter theme. Editorial content, diagrams, and site configurations are property of Project AI Autoblog / `natekeem`.
