# Phase 6 — Fill Matrix Gaps + Refresh Phase 1 (Month 6)

> **Paste into a fresh Claude Code session when ready to ship Phase 6.**

**Ship date:** ______________
**Prerequisite:** Phases 1–5 shipped.

---

## Objective
Build **15 new pages** filling remaining matrix gaps + **refresh 20 Phase 1 pages** with 6 months of new data, testimonials, and internal links. Total work: 35 page-changes.

## Required Reading
Same as Phase 1 + all previously-built pages.

## Strategy
By Month 6, the site has 145+ pages indexed and some are ranking. Google Search Console should tell you which Phase 1 pages are underperforming vs their potential. This phase is equal parts:

1. **Fill gaps** (15 new pages) — anything from `keywords.json` not yet built but promising
2. **Refresh winners** (20 Phase 1 pages) — update the oldest, highest-potential pages with fresh signals

## Part A — 15 New Pages

Pull from `keywords.json` any combinations not yet built. Prioritize based on Google Search Console data from Phases 1–5: areas where we have near-miss rankings (positions 11–20) would benefit from a supporting sibling page.

### Suggested fill candidates
| # | URL | H1 | Why |
|---|-----|------|------|
| 1 | `/locations/downtown-modesto/kids-jiu-jitsu/` | Kids Jiu-Jitsu Near Downtown Modesto | Downtown parents with kids |
| 2 | `/locations/downtown-modesto/nogi-jiu-jitsu/` | NoGi Jiu-Jitsu Near Downtown Modesto | Downtown adult office workers |
| 3 | `/locations/empire/nogi-jiu-jitsu/` | NoGi Jiu-Jitsu in Empire, CA | Matrix fill |
| 4 | `/locations/empire/self-defense-classes/` | Self-Defense Classes in Empire, CA | Matrix fill |
| 5 | `/locations/waterford/nogi-jiu-jitsu/` | NoGi Jiu-Jitsu in Waterford, CA | Matrix fill |
| 6 | `/locations/waterford/brazilian-jiu-jitsu/` | Brazilian Jiu-Jitsu in Waterford, CA | Matrix fill |
| 7 | `/locations/hughson/nogi-jiu-jitsu/` | NoGi Jiu-Jitsu in Hughson, CA | Matrix fill |
| 8 | `/locations/escalon/nogi-jiu-jitsu/` | NoGi Jiu-Jitsu in Escalon, CA | Matrix fill |
| 9 | `/locations/patterson/brazilian-jiu-jitsu/` | Brazilian Jiu-Jitsu in Patterson, CA | Matrix fill |
| 10 | `/programs/nogi-jiu-jitsu-for-wrestlers/` | NoGi for Wrestlers Transitioning to BJJ | Niche persona |
| 11 | `/programs/jiu-jitsu-for-military-veterans/` | Jiu-Jitsu for Military Veterans in Modesto | Persona |
| 12 | `/learn/how-to-choose-a-bjj-gym/` | How to Choose a BJJ Gym: A 5-Step Guide | Commercial intent top-of-funnel |
| 13 | `/learn/bjj-first-month-guide/` | Your First Month of BJJ: What to Expect | Retention content |
| 14 | `/compare/guerrilla-jj-vs-traditional-martial-arts/` | Why NoGi BJJ Beats Traditional Martial Arts for Real Self-Defense | Positioning |
| 15 | `/best/best-summer-martial-arts-camp-in-modesto/` | Best Summer Martial Arts Camp in Modesto | Seasonal |

**Replace any of these** with better options based on actual GSC data from the prior phases.

## Part B — Refresh 20 Phase 1 Pages

For each of the 20 oldest pages (Phase 1 + first 10 of Phase 2), perform the following updates:

### Refresh Checklist (run on every refreshed page)
- [ ] **Add 1–2 fresh testimonials** — recent member quotes, dated to current year
- [ ] **Add 3–5 new internal links** to pages built in Phases 2–5 (persona pages, offer pages, related glossary)
- [ ] **Update stat counts** — total classes/week, years of instruction, number of indexed pages we have documenting BJJ topics, etc.
- [ ] **Refresh hero image** if a better real photo exists in `images/`
- [ ] **Update the FAQ block** — add 1–2 new Q&As based on real questions the client has received in the last 6 months
- [ ] **Expand the content** — add 200–300 words of new content sections where thin
- [ ] **Update `<meta name="last-modified">` and `<time datetime="">` in the article**
- [ ] **Update sitemap.xml `<lastmod>` entries for refreshed pages** to the refresh date
- [ ] **Keep the canonical URL unchanged** — never rewrite slugs mid-phase

### Refresh Priority Order
1. The 5 highest-intent area hubs (Oakdale, Riverbank, Salida, Downtown Modesto, Empire)
2. The 5 highest-intent location × service pages (Kids Jiu-Jitsu in Oakdale / Riverbank / Salida; NoGi in Oakdale; BJJ in Riverbank)
3. The 5 foundational glossary pages (what-is-bjj, what-is-nogi, is-bjj-good-for-self-defense, what-age-can-kids-start-bjj, is-bjj-safe-for-kids)
4. The 5 Phase 2 persona pages with highest impressions but low CTR

## Schema
New pages: same per-page-type schema rules as prior phases.
Refreshed pages: check that existing schema is still accurate; update `AggregateRating` reviewCount if new testimonials added.

## Integration
- [ ] Add 15 new URLs to sitemap.xml
- [ ] Update `<lastmod>` for 20 refreshed pages in sitemap.xml
- [ ] Cross-link new Phase 6 pages into the existing hubs (/learn/, /locations/, /best/, /compare/, /offers/)
- [ ] Run `/seo-audit` on all 35 (15 new + 20 refreshed)
- [ ] Verify agency attribution on all 35
- [ ] Update `sites/build-log.md` with final Phase 6 completion date and a summary of the total 6-month build

## Agency attribution (hard rule)
Every page must include the "Powered by MMA Marketing Pro" footer line, `target="_blank"`, `rel="noopener"`, linking to `https://www.mmamarketingpro.com`.

## Final 6-month success metrics — 30 days after Phase 6 ships
- **160/180 pages indexed (cumulative)**
- **140+ keywords ranking top 50**
- **60+ keywords ranking top 10**
- **+300% organic sessions vs baseline**
- **+20 trial submissions / month from organic**
- Offer pages converting at ≥8% of sessions
- Technique tutorials averaging 2+ min on page
- Core web vitals all in "Good" range

## Post-Phase-6 Maintenance (ongoing, not this phase)
- Monthly: refresh 2–3 pages based on GSC data
- Quarterly: add 5–10 new pages for seasonal terms (summer camp, back-to-school, new year)
- Semi-annually: re-run full `/seo-audit` on the entire site
- Annually: review `keywords.json` for new opportunities from the client's changing student base
