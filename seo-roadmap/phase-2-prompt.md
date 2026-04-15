# Phase 2 — Persona Expansion (Month 2)

> **Paste this entire file into a fresh Claude Code session when you're ready to ship Phase 2.**

**Ship date:** ______________
**Prerequisite:** Phase 1 shipped and ≥80% indexed.

---

## Objective
Build **30 pages** — 9 persona-targeted program pages, 15 more location variants, 6 additional foundational glossary pages.

## Required Reading
Same as Phase 1 (see `phase-1-prompt.md`). Also read all Phase 1 pages so you can cross-link to them.

## URL Structure
```
/programs/{service}-for-{persona}/        (9 persona pages)
/locations/{area-slug}/                   (5 new hubs)
/locations/{area-slug}/{service}/         (10 new spokes)
/learn/{term-slug}/                       (6 glossary)
```

## Page Manifest (30)

### A. Persona pages (9)
| # | URL | H1 | Audience |
|---|-----|------|---------|
| 1 | `/programs/nogi-jiu-jitsu-for-beginners/` | NoGi Jiu-Jitsu for Complete Beginners | Zero-experience adults |
| 2 | `/programs/jiu-jitsu-for-adults-over-40/` | Jiu-Jitsu for Adults Over 40 | Masters-age newcomers |
| 3 | `/programs/jiu-jitsu-for-women/` | Jiu-Jitsu for Women | Women's self-defense + community |
| 4 | `/programs/martial-arts-for-kids/` | Martial Arts for Kids in Modesto | Parents of 3–11yr olds |
| 5 | `/programs/martial-arts-for-teens/` | Martial Arts for Teens | 12–17 age group |
| 6 | `/programs/bjj-for-competitors/` | BJJ for Competitors | Intermediate+ training for tournaments |
| 7 | `/programs/self-defense-for-parents/` | Self-Defense for Parents | "Protect your family" angle |
| 8 | `/programs/self-defense-for-law-enforcement/` | Self-Defense for Law Enforcement & Military | LE/Military practitioners (validate demand with client) |
| 9 | `/programs/jiu-jitsu-for-active-families/` | Jiu-Jitsu for Active Families | Family membership angle |

### B. New location hubs + service spokes (15)
Cover Ceres + Turlock + Waterford + Hughson + the remaining core Modesto neighborhoods (North, East, West Modesto).

| # | URL | H1 |
|---|-----|------|
| 10 | `/locations/ceres/` | Jiu-Jitsu in Ceres, CA |
| 11 | `/locations/ceres/brazilian-jiu-jitsu/` | Brazilian Jiu-Jitsu in Ceres, CA |
| 12 | `/locations/ceres/kids-jiu-jitsu/` | Kids Jiu-Jitsu in Ceres, CA |
| 13 | `/locations/turlock/` | Jiu-Jitsu in Turlock, CA |
| 14 | `/locations/turlock/brazilian-jiu-jitsu/` | Brazilian Jiu-Jitsu in Turlock, CA |
| 15 | `/locations/turlock/nogi-jiu-jitsu/` | NoGi Jiu-Jitsu in Turlock, CA |
| 16 | `/locations/waterford/` | Jiu-Jitsu in Waterford, CA |
| 17 | `/locations/waterford/kids-jiu-jitsu/` | Kids Jiu-Jitsu in Waterford, CA |
| 18 | `/locations/hughson/` | Jiu-Jitsu in Hughson, CA |
| 19 | `/locations/north-modesto/` | Jiu-Jitsu in North Modesto |
| 20 | `/locations/north-modesto/nogi-jiu-jitsu/` | NoGi Jiu-Jitsu in North Modesto |
| 21 | `/locations/east-modesto/` | Jiu-Jitsu in East Modesto |
| 22 | `/locations/east-modesto/kids-jiu-jitsu/` | Kids Jiu-Jitsu in East Modesto |
| 23 | `/locations/west-modesto/` | Jiu-Jitsu in West Modesto |
| 24 | `/locations/west-modesto/brazilian-jiu-jitsu/` | Brazilian Jiu-Jitsu in West Modesto |

### C. Glossary (6)
| # | URL | H1 |
|---|-----|------|
| 25 | `/learn/what-is-submission-grappling/` | What Is Submission Grappling? |
| 26 | `/learn/bjj-belt-system-explained/` | The BJJ Belt System Explained |
| 27 | `/learn/how-long-to-earn-a-blue-belt/` | How Long Does It Take to Earn a BJJ Blue Belt? |
| 28 | `/learn/what-to-wear-to-a-bjj-class/` | What to Wear to a NoGi BJJ Class |
| 29 | `/learn/bjj-etiquette-for-beginners/` | BJJ Etiquette for Beginners |
| 30 | `/learn/what-is-open-mat-in-bjj/` | What Is Open Mat in BJJ? |

## Content Rules
Same 10 uniqueness rules from Phase 1 — each page must hit ≥4.

**Persona-page-specific:** include a "Why BJJ works for [persona]" H2, an FAQ tuned to that persona's objections, and 2–3 testimonials from members who fit that profile (use real content where possible; tag persona-fit).

## Schema per page type

- **Persona page:** `Service` + `Audience` + `BreadcrumbList` + `FAQPage`
- **Location hub / spoke:** `LocalBusiness` (with `areaServed`) + `Service` + `BreadcrumbList`
- **Glossary:** `Article` + `BreadcrumbList` + `FAQPage`

## Integration
- [ ] Add all 30 URLs to `sitemap.xml`
- [ ] Update footer "Serving" block
- [ ] Update `/locations/index.html` and `/learn/index.html` hubs to include new pages
- [ ] Cross-link Phase 1 pages to relevant Phase 2 pages (e.g., "Kids Jiu-Jitsu in Oakdale" → new `/programs/martial-arts-for-kids/`)
- [ ] Run `/seo-audit`
- [ ] Verify agency attribution on all 30
- [ ] Update `sites/build-log.md`

## Agency attribution (hard rule)
Every page must include the "Powered by MMA Marketing Pro" footer line, `target="_blank"`, `rel="noopener"`, linking to `https://www.mmamarketingpro.com`. No exceptions.

## Success metrics — 30 days after ship
- 50/55 pages indexed (cumulative)
- 40+ keywords ranking top 50
- 8+ keywords ranking top 10
- +50% organic sessions vs baseline
- +5 trial submissions / month from organic
