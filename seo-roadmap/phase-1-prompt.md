# Phase 1 — Foundation (Month 1)

> **Paste this entire file into a fresh Claude Code session inside the `client-redesign-kit` repo when you're ready to ship Phase 1.**

**Ship date (user fills in):** ______________

---

## Objective

Build **25 SEO pages** that establish Guerrilla Jiu-Jitsu Modesto's local coverage for the adjacent towns and core Modesto neighborhoods where most students will come from, plus a foundation of top-of-funnel educational content.

## Required Reading Before You Start

Before writing any code, read these files in order:

1. `sites/guerrilla-jiujitsu-modesto/content-profile.json` — real business content (never invent)
2. `sites/guerrilla-jiujitsu-modesto/brand-kit.json` — colors, fonts, visual language
3. `sites/guerrilla-jiujitsu-modesto/seo-roadmap/roadmap.md` — full strategy
4. `sites/guerrilla-jiujitsu-modesto/seo-roadmap/keywords.json` — keyword inventory
5. `.agent/skills/site-redesign/SKILL.md` — design & build rules (esp. Photo-Backed Hero Quality Bar)
6. `.agent/skills/taste-skill/SKILL.md` — premium design enforcement
7. `.agent/skills/seo-audit/SKILL.md` — run this after building
8. `.agent/skills/programmatic-seo/SKILL.md` — uniqueness rules

Visual language: existing `sites/guerrilla-jiujitsu-modesto/styles.css` applies. Every new page uses the same shared CSS and scripts.js — do not duplicate the design system.

## URL Structure

```
/locations/{area-slug}/                       (5 hub pages)
/locations/{area-slug}/{service-slug}/        (15 spoke pages)
/learn/{term-slug}/                           (5 glossary pages)
```

## Page Manifest (25 pages)

### A. Area hubs (5) — one per top area
| # | URL | H1 | Title (50–60ch) | Meta (150–160ch) |
|---|-----|------|----------|-------|
| 1 | `/locations/oakdale/` | Jiu-Jitsu in Oakdale, CA | Jiu-Jitsu in Oakdale, CA \| Guerrilla Jiu-Jitsu | Brazilian Jiu-Jitsu classes for adults and kids in Oakdale, CA — just 15 min away. NoGi specialty, black-belt instruction. First class free. |
| 2 | `/locations/riverbank/` | Jiu-Jitsu in Riverbank, CA | Jiu-Jitsu in Riverbank, CA \| Guerrilla Jiu-Jitsu | Brazilian Jiu-Jitsu for adults and kids from Riverbank, CA. NoGi-specialty academy 10 min away in Modesto. Free trial class. |
| 3 | `/locations/salida/` | Jiu-Jitsu in Salida, CA | Jiu-Jitsu in Salida, CA \| Guerrilla Jiu-Jitsu | BJJ and kids martial arts for Salida, CA residents. Short drive to our Modesto academy. NoGi specialty, black-belt coaching. First class free. |
| 4 | `/locations/downtown-modesto/` | Jiu-Jitsu in Downtown Modesto | BJJ in Downtown Modesto \| Guerrilla Jiu-Jitsu | Brazilian Jiu-Jitsu classes for adults & kids minutes from downtown Modesto. NoGi academy on Oakdale Rd. First class free. |
| 5 | `/locations/empire/` | Jiu-Jitsu in Empire, CA | Jiu-Jitsu in Empire, CA \| Guerrilla Jiu-Jitsu | BJJ, NoGi, and kids Jiu-Jitsu for Empire, CA — our academy is just 5 min away in Modesto. Free trial class. |

### B. Location × Service spokes (15)

Build 3 service variants per hub: `brazilian-jiu-jitsu/`, `nogi-jiu-jitsu/`, `kids-jiu-jitsu/`.

| # | URL pattern | H1 template | Title template |
|---|-------------|-----------|--------------|
| 6–8 | `/locations/oakdale/{service}/` | {Service} in Oakdale, CA | {Service} in Oakdale, CA \| Guerrilla Jiu-Jitsu |
| 9–11 | `/locations/riverbank/{service}/` | {Service} in Riverbank, CA | {Service} in Riverbank, CA \| Guerrilla Jiu-Jitsu |
| 12–14 | `/locations/salida/{service}/` | {Service} in Salida, CA | {Service} in Salida, CA \| Guerrilla Jiu-Jitsu |
| 15–17 | `/locations/downtown-modesto/{service}/` | {Service} in Downtown Modesto | {Service} in Downtown Modesto \| Guerrilla Jiu-Jitsu |
| 18–20 | `/locations/empire/{service}/` | {Service} in Empire, CA | {Service} in Empire, CA \| Guerrilla Jiu-Jitsu |

Write unique meta descriptions per page — do NOT variable-swap the same sentence. Reference local landmarks, commute times, or district character.

### C. Foundational Glossary (5)
| # | URL | H1 | Title |
|---|-----|------|--------|
| 21 | `/learn/what-is-brazilian-jiu-jitsu/` | What Is Brazilian Jiu-Jitsu? | What Is Brazilian Jiu-Jitsu? A Beginner's Guide |
| 22 | `/learn/what-is-nogi-jiu-jitsu/` | What Is NoGi Jiu-Jitsu? | What Is NoGi Jiu-Jitsu? Beginner's Guide \| Guerrilla Jiu-Jitsu |
| 23 | `/learn/is-bjj-good-for-self-defense/` | Is BJJ Good for Self-Defense? | Is BJJ Good for Self-Defense? The Honest Answer |
| 24 | `/learn/what-age-can-kids-start-bjj/` | What Age Can Kids Start BJJ? | What Age Can Kids Start BJJ? (2026 Guide) |
| 25 | `/learn/is-bjj-safe-for-kids/` | Is BJJ Safe for Kids? | Is BJJ Safe for Kids? A Parent's Guide |

## Content Requirements per page (from roadmap §Uniqueness Rules)

Each page MUST include ≥4 of these:

1. Neighborhood-specific intro referencing a real local landmark, road, or district character
2. Commute time + directions link to `2508 Oakdale Rd, Modesto, CA 95355`
3. At least one real testimonial (from content-profile.json) or a persona-tagged testimonial
4. A page-specific FAQ block (3–5 Q&A, JSON-LD `FAQPage`)
5. A unique H2 section appropriate to the page's intent (location pages: "Getting to the Academy from {area}"; glossary: "What Happens in Your First Class")
6. Internal links to 3–5 related new pages
7. Mention of nearby areas we also serve
8. Weekly class schedule snippet relevant to the page
9. Coach attribution — Mike Cruz credentials paragraph
10. Clear CTA to trial class via the lead modal (reuse existing `data-cta="lead-modal"` pattern)

## Schema per page type

- **Area hub:** `LocalBusiness` (with `areaServed` = the area), `Place`, `BreadcrumbList`
- **Location × service:** `LocalBusiness` (with `areaServed`), `Service`, `BreadcrumbList`, `FAQPage`
- **Glossary:** `Article`, `BreadcrumbList`, `FAQPage`

## Integration checklist (do after building the 25 pages)

- [ ] Add all 25 URLs to `sitemap.xml` with `<lastmod>` set to ship date
- [ ] Update `index.html` footer "Serving" block to list the 5 new areas
- [ ] Add a "Learn" link to navbar pointing to `/learn/` (build a simple `/learn/index.html` hub listing all 5 new articles)
- [ ] Add a "Locations" link to navbar pointing to `/locations/` (build `/locations/index.html` hub)
- [ ] Run `/seo-audit` on the new pages — verify canonicals, OG tags, schema, NAP, attribution
- [ ] Verify "Powered by MMA Marketing Pro" footer attribution on all 25 pages (linked, `target="_blank"`, `rel="noopener"`)
- [ ] Update `sites/build-log.md` with phase completion

## Agency attribution requirement (hard rule — no exceptions)

Every page built in Phase 1 must include this exact line in the footer:

```html
<p class="powered-by">
  Powered by <a href="https://www.mmamarketingpro.com" target="_blank" rel="noopener">MMA Marketing Pro</a>
</p>
```

The `/seo-audit` step verifies this. Never omit, rebrand, or alter.

## Success metrics — 30 days after ship

- [ ] 20/25 pages indexed in Google Search Console
- [ ] 15+ keywords ranking in top 50
- [ ] 2+ keywords ranking in top 10
- [ ] +25% organic sessions vs baseline
- [ ] +2 trial class form submissions attributed to organic

Review these before starting Phase 2. If indexation < 80%, pause expansion and fix Phase 1 content depth first.
