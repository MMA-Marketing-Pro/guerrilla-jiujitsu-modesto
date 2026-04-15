# Phase 5 — Pricing Offers + Edge Geographies (Month 5)

> **Paste into a fresh Claude Code session when ready to ship Phase 5.**

**Ship date:** ______________
**Prerequisite:** Phases 1–4 shipped.

---

## Objective
Build **30 pages** — 5 pricing/offer pages, 15 remaining matrix fills (location × service combinations not yet built), 10 additional personas and specialized audiences.

## Required Reading
Same as Phase 1 + the new programs/locations/learn hubs built in Phases 1–4.

## URL Structure
```
/offers/{offer-slug}/                        (5 pricing pages)
/locations/{area}/{service}/                  (15 matrix fills)
/programs/{service}-for-{audience}/           (10 persona variants)
```

## Page Manifest (30)

### A. Pricing / offer pages (5)
| # | URL | H1 | Goal |
|---|-----|------|------|
| 1 | `/offers/free-trial-class-modesto/` | Free BJJ Trial Class in Modesto | Trial page — converts "free trial" searches |
| 2 | `/offers/kids-bjj-first-class-free/` | Kids BJJ: First Class Free in Modesto | Kids-specific trial page |
| 3 | `/offers/family-jiu-jitsu-membership/` | Family Jiu-Jitsu Membership in Modesto | Family pricing (client confirms pricing before page ships) |
| 4 | `/offers/drop-in-open-mat/` | NoGi Open Mat Drop-In — Modesto | Out-of-town practitioners |
| 5 | `/offers/beginner-bjj-intro-program/` | 4-Week Beginner BJJ Intro Program | Converts "beginners bjj" searches |

**🚩 Client must approve pricing numbers before any offer page goes live.**

### B. Matrix-fill location × service pages (15)
Fill the gaps from the keyword matrix in `keywords.json` — services × locations not yet combined in prior phases.

| # | URL | H1 |
|---|-----|------|
| 6 | `/locations/oakdale/self-defense-classes/` | Self-Defense Classes in Oakdale, CA |
| 7 | `/locations/turlock/self-defense-classes/` | Self-Defense Classes in Turlock, CA |
| 8 | `/locations/ceres/martial-arts/` | Martial Arts in Ceres, CA |
| 9 | `/locations/riverbank/martial-arts/` | Martial Arts in Riverbank, CA |
| 10 | `/locations/salida/martial-arts/` | Martial Arts in Salida, CA |
| 11 | `/locations/empire/kids-jiu-jitsu/` | Kids Jiu-Jitsu in Empire, CA |
| 12 | `/locations/salida/kids-jiu-jitsu/` | Kids Jiu-Jitsu in Salida, CA |
| 13 | `/locations/turlock/grappling/` | Grappling in Turlock, CA |
| 14 | `/locations/oakdale/submission-grappling/` | Submission Grappling in Oakdale, CA |
| 15 | `/locations/modesto-95355/brazilian-jiu-jitsu/` | Brazilian Jiu-Jitsu in 95355 |
| 16 | `/locations/north-modesto/kids-jiu-jitsu/` | Kids Jiu-Jitsu in North Modesto |
| 17 | `/locations/east-modesto/nogi-jiu-jitsu/` | NoGi Jiu-Jitsu in East Modesto |
| 18 | `/locations/west-modesto/kids-jiu-jitsu/` | Kids Jiu-Jitsu in West Modesto |
| 19 | `/locations/hughson/kids-jiu-jitsu/` | Kids Jiu-Jitsu in Hughson, CA |
| 20 | `/locations/escalon/kids-jiu-jitsu/` | Kids Jiu-Jitsu in Escalon, CA |

### C. Specialized persona pages (10)
| # | URL | H1 |
|---|-----|------|
| 21 | `/programs/jiu-jitsu-for-stress-relief/` | Jiu-Jitsu for Stress Relief and Mental Health |
| 22 | `/programs/bjj-for-weight-loss/` | BJJ for Weight Loss: Train Smart, Lose Real Weight |
| 23 | `/programs/jiu-jitsu-for-shy-kids/` | Jiu-Jitsu for Shy Kids: Confidence Through Training |
| 24 | `/programs/bjj-for-bullied-kids/` | Anti-Bullying BJJ for Kids |
| 25 | `/programs/jiu-jitsu-for-adhd-kids/` | Jiu-Jitsu for Kids with ADHD |
| 26 | `/programs/jiu-jitsu-for-athletes/` | Cross-Training Jiu-Jitsu for Other Athletes |
| 27 | `/programs/jiu-jitsu-for-first-responders/` | Jiu-Jitsu for First Responders |
| 28 | `/programs/couples-jiu-jitsu/` | Couples Jiu-Jitsu: Train Together in Modesto |
| 29 | `/programs/bjj-for-mma-prep/` | BJJ for MMA Prep |
| 30 | `/programs/summer-bjj-for-kids/` | Summer BJJ Programs for Kids in Modesto |

## Content Rules
- **Offer pages** must have clear pricing (or "inquire for pricing" with reasoning), an unambiguous CTA to the lead modal, trust signals, and an `Offer` schema block with validity dates.
- **Kids-with-condition personas (ADHD, shy, bullied)** — write with care. Never overclaim therapeutic effects. Use testimonials from real parents if available; otherwise soften to "many parents find that…". Safety and responsibility language required.
- **Couples / Families / summer programs** — real value per page: summer page has camp schedule / date ranges; couples has a specific "train together" appeal.
- ≥4 of 10 uniqueness rules per page.

## Schema
- **Offer:** `Offer` + `LocalBusiness` + `BreadcrumbList` + `FAQPage`
- **Location × service:** `LocalBusiness` (areaServed) + `Service` + `BreadcrumbList`
- **Specialized persona:** `Service` + `Audience` + `BreadcrumbList` + `FAQPage`

## Integration
- [ ] Add all 30 URLs to sitemap.xml
- [ ] Build `/offers/index.html` hub
- [ ] Cross-link persona pages to relevant offers (e.g., kids-with-ADHD → kids BJJ first class free)
- [ ] Link offer pages from homepage hero and CTA banners where appropriate
- [ ] Run `/seo-audit`
- [ ] Verify agency attribution on all 30
- [ ] Update `sites/build-log.md`

## Agency attribution (hard rule)
Every page must include the "Powered by MMA Marketing Pro" footer line.

## Success metrics — 30 days after ship
- 130/145 pages indexed cumulative
- 115+ keywords ranking top 50
- 50+ keywords ranking top 10
- +225% organic sessions vs baseline
- +17 trial submissions / month
- Offer pages convert at ≥8% of sessions
