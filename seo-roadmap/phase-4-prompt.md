# Phase 4 — Long-Tail Education (Month 4)

> **Paste into a fresh Claude Code session when ready to ship Phase 4.**

**Ship date:** ______________
**Prerequisite:** Phases 1–3 shipped.

---

## Objective
Build **30 pages** — 10 technique tutorials, 10 long-tail glossary pages, 10 deep-geographic location pages.

## Required Reading
Same as Phase 1.

## URL Structure
```
/learn/techniques/{slug}/      (10 technique tutorials)
/learn/{term-slug}/             (10 long-tail glossary)
/locations/{area-slug}/{service-slug}/  (10 matrix fills)
```

## Page Manifest (30)

### A. Technique tutorials (10)
Each tutorial uses `HowTo` schema. Written by "Mike Cruz" with E-E-A-T signals (credentials, video embed if available).

| # | URL | H1 |
|---|-----|------|
| 1 | `/learn/techniques/rear-naked-choke/` | Rear Naked Choke: Step-by-Step Technique |
| 2 | `/learn/techniques/armbar-fundamentals/` | The Armbar: A Beginner's Breakdown |
| 3 | `/learn/techniques/triangle-choke/` | Triangle Choke: How It Works |
| 4 | `/learn/techniques/basic-guard-positions/` | Basic BJJ Guard Positions Explained |
| 5 | `/learn/techniques/escape-from-mount/` | How to Escape the Mount in BJJ |
| 6 | `/learn/techniques/shrimp-hip-escape/` | The Shrimp / Hip Escape Drill |
| 7 | `/learn/techniques/breakfalls/` | BJJ Breakfalls: How to Land Safely |
| 8 | `/learn/techniques/nogi-takedowns-for-beginners/` | NoGi Takedowns for Beginners |
| 9 | `/learn/techniques/half-guard-basics/` | Half Guard Basics for NoGi |
| 10 | `/learn/techniques/passing-the-guard-fundamentals/` | Passing the Guard: Fundamentals |

### B. Long-tail glossary (10)
| # | URL | H1 |
|---|-----|------|
| 11 | `/learn/bjj-stripe-system/` | How the BJJ Stripe System Works |
| 12 | `/learn/bjj-white-belt-guide/` | BJJ White Belt Guide: What to Expect |
| 13 | `/learn/bjj-warm-up-exercises/` | BJJ Warm-Up Exercises Every Beginner Should Know |
| 14 | `/learn/how-to-tap-in-bjj/` | How to Tap in BJJ (and Why It Keeps You Safe) |
| 15 | `/learn/bjj-training-frequency/` | How Often Should You Train BJJ as a Beginner? |
| 16 | `/learn/is-bjj-good-workout/` | Is BJJ a Good Workout? What to Expect |
| 17 | `/learn/bjj-for-weight-loss/` | Does BJJ Help with Weight Loss? |
| 18 | `/learn/bjj-injury-prevention/` | BJJ Injury Prevention for Beginners |
| 19 | `/learn/nogi-submissions-for-beginners/` | Basic NoGi Submissions Every Beginner Should Learn |
| 20 | `/learn/bjj-vs-gym-membership/` | BJJ vs a Regular Gym Membership: Which Actually Works? |

### C. Deep-geographic location pages (10)
Hyper-local — specific zip codes, landmarks, or districts within Modesto.

| # | URL | H1 | Notes |
|---|-----|------|-------|
| 21 | `/locations/modesto-95355/` | Jiu-Jitsu in 95355 (Modesto's East Side) | Academy's own zip |
| 22 | `/locations/modesto-95350/` | Jiu-Jitsu in 95350 (Modesto) | Central Modesto zip |
| 23 | `/locations/modesto-95357/` | Jiu-Jitsu in 95357 (East Modesto) | |
| 24 | `/locations/modesto-95356/` | Jiu-Jitsu in 95356 (North Modesto) | |
| 25 | `/locations/near-mchenry-village/` | BJJ Near McHenry Village | Landmark-based |
| 26 | `/locations/near-vintage-faire-mall/` | BJJ Near Vintage Faire Mall | Landmark-based (validate with client) |
| 27 | `/locations/modesto-junior-college-area/` | BJJ Near Modesto Junior College | Student-focused |
| 28 | `/locations/beyer-high-school-area/` | Martial Arts Near Beyer High School | High school feeder (validate) |
| 29 | `/locations/downey-high-school-area/` | Martial Arts Near Downey High School | Validate |
| 30 | `/locations/modesto-airport-district/` | Jiu-Jitsu Near the Modesto Airport District | |

**🚩 Flag to client:** The landmark-based URLs (26–29) use specific landmark names that should be locally verified. Rename to whatever landmarks actually generate student traffic in their experience.

## Content Rules
- **Technique tutorials** MUST include step-by-step numbered instructions for `HowTo` schema, safety warnings, common beginner mistakes, and a "practice this in our Adults NoGi Beginners class" CTA.
- **Glossary pages** lean on Mike Cruz's voice — E-E-A-T signal via byline, author credentials in the footer.
- **Hyper-local pages** must have a real reason for existing (actual student commutes, landmarks near the academy). If you can't write 400+ words of genuinely local-specific content, drop the page.
- Every page: ≥4 of 10 uniqueness rules.

## Schema
- **Technique tutorial:** `HowTo` + `Article` + `BreadcrumbList` (with `author` = Mike Cruz Person)
- **Glossary:** `Article` + `BreadcrumbList` + `FAQPage` (with `author`)
- **Hyper-local:** `LocalBusiness` (areaServed) + `BreadcrumbList`

## Integration
- [ ] Add to sitemap.xml
- [ ] Build `/learn/techniques/index.html` hub
- [ ] Cross-link technique pages to the specific program pages that teach them (e.g., armbar → Adults NoGi)
- [ ] Cross-link glossary pages to 2–3 related glossary pages
- [ ] Run `/seo-audit`
- [ ] Verify agency attribution on all 30
- [ ] Update `sites/build-log.md`

## Agency attribution (hard rule)
Every page must include the "Powered by MMA Marketing Pro" footer line.

## Success metrics — 30 days after ship
- 105/115 pages indexed cumulative
- 90+ keywords ranking top 50
- 35+ keywords ranking top 10
- +150% organic sessions vs baseline
- +12 trial submissions / month
- **New: track time-on-page for technique tutorials** — should be 2+ min avg
