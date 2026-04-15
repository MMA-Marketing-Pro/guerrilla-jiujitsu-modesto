# Phase 3 — Authority: Curation + Comparisons (Month 3)

> **Paste into a fresh Claude Code session when ready to ship Phase 3.**

**Ship date:** ______________
**Prerequisite:** Phases 1–2 shipped, ≥80% cumulative indexation.

---

## Objective
Build **30 pages** — 8 "best of" curation pages, 8 comparison pages, 14 additional location coverage pages.

## Required Reading
Same as Phase 1. Also read all Phase 1–2 pages.

## URL Structure
```
/best/{slug}/
/compare/{slug}/
/locations/{area-slug}/
/locations/{area-slug}/{service-slug}/
```

## Page Manifest (30)

### A. Curation pages (8)
| # | URL | H1 | Title |
|---|-----|------|--------|
| 1 | `/best/best-bjj-gym-in-modesto/` | The Best BJJ Gym in Modesto | Best BJJ Gym in Modesto, CA (2026 Review) |
| 2 | `/best/best-martial-arts-school-in-modesto/` | The Best Martial Arts School in Modesto | Best Martial Arts School in Modesto, CA |
| 3 | `/best/best-kids-martial-arts-in-modesto/` | The Best Kids Martial Arts in Modesto | Best Kids Martial Arts in Modesto (2026) |
| 4 | `/best/best-nogi-bjj-in-central-valley/` | The Best NoGi BJJ in the Central Valley | Best NoGi BJJ in California's Central Valley |
| 5 | `/best/best-self-defense-class-in-modesto/` | The Best Self-Defense Class in Modesto | Best Self-Defense Classes in Modesto, CA |
| 6 | `/best/best-jiu-jitsu-for-adults-in-modesto/` | The Best Adult Jiu-Jitsu Program in Modesto | Best Adult BJJ in Modesto, CA |
| 7 | `/best/best-after-school-program-in-modesto/` | The Best After-School Program in Modesto for Active Kids | Best After-School Program Modesto |
| 8 | `/best/best-womens-martial-arts-in-modesto/` | The Best Women's Martial Arts in Modesto | Best Women's Martial Arts in Modesto |

**Style note on curation pages:** don't write a fake "top 10 list." Instead, frame as "What Makes the Best [thing] — and Why We Match" with an `ItemList` schema listing criteria, then position Guerrilla Jiu-Jitsu as the choice that meets those criteria. Include the uniqueness rules from the roadmap. Stay honest — criteria should be real evaluation factors (instructor lineage, beginner-welcoming policy, schedule density, kids age-grouping, etc.).

### B. Comparison pages (8)
| # | URL | H1 |
|---|-----|------|
| 9 | `/compare/bjj-vs-wrestling/` | BJJ vs Wrestling: Which Should You Train? |
| 10 | `/compare/bjj-vs-judo/` | BJJ vs Judo: Key Differences for Beginners |
| 11 | `/compare/bjj-vs-mma/` | BJJ vs MMA: How They Differ and How They Overlap |
| 12 | `/compare/bjj-vs-karate/` | BJJ vs Karate for Kids Self-Defense |
| 13 | `/compare/gi-vs-nogi/` | Gi vs NoGi BJJ: Which Is Right for You? |
| 14 | `/compare/bjj-vs-muay-thai/` | BJJ vs Muay Thai: Which Martial Art Should You Learn? |
| 15 | `/compare/bjj-vs-taekwondo-for-kids/` | BJJ vs Taekwondo for Kids |
| 16 | `/compare/bjj-vs-boxing/` | BJJ vs Boxing for Self-Defense |

### C. More locations (14)
Fill in remaining Modesto neighborhoods + outer towns.

| # | URL | H1 |
|---|-----|------|
| 17 | `/locations/escalon/` | Jiu-Jitsu in Escalon, CA |
| 18 | `/locations/escalon/brazilian-jiu-jitsu/` | Brazilian Jiu-Jitsu in Escalon, CA |
| 19 | `/locations/patterson/` | Jiu-Jitsu in Patterson, CA |
| 20 | `/locations/patterson/kids-jiu-jitsu/` | Kids Jiu-Jitsu in Patterson, CA |
| 21 | `/locations/mchenry-avenue/` | Jiu-Jitsu Near McHenry Avenue |
| 22 | `/locations/mchenry-avenue/nogi-jiu-jitsu/` | NoGi Jiu-Jitsu Near McHenry Ave |
| 23 | `/locations/village-one/` | Jiu-Jitsu in Village One (Modesto) |
| 24 | `/locations/village-one/kids-jiu-jitsu/` | Kids Jiu-Jitsu in Village One |
| 25 | `/locations/la-loma/` | Jiu-Jitsu in La Loma (Modesto) |
| 26 | `/locations/shackelford/` | Jiu-Jitsu in Shackelford (Modesto) |
| 27 | `/locations/ceres/nogi-jiu-jitsu/` | NoGi Jiu-Jitsu in Ceres, CA |
| 28 | `/locations/turlock/kids-jiu-jitsu/` | Kids Jiu-Jitsu in Turlock, CA |
| 29 | `/locations/oakdale/self-defense-classes/` | Self-Defense Classes in Oakdale, CA |
| 30 | `/locations/riverbank/self-defense-classes/` | Self-Defense Classes in Riverbank, CA |

## Content Rules
- Comparison pages MUST be genuinely fair comparisons. Don't trash the alternatives — acknowledge their strengths, then explain why BJJ (or NoGi specifically) fits the reader's specific goal. Google demotes biased "comparison SEO" pages.
- Curation pages MUST include real evaluation criteria, not "trust us we're the best."
- Every page: ≥4 of 10 uniqueness rules (see roadmap).

## Schema
- **Curation:** `ItemList` + `Article` + `BreadcrumbList`
- **Comparison:** `Article` + `BreadcrumbList` (optional `ComparisonTable` — use a real HTML table with proper `<th>`)
- **Location:** `LocalBusiness` (areaServed) + `Service` + `BreadcrumbList`

## Integration
- [ ] Add all 30 URLs to sitemap.xml
- [ ] Build `/best/index.html` and `/compare/index.html` hub pages
- [ ] Update nav: add `Compare` link if the nav still has room, otherwise put it under a `Learn` dropdown
- [ ] Cross-link curation → relevant services, locations → curation pages
- [ ] Run `/seo-audit`
- [ ] Verify agency attribution on all 30
- [ ] Update `sites/build-log.md`

## Agency attribution (hard rule)
Every page must include the "Powered by MMA Marketing Pro" footer line, `target="_blank"`, `rel="noopener"`, linking to `https://www.mmamarketingpro.com`.

## Success metrics — 30 days after ship
- 75/85 pages indexed cumulative
- 60+ keywords ranking top 50
- 20+ keywords ranking top 10
- +100% organic sessions vs baseline
- +8 trial submissions / month
