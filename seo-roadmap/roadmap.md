# Guerrilla Jiu-Jitsu Modesto — 6-Month SEO Expansion Roadmap

## Executive Summary

| Field | Value |
|-------|-------|
| Business | Guerrilla Jiu-Jitsu Modesto |
| Location | 2508 Oakdale Rd, Modesto, CA 95355 |
| Primary service | Brazilian Jiu-Jitsu (NoGi specialty), adults + kids (ages 3+) |
| Owner/Instructor | Mike Cruz — black belt under Alejandro Perez, mentored by Dave Camarillo |
| Site root | https://guerrillajiujitsumodesto.com |
| Current site size | 9 pages (built in Step 4) |
| Target expansion | **180 new pages across 6 phases (25–30 / month)** |
| Playbooks used | Locations (heavy), Personas (heavy), Glossary, Curation, Comparisons, Examples, Pricing Offers |
| Timeline | Month 1 → Month 6 |

---

## 🚩 Assumptions to Validate with Client

Before shipping Phase 1, the client should confirm:

1. **Neighborhoods** — I researched 8 Modesto neighborhoods from public knowledge. The client knows which ones actually generate trainable students. They may want to swap some out for more accurate areas (e.g., specific districts I didn't list).
2. **Surrounding towns willing to serve** — Oakdale (adjacent), Riverbank, Salida, Empire, Ceres, Turlock, Waterford, Hughson, Escalon, Patterson. Does the client want to target all 10, or narrow to ~5–6 where they already get students?
3. **Any local landmarks / zip codes** — hyper-local pages can target "BJJ near {landmark}" — the client can supply the 5–10 landmarks that make sense (schools, parks, big employers, shopping centers).
4. **Law enforcement / military** — I included a persona for them; Modesto has a notable LE community. Does the client want to lean in here?
5. **Competitor names** — I avoided naming specific competitor gyms in the comparison pages. If the client wants to add `vs {specific competitor}` pages, they should supply the list.

---

## Keyword Matrix (at a glance)

| Playbook | Formula | Pages planned | Priority |
|---|---|---|---|
| Locations | `{service} in {neighborhood OR town}` | **70** | 🔥 Heavy |
| Personas | `{service} for {persona}` | **35** | 🔥 Heavy |
| Glossary | `what is {term}` / beginner educational | **20** | Medium |
| Examples | `{technique} tutorial / explained` | **10** | Medium |
| Curation | `best {thing} in {city}` | **8** | 🔥 Heavy |
| Comparisons | `{us} vs {alternative}` | **8** | Medium |
| Pricing offers | `{offer} in {city}` | **5** | Medium |
| Optimize/refresh passes on Phase 1 | — | **24** | — |
| **Total** | | **180** | |

Full matrix is machine-readable in `keywords.json`.

### Services (×7)
Brazilian Jiu-Jitsu · NoGi Jiu-Jitsu · Kids Jiu-Jitsu · Self-Defense Classes · Submission Grappling · Martial Arts · Grappling

### Personas (×9)
Beginners · Adults · Women · Kids · Teens · Adults Over 40 · Competitors · Parents (Looking for Kids Martial Arts) · Law Enforcement & Military

### Locations (×18)
**Neighborhoods of Modesto:** Downtown · North · East · West · McHenry Avenue · Village One · La Loma · Shackelford
**Surrounding towns within ~20 miles:** Oakdale · Riverbank · Salida · Empire · Ceres · Turlock · Waterford · Hughson · Escalon · Patterson

---

## URL Structure Plan

Use subfolder patterns (never subdomains). Slug every page lowercase with hyphens.

```
/locations/{city-or-neighborhood-slug}/              (hub page per area)
/locations/{city-or-neighborhood-slug}/{service}/    (spoke: service × location)
/programs/{service}-for-{persona}/                   (persona pages)
/learn/{glossary-slug}/                              (glossary/educational)
/learn/techniques/{example-slug}/                    (technique tutorials)
/compare/{comparison-slug}/                          (comparison pages)
/best/{curation-slug}/                               (best-of curation pages)
/offers/{offer-slug}/                                (pricing/trial pages)
```

**Examples:**
- `/locations/oakdale/` — Oakdale hub
- `/locations/oakdale/kids-jiu-jitsu/` — "Kids Jiu-Jitsu in Oakdale"
- `/programs/nogi-jiu-jitsu-for-adults-over-40/`
- `/learn/what-is-nogi-jiu-jitsu/`
- `/learn/techniques/rear-naked-choke/`
- `/compare/bjj-vs-wrestling/`
- `/best/best-bjj-gym-in-modesto/`
- `/offers/free-trial-class-modesto/`

---

## Phase Breakdown

| Phase | Month | Focus | Pages | Cumulative |
|------|-------|-------|------|-----------|
| **Phase 1** | Month 1 | Foundation: adjacent towns + core neighborhoods + top glossary | 25 | 25 |
| **Phase 2** | Month 2 | Persona expansion + more locations | 30 | 55 |
| **Phase 3** | Month 3 | Authority: curation + comparisons + more locations | 30 | 85 |
| **Phase 4** | Month 4 | Long-tail education: glossary + technique tutorials + deep suburbs | 30 | 115 |
| **Phase 5** | Month 5 | Pricing/offers + edge geographies + remaining personas | 30 | 145 |
| **Phase 6** | Month 6 | Fill matrix gaps + refresh Phase 1 pages | 35 | **180** |

---

## Internal Linking Architecture

**Hub-and-spoke model.** Existing site becomes the hub; new programmatic pages are spokes.

### Hubs (existing + new)
- `index.html` (home) — links down to main `/locations/`, `/programs/`, `/learn/`, `/best/` hubs
- `services.html` (schedule) — primary hub for all `/programs/` persona pages
- `about.html` — links to curation `/best/` pages
- `faqs.html` — links out to every glossary `/learn/` page
- **New:** `/locations/` hub index listing every neighborhood/town
- **New:** `/learn/` hub index listing glossary + techniques
- **New:** `/best/` hub index listing all curation pages
- **New:** `/compare/` hub index

### Cross-linking rules
- Every location page links to: its neighborhood hub + 2–3 adjacent neighborhood pages + relevant service page (Schedule) + 1 top-of-funnel glossary page + CTA to free trial
- Every persona page links to: relevant location pages + related persona (e.g., Kids → Parents) + the main schedule page
- Every glossary page links to: 2 related glossary pages + the most relevant service page
- Every curation page links to: every location it references + the home page

### Navigation updates
- Add `Learn` dropdown to primary nav by Phase 3 (once ≥20 /learn/ pages exist)
- Footer gains a "Serving" section listing top 8 neighborhoods + towns
- Add hub indexes to `sitemap.xml` every phase

---

## Schema Strategy per Page Type

| Page type | Required JSON-LD |
|-----------|------------------|
| Location hub (`/locations/{area}/`) | `LocalBusiness` + `Place` + `BreadcrumbList` |
| Location × service (`/locations/{area}/{service}/`) | `LocalBusiness` (with `areaServed`) + `Service` + `BreadcrumbList` |
| Persona (`/programs/{service}-for-{persona}/`) | `Service` + `Audience` + `BreadcrumbList` |
| Glossary (`/learn/{term}/`) | `Article` + `BreadcrumbList` + relevant `DefinedTerm` |
| Technique tutorial (`/learn/techniques/{slug}/`) | `HowTo` + `Article` + `BreadcrumbList` |
| Comparison (`/compare/{a}-vs-{b}/`) | `Article` + `BreadcrumbList` |
| Curation (`/best/{slug}/`) | `ItemList` + `Article` + `BreadcrumbList` |
| Pricing offer (`/offers/{slug}/`) | `Offer` + `LocalBusiness` + `BreadcrumbList` |

All pages inherit the site-wide `Organization` and `WebSite` schema from `index.html`.

---

## Content Uniqueness Rules (avoid thin-content penalty)

Every programmatic page MUST include at least 4 of these unique elements — not just swapped variables:

1. **Neighborhood-specific intro paragraph** — call out a real local landmark, main road, or district character (e.g., "Just off Yosemite Blvd, a 6-minute drive from downtown Oakdale…")
2. **Commute/access note** — approximate drive time from that area to 2508 Oakdale Rd with a directions link
3. **Parking / arrival note** if specific to that page's geography
4. **At least one local testimonial** mentioning the neighborhood, if available — otherwise a generic testimonial clearly tagged by persona/service
5. **Unique FAQ block** — 3–5 questions specific to that page's intent (e.g., "Is there a BJJ gym near downtown Modesto?" for the Downtown Modesto page)
6. **Unique H2 sections per page** — a persona page has "Why BJJ Works for [persona]" which a location page doesn't have
7. **Internal links to 3–5 related new pages** — not just back to the home page
8. **Nearby alternative mention** — for location pages, mention 1–2 nearby neighborhoods we also serve, to capture intent that drifts
9. **Program schedule snippet relevant to the page** — location pages show the weekly schedule; persona pages show which classes match that audience
10. **Coach attribution** — Mike Cruz named as instructor with credentials, so E-E-A-T compounds across every page

If a page can't meet 4 of these, **drop it** from the plan rather than ship a thin swap.

---

## Success Metrics per Phase

Track in Google Search Console + Google Analytics 4:

| Metric | Phase 1 target | Phase 3 target | Phase 6 target |
|--------|---------------|---------------|---------------|
| Pages indexed | 20 of 25 (80%) | 75 of 85 (88%) | 160 of 180 (89%) |
| Keywords ranking top 50 | 15+ | 60+ | 140+ |
| Keywords ranking top 10 | 2+ | 20+ | 60+ |
| Organic sessions / month | +25% over baseline | +100% | +300% |
| Trial class form submits from organic | +2 / mo | +8 / mo | +20 / mo |

Review after each phase. If a phase underperforms (<40% indexed 30 days post-ship), pause new-page production and invest in internal linking + content depth on the existing set before continuing.

---

## Phase Prompt Files

Six paste-to-execute prompts are saved in this folder:

- `phase-1-prompt.md` — Foundation
- `phase-2-prompt.md` — Persona expansion
- `phase-3-prompt.md` — Authority (curation + comparisons)
- `phase-4-prompt.md` — Long-tail education
- `phase-5-prompt.md` — Pricing/offers + edge geos
- `phase-6-prompt.md` — Fill + refresh

Each prompt is self-contained. Paste it into a fresh Claude Code session when you're ready to ship that phase.

---

## Hard Rules (read before every phase)

1. **Every page must include the "Powered by MMA Marketing Pro" footer attribution** linked to `https://www.mmamarketingpro.com`, `target="_blank"`, `rel="noopener"`. No exceptions, including programmatic pages.
2. **Every page must meet at least 4 of the 10 uniqueness rules** above. Never ship a variable-swap-only page.
3. **No cannibalization.** If a new URL would target the same primary keyword as an existing page, pick one canonical URL and redirect the other.
4. **Run `/seo-audit`** on the new pages after each phase ships. Add new URLs to `sitemap.xml`. Commit and push.
5. **Update `build-log.md`** after each phase with page count, URLs shipped, and phase completion date.
