# Portfolio – TODO

---

## 🗓 Calendly / Booking Widget
- [ ] Research options: Calendly embed vs. Cal.com (open-source, self-hostable) vs. simple mailto CTA
- [ ] Decide placement: contact section inline widget, or button that opens a modal/new tab
- [ ] Add embed script or link to the contact section
- [ ] Test on mobile (booking widgets are often poorly responsive)

---

## 🔒 Security Audit
> Review the end-to-end project as a **cybersecurity specialist** — identify and fix any security flaws.

- [ ] Check for exposed sensitive data (API keys, emails hardcoded in JS, etc.)
- [ ] Audit all external scripts (Google Fonts, Analytics) — evaluate CSP headers
- [ ] Add Content Security Policy (CSP) headers for GitHub Pages deployment
- [ ] Verify all outbound links use `rel="noopener noreferrer"` with `target="_blank"`
- [ ] Check that no user input is accepted without sanitization (forms, if any added)
- [ ] Confirm HTTPS enforcement end-to-end (GitHub Pages + Squarespace DNS)
- [ ] Review site.webmanifest and favicon chain for unexpected external calls

---

## 🎨 UX Review
> Review the end-to-end project as a **senior UX designer** — list improvements from high to low priority.

- [ ] Conduct full UX audit (navigation flow, visual hierarchy, readability, contrast ratios)
- [ ] Produce prioritized improvement list (High / Medium / Low) with rationale for each
- [ ] Check WCAG AA compliance (color contrast, focus states, keyboard navigation)
- [ ] Review mobile experience specifically (tap targets, spacing, font sizes)
- [ ] Evaluate scroll experience and section transitions
- [ ] Assess CTA clarity — are "View projects" and "Say hello" compelling enough?

---

## 🧑‍💻 Code Simplification
> Review the end-to-end project as a **senior web developer** — simplify the codebase.

- [ ] Audit inline styles vs. CSS classes — consolidate where redundant
- [ ] Extract reusable Astro components (e.g. `ProjectCard.astro`, `SectionHeading.astro`)
- [ ] Move project and skill data to separate `.ts` data files (out of `index.astro`)
- [ ] Evaluate whether Tailwind utilities can replace custom CSS classes
- [ ] Check for unused CSS rules
- [ ] Add `astro.config.mjs` output settings for GitHub Pages (`base`, `site`)

---

## 🔍 SEO Review
> Review the end-to-end project as an **SEO specialist** — improve search engine visibility.

- [ ] Audit all meta tags (title, description, OG, Twitter Card)
- [ ] Add Open Graph image (`og:image`) for rich link previews on LinkedIn / Slack
- [ ] Validate JSON-LD structured data at schema.org validator
- [ ] Check heading hierarchy (H1 → H2 → H3) for correct semantic structure
- [ ] Add `sitemap.xml` (Astro has a built-in integration: `@astrojs/sitemap`)
- [ ] Add `robots.txt`
- [ ] Evaluate page speed (Lighthouse) — target 95+ on all metrics
- [ ] Check canonical URL tag
- [ ] Research target keywords for "Analytics Engineer Paris" and work them into copy

---

## ✅ Done
- [x] Scaffold Astro + Tailwind project
- [x] Hero, About, Skills, Projects, Contact sections
- [x] Dark green color theme
- [x] Favicon set (ico, png, svg, apple-touch, webmanifest)
- [x] CV download (`resume_pierre_marionneau.pdf`)
- [x] Mobile-first responsive layout
- [x] JSON-LD structured data
- [x] Email set to `marionneaupierre@proton.me`
- [x] `rel="noopener noreferrer"` on all `target="_blank"` links (security)
- [x] Skills & projects extracted to `src/data/skills.ts` and `src/data/projects.ts`
- [x] `@astrojs/sitemap` installed — generates `sitemap-index.xml` on build
- [x] `robots.txt` added pointing crawlers to sitemap
