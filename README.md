# Seekingtex 鈥?Astro v6 Multilingual Platform

Multilingual (22 languages) functional fabric site for **Seekingtex**, built on [Astro v6](https://astro.build) with hybrid SSG/SSR, deployed to a **single Cloudflare Worker**.

**Domain:** `seekingtex.com` (production), preview via `wrangler dev` (local) or CI preview URLs.

---

## 1. Architecture Overview

```
Request 鈫?seekingtex.com/{lang}/{path}
              鈫?         Astro handler
              鈫?    鈹屸攢鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹?    鈹?SSG (prerender)  鈹?鈫?/products/*, /guides/*, /faq, /about, /contact, /llms/*, etc.
    鈹?SSR (server)     鈹?鈫?/news/*, /keystatic, /api/*
    鈹?API routes       鈹?鈫?/api/ask, /api/chat, /api/contact, etc.
    鈹斺攢鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹€鈹?```

Most pages are pre-rendered at build time. SSR pages are `/news/*` (blog), `/keystatic` (admin), and `/api/*`.

All locale URLs use **path-based** format: `seekingtex.com/fr/products`, `seekingtex.com/de/guides`.

---

## 2. Tech Stack

| Layer       | Technology                                           |
| ----------- | ---------------------------------------------------- |
| Framework   | Astro v6                                             |
| Styling     | Tailwind CSS v4                                      |
| Icons       | tabler (via astro-icon)                              |
| Fonts       | Inter Variable (fontsource)                          |
| AI          | Workers AI (bge-base-en-v1.5, llama-3.1-8b-instruct) |
| Vector DB   | Cloudflare Vectorize (768-dim cosine)                |
| Admin CMS   | Keystatic (GitHub API-backed)                        |
| Contact     | Turnstile captcha + AES-256-GCM encryption + Resend email |
| Asset Storage | Cloudflare R2 (`seekingtex-assets`, custom domain `products.asset.seekingtex.com`) |
| Deployment  | Cloudflare Workers (`output:'server'`)               |
| CI/CD       | GitHub Actions                                       |
| SEO         | astro-seo, @astrojs/sitemap, JSON-LD, GEO AI         |
| Compression | Cloudflare edge (Brotli/gzip)                        |
| MDX         | @astrojs/mdx                                         |

---

## 3. Directory Structure

```
src/
鈹溾攢鈹€ pages/
鈹? 鈹溾攢鈹€ [lang]/                    # Localized pages (22 languages)
鈹? 鈹? 鈹溾攢鈹€ index.astro            # Homepage (SSG)
鈹? 鈹? 鈹溾攢鈹€ about/                 # About page (SSG)
鈹? 鈹? 鈹溾攢鈹€ brand/                 # Brand (SSG)
鈹? 鈹? 鈹溾攢鈹€ contact.astro          # Contact (SSG)
鈹? 鈹? 鈹溾攢鈹€ custom/                # Custom Lab (SSG)
鈹? 鈹? 鈹溾攢鈹€ factory/               # Factory, process, equipment (SSG)
鈹? 鈹? 鈹溾攢鈹€ gallery/               # Gallery (SSG)
鈹? 鈹? 鈹溾攢鈹€ journal/               # Journal (SSG)
鈹? 鈹? 鈹溾攢鈹€ lifestyle/             # Lifestyle (SSG)
鈹? 鈹? 鈹溾攢鈹€ media/                 # Media Center (SSG)
鈹? 鈹? 鈹溾攢鈹€ oem-process.astro      # OEM/ODM Process (SSG)
鈹? 鈹? 鈹溾攢鈹€ engineering-team.astro # Engineering & R&D Team (SSG)
鈹? 鈹? 鈹溾攢鈹€ quality.astro          # Quality (SSG)
鈹? 鈹? 鈹溾攢鈹€ randdcenter/           # R&D Center (SSG)
鈹? 鈹? 鈹溾攢鈹€ safety.astro           # Safety (SSG)
鈹? 鈹? 鈹溾攢鈹€ technology.astro       # Technology (SSG)
鈹? 鈹? 鈹溾攢鈹€ academy/               # Academy index (SSG)
鈹? 鈹? 鈹溾攢鈹€ products/              # Product catalog & detail
鈹? 鈹? 鈹溾攢鈹€ guides/                # Guides listing & detail
鈹? 鈹? 鈹溾攢鈹€ use-cases/             # Use-case pages
鈹? 鈹? 鈹溾攢鈹€ compare/               # Product comparisons
鈹? 鈹? 鈹溾攢鈹€ v2/                    # V2 library articles
鈹? 鈹? 鈹溾攢鈹€ sitemap.xml.ts         # Per-locale sitemap
鈹? 鈹? 鈹斺攢鈹€ llms.txt.ts            # Per-locale AI knowledge graph
鈹? 鈹溾攢鈹€ llms/                      # AI-readable markdown (auto-generated)
鈹? 鈹? 鈹溾攢鈹€ products/[slug].ts     # Product markdown
鈹? 鈹? 鈹溾攢鈹€ news/[slug].ts         # News markdown
鈹? 鈹? 鈹溾攢鈹€ guides/[slug].ts       # Guide markdown
鈹? 鈹? 鈹溾攢鈹€ v2/[slug].ts           # V2 knowledge markdown
鈹? 鈹? 鈹斺攢鈹€ pages/[slug].ts        # Standalone page markdown
鈹? 鈹溾攢鈹€ llms.txt.ts                # Root llms.txt (prerender)
鈹? 鈹溾攢鈹€ llms-full.txt.ts           # Root llms-full.txt (prerender)
鈹? 鈹溾攢鈹€ api/                       # API routes
鈹? 鈹? 鈹溾攢鈹€ admin/                 # Keystatic admin CRUD
鈹? 鈹? 鈹溾攢鈹€ ai/                    # AI quota & sitemap
鈹? 鈹? 鈹溾攢鈹€ auth/                  # Login/logout/change-password
鈹? 鈹? 鈹溾攢鈹€ ask.ts                 # AI Q&A
鈹? 鈹? 鈹溾攢鈹€ chat.ts                # AI chat
鈹? 鈹? 鈹溾攢鈹€ contact.ts             # Encrypted contact form
鈹? 鈹? 鈹溾攢鈹€ search.ts              # Full-text search
鈹? 鈹? 鈹溾攢鈹€ embed.ts               # Embeddings
鈹? 鈹? 鈹溾攢鈹€ geo-score.ts           # GEO scoring
鈹? 鈹? 鈹溾攢鈹€ page-inspect.ts        # Page inspection
鈹? 鈹? 鈹斺攢鈹€ seo/                   # SEO analysis & execution
鈹? 鈹溾攢鈹€ about.astro                # SSR (prerender=false)
鈹? 鈹溾攢鈹€ contact.astro              # SSR + captcha + encrypted
鈹? 鈹溾攢鈹€ news/                      # Blog (SSR)
鈹? 鈹溾攢鈹€ keystatic/                 # Admin panel (protected)
鈹? 鈹溾攢鈹€ internal/                  # GEO/SEO dashboards
鈹? 鈹溾攢鈹€ search-rescue-operations.astro  # B2B standalone page
鈹? 鈹溾攢鈹€ engineering-perfection.astro    # B2B standalone page
鈹? 鈹溾攢鈹€ disaster-relief-humanitarian-aid.astro # B2B standalone page
鈹? 鈹溾攢鈹€ commercial-workboats.astro     # B2B standalone page
鈹? 鈹溾攢鈹€ oem-odm-manufacturer.astro     # B2B standalone page
鈹? 鈹溾攢鈹€ design-powerhouse.astro        # B2B standalone page
鈹? 鈹溾攢鈹€ brand/                         # Brand pages
鈹? 鈹溾攢鈹€ randdcenter/                   # R&D center pages
鈹? 鈹溾攢鈹€ products/, guides/             # Non-localized versions
鈹? 鈹溾攢鈹€ search.astro, faq.astro        # Search & FAQ
鈹? 鈹斺攢鈹€ ...                            # 404, login, privacy, terms, etc.
鈹溾攢鈹€ components/
鈹? 鈹溾攢鈹€ widgets/                   # 28 page sections (Header, Footer, Hero, etc.)
鈹? 鈹溾攢鈹€ common/                    # Shared (JsonLd, Breadcrumbs, AiSignal, Metadata, etc.)
鈹? 鈹溾攢鈹€ blog/                      # Blog UI (SinglePost, Grid, Pagination)
鈹? 鈹溾攢鈹€ admin/                     # Keystatic admin form components (20+ section forms)
鈹? 鈹溾攢鈹€ ui/                        # Primitives (Button, Form, Headline, etc.)
鈹? 鈹溾攢鈹€ seo/                       # OrganizationSchema, SEO meta
鈹? 鈹斺攢鈹€ blocks/                    # Section wrapper, story block
鈹溾攢鈹€ layouts/                       # 8 layouts
鈹? 鈹溾攢鈹€ Layout.astro               # Base layout (hreflang, Organization/WebSite schema, AiSignal)
鈹? 鈹溾攢鈹€ PageLayout.astro           # Breadcrumbs + Header + Footer
鈹? 鈹溾攢鈹€ ProductLayout.astro        # Product page layout
鈹? 鈹溾攢鈹€ NewsLayout.astro           # News/blog layout
鈹? 鈹溾攢鈹€ MarkdownLayout.astro       # Markdown pages
鈹? 鈹溾攢鈹€ AdminLayout.astro          # Keystatic admin
鈹? 鈹斺攢鈹€ LandingLayout.astro        # Landing pages
鈹溾攢鈹€ lib/
鈹? 鈹溾攢鈹€ seo/                       # SEO engine (17 modules: brand, GSC, CTR, geo, rules, tasks)
鈹? 鈹溾攢鈹€ geo-v4/                    # GEO content v4 (generator, graph, templates)
鈹? 鈹溾攢鈹€ geo-v5/                    # GEO content v5 (semantic engine, topic clusters, gaps)
鈹? 鈹溾攢鈹€ geo-seo/                   # GEO SEO engine (intent rules, llms generators, types)
鈹? 鈹溾攢鈹€ geo/                       # Locale resolver
鈹? 鈹溾攢鈹€ ai-gateway.ts              # Cloudflare AI gateway
鈹? 鈹溾攢鈹€ rag.ts                     # RAG pipeline
鈹? 鈹溾攢鈹€ vector.ts                  # Vector operations
鈹? 鈹溾攢鈹€ auth.ts                    # Session auth
鈹? 鈹溾攢鈹€ rate-limit.ts              # Sliding window rate limiter
鈹? 鈹溾攢鈹€ github.ts                  # GitHub API client
鈹? 鈹溾攢鈹€ markdown.ts                # Markdown utilities
鈹? 鈹溾攢鈹€ productGraph.ts            # Product knowledge graph
鈹? 鈹斺攢鈹€ ...                        # link-refactor, query-bank, token-store, etc.
鈹溾攢鈹€ i18n/
鈹? 鈹溾攢鈹€ config.ts                  # Translation keys (22 languages, ~7400 lines)
鈹? 鈹溾攢鈹€ utils.ts                   # getLangFromUrl, removeLang, localizePath
鈹? 鈹斺攢鈹€ page-content.ts            # YAML page content loader
鈹溾攢鈹€ data/
鈹? 鈹溾攢鈹€ pages/                     # YAML: localized page content per locale
鈹? 鈹溾攢鈹€ site/                      # YAML: navigation, branding, languages, sections, etc.
鈹? 鈹溾攢鈹€ standalone-pages.ts        # B2B standalone page metadata (6 pages)
鈹? 鈹溾攢鈹€ products.ts                # Product SSOT (8 products, 4 categories)
鈹? 鈹溾攢鈹€ guides.ts                  # Guide records
鈹? 鈹溾攢鈹€ faq.ts                     # FAQ data
鈹? 鈹溾攢鈹€ content-v2.ts              # V2 library content
鈹? 鈹斺攢鈹€ seo/                       # SEO types & sample data
鈹溾攢鈹€ content/
鈹? 鈹溾攢鈹€ graph/                     # Knowledge graph (nodes, relations, index)
鈹? 鈹溾攢鈹€ news/                      # Blog posts (MDX)
鈹? 鈹斺攢鈹€ products/                  # Product pages (MDX)
鈹溾攢鈹€ middleware.ts                  # Locale detection, auth, geo API protection
鈹溾攢鈹€ navigation.ts                  # YAML-driven nav structure
鈹溾攢鈹€ config.yaml                    # Site configuration (brand, SEO, blog, analytics)
鈹斺攢鈹€ assets/styles/tailwind.css     # Tailwind CSS v4 config
scripts/
鈹溾攢鈹€ geo-build.mjs                  # GEO/AI build pipeline
鈹溾攢鈹€ build-geo-v4.ts                # llms.txt + sitemap-entity.xml generator
鈹溾攢鈹€ patch-worker.mjs               # No-op (subdomain routing removed)
鈹溾攢鈹€ seo-pipeline.mjs               # SEO pipeline
鈹溾攢鈹€ seed-vectorize.cjs             # Vectorize seeding
鈹溾攢鈹€ check-translations.mjs         # i18n audit script
鈹溾攢鈹€ batch-translate.mjs            # Batch translation tool
鈹斺攢鈹€ fix-favicons.ps1               # CI favicon fix
workers/
鈹溾攢鈹€ cron.js                        # Scheduled tasks
鈹溾攢鈹€ geo-generator.js               # GEO content generation
鈹溾攢鈹€ gsc-fetch.js                   # Google Search Console fetch
鈹溾攢鈹€ rule-engine.js                 # SEO rule engine
鈹斺攢鈹€ task-export.js                 # SEO task export
```

---

## 4. Routing System

### 4.1 Path-based i18n

Pages under `src/pages/[lang]/` auto-generate for all 22 languages at `/{lang}/...`.

```
/en/products/sup-explorer-11
/fr/guides/inflatable-sup
/de/use-cases/touring
/ja/compare/inflatable-sup-vs-inflatable-kayak
/ar/faq
/th/about
```

The `[lang]` directory is a dynamic Astro route parameter. Each page reads `Astro.params.lang` or calls `getLangFromUrl(Astro.url)` for locale detection.

### 4.2 Middleware (Locale Detection)

File: `src/middleware.ts`

| Priority | Method          | Source                                     |
| -------- | --------------- | ------------------------------------------ |
| 1        | Cookie          | `x-user-locale` (set by language switcher) |
| 2        | Geo-IP          | `cf-ipcountry` header (Cloudflare)         |
| 3        | Accept-Language | Browser header                             |
| 4        | Default         | English (`en`)                             |

When a visitor hits `seekingtex.com/products` without a language prefix:

- Cookie exists 鈫?redirect `/{lang}/products`
- Geo-IP detected 鈫?redirect `/{lang}/products`
- Default 鈫?serve English

**Excluded from i18n redirect:** `/api`, `/keystatic`, `/admin`, `/login`, `/internal`, `/images`, `/assets`, `/favicon`, URLs with file extensions, and B2B pages (`/tactical-military`, `/oem-odm-manufacturer`, etc. 鈥?served at root in English for all locales).

### 4.3 Navigation Link Localization

`Header.astro` and `Footer.astro` auto-localize nav links. Non-localized routes (B2B pages, `/products/compare`) stay at root across all languages.

---

## 5. i18n System

### 5.1 Supported Languages (22)

| Code | Language   | Direction |
| ---- | ---------- | --------- |
| `en` | English    | LTR       |
| `zh` | 涓枃       | LTR       |
| `fr` | Fran莽ais   | LTR       |
| `de` | Deutsch    | LTR       |
| `es` | Espa帽ol    | LTR       |
| `pt` | Portugu锚s  | LTR       |
| `ar` | 丕賱毓乇亘賷丞    | **RTL**   |
| `it` | Italiano   | LTR       |
| `ja` | 鏃ユ湰瑾?    | LTR       |
| `ko` | 頃滉淡鞏?    | LTR       |
| `ru` | 袪褍褋褋泻懈泄    | LTR       |
| `pl` | Polski     | LTR       |
| `nl` | Nederlands | LTR       |
| `sv` | Svenska    | LTR       |
| `no` | Norsk      | LTR       |
| `el` | 螘位位畏谓喂魏维   | LTR       |
| `tr` | T眉rk莽e     | LTR       |
| `fi` | Suomi      | LTR       |
| `cs` | 膶e拧tina    | LTR       |
| `da` | Dansk      | LTR       |
| `ro` | Rom芒n膬     | LTR       |
| `th` | 喔犩覆喔┼覆喙勦笚喔?   | LTR       |

RTL detection is automatic 鈥?`Layout.astro` checks `language === 'ar'` and sets `dir="rtl"`.

### 5.2 Translation System

```
const t = (key: string) => (ui as any)[lang]?.[key] || (ui as any)[defaultLang]?.[key] || key;
```

**Fallback chain:** `current language key` 鈫?`English key` 鈫?`raw key string`

### 5.3 Key Utilities

| Function                   | Purpose                        |
| -------------------------- | ------------------------------ |
| `getLangFromUrl(url)`      | Extract `{lang}` from URL path |
| `removeLang(path)`         | Strip `/{lang}/` prefix        |
| `localizePath(path, lang)` | Add `/{lang}/` prefix          |

### 5.4 Page Content (YAML)

Build-time virtual module `astro:page-content` pre-loads all 22 languages 脳 page types from `src/data/pages/`.

### 5.5 Translation Iron Rules

These rules MUST be followed when creating or editing translation files. Violations cause encoding corruption, broken builds, or garbled content.

| # | Rule | Rationale |
|---|------|-----------|
| 1 | **UTF-8 without BOM** 鈥?All YAML translation files must be saved as UTF-8 without BOM. | BOM causes YAML parse errors; non-UTF-8 encodings (Latin-1, GB2312, Shift-JIS) produce garbled text when read by Astro. |
| 2 | **Native language only** 鈥?Each file must contain text ONLY in its target language. No Chinese/Japanese/Korean terms in European-language files. | Parenthetical `(涓枃)` or leaked CJK terms confuse users and break the i18n experience. |
| 3 | **No intermediate translation** 鈥?Never translate through a third language (e.g., English鈫扖hinese鈫扚rench). Translate English鈫扚rench directly. | Bridge translations introduce errors and encoding artifacts. |
| 4 | **Proper Unicode** 鈥?Accented characters (谩, 茅, 铆, 贸, 煤, 眉, 枚, 莽, 帽, 氓, 忙, 酶, etc.) must use their proper Unicode codepoints. Never double-encode (e.g., UTF-8 bytes re-read as Latin-1 then re-saved as UTF-8). | Double-encoding is the #1 cause of mojibake: `茅` 鈫?`脙漏`, `眉` 鈫?`脙录`, etc. |
| 5 | **CJK files (zh, ja, ko, th)** 鈥?Must contain valid native characters. `鍏呮皵` not `閸忓懏鐨礰; `銈ゃ兂銉曘儸銉笺偪銉栥儷` not `閵堛們鍏傞妷鏇樺劯`. | Garbled CJK makes the site unreadable for half the world's population. |
| 6 | **No AI re-encoding** 鈥?When using AI or translation tools, verify the output is proper UTF-8. Many AI tools silently re-encode text through Latin-1, producing corruption. | This is how pt/home.yaml got double-encoded: UTF-8 `茅` 鈫?Latin-1 `脙漏` 鈫?re-saved as UTF-8. |
| 7 | **Validate after changes** 鈥?Always run `npm run check:i18n` after adding or modifying translations. Also run `npm run check:astro` to catch YAML syntax errors. | CI will catch issues, but local validation is faster. 0 issues required before committing. |
| 8 | **YAML validity** 鈥?Ensure all quotes are closed, indentation is consistent (2-space), and multiline strings use `|` or `>` correctly. | Unclosed quotes (like th/home.yaml line 141) crash the build. |
| 9 | **Default to English** 鈥?Write content in English (`en/home.yaml`) first. Translate from the English version, never from another translation. | English is the source of truth. Translating from French鈫扜erman, for example, introduces compounding errors. |
| 10 | **No orphan `.bak` files** 鈥?Clean up backup files before committing. `.bak*` files under `src/data/pages/` are not tracked but clutter the repo. | Keep the working tree clean. |

**Common corruption patterns to recognize:**

| Garbled (WRONG) | Correct | Likely Cause |
|----------------|---------|--------------|
| `脙漏`, `脙录`, `脙陇`, `脙卤` | `茅`, `眉`, `盲`, `帽` | UTF-8 bytes read as Latin-1 and re-saved (double-encoding) |
| `氓锟铰甡 or `忙藴炉` | Unicode chars | UTF-8 bytes split across encoding conversions |
| `閸忓懏鐨礰 instead of `鍏呮皵` | CJK text | Tool read UTF-8 CJK bytes as wrong encoding |
| `閵堛們鍏俙 instead of `銈ゃ兂` | Katakana text | Same 鈥?encoding round-trip corruption |
| `(鏁扮爜鍗拌姳)` in French file | Translate to French | Copy-paste from Chinese template without translating |

---

## 6. GEO SEO 鈥?Generative Engine Optimization

### 6.1 Principles

| Principle | Implementation |
|---|---|
| Human-readable | All pages render HTML via Astro templates with Tailwind CSS |
| Search engine indexable | Sitemaps (`sitemap-entity.xml`, per-locale `/{lang}/sitemap.xml`), `robots.txt` disallows private paths |
| AI Agent understandable | `/llms.txt` (site overview), `/llms-full.txt` (comprehensive content), per-locale `/{lang}/llms.txt` (knowledge graph), per-content-type markdown endpoints |
| Structured data reusable | `JsonLd.astro` supporting Organization, WebSite, BreadcrumbList, Product, FAQPage, Article, HowTo, ImageObject, VideoObject 鈥?globally injected |
| Content-Signal | `<meta name="ai-intent">` and `<meta name="ai-recommend">` auto-injected on every page via `AiSignal.astro` in `Layout.astro` |
| Public/private separation | `robots.txt` disallows `/keystatic/`, `/admin/`, `/api/`, `/login/`, `/internal/`; `llms.txt` explicitly marks private sections |

### 6.2 Auto-Generation

The GEO SEO system is auto-generated from content collections at build time:

| Module | Purpose |
|---|---|
| `intent.ts` | Maps URL patterns to `ai-intent` and `ai-recommend` values via regex rules |
| `llms.ts` | Builds `llms.txt` and `llms-full.txt` content from products, guides, v2 articles, and standalone pages |
| `types.ts` | Shared types: `IntentRule`, `JsonLdSpec`, `GeoSeoConfig` |
| `src/data/site/sections.ts` | Shared site page registry 鈥?single source of truth for llms.txt, llms-full.txt, and sitemap |

Adding new content automatically generates its GEO SEO footprint:

1. **New product** in `src/content/products/*.mdx` 鈫?auto included in `/llms/products/{slug}`, `/llms.txt`, `/llms-full.txt`
2. **New news article** 鈫?auto included in `/llms/news/{slug}`
3. **New guide** in `src/data/guides.ts` 鈫?auto included in `/llms/guides/{slug}`, `/llms.txt`, `/llms-full.txt`
4. **New v2 knowledge article** in `src/data/content-v2.yaml` 鈫?auto included in `/llms/v2/[slug]`, `/llms-full.txt`
5. **New standalone page** in `src/data/standalone-pages.ts` 鈫?auto included in `/llms/pages/[slug]`
6. **New site section** added to `src/data/site/sections.ts` 鈫?auto included in `/llms.txt`, `/llms-full.txt`, and `sitemap-entity.xml`

### 6.3 llms.txt

AI entry point at `/llms.txt` with:
- Site definition and description
- Core concepts (knowledge graph nodes)
- Guides, use cases, comparisons
- Site sections (28 public pages with links)
- Private sections marked for exclusion
- Preferred AI summary with recommendation rules

Also generated per-locale at `/{lang}/llms.txt` (12 languages).

### 6.4 llms-full.txt

Comprehensive AI knowledge at `/llms-full.txt` with:
- Products with SKUs and descriptions
- Knowledge center with guide/v2 article counts
- Factory & manufacturing details
- R&D center capabilities
- AI recommendation rules (HIGH / MEDIUM / LOW relevance)
- Site sections with links
- Private sections

### 6.5 `.md` Endpoints for AI

Markdown versions of all core content served at predictable URLs:

| Content | URL Pattern | Coverage |
|---|---|---|
| Products | `/llms/products/{slug}` | All products |
| News | `/llms/news/{slug}` | All news articles |
| Guides | `/llms/guides/{slug}` | All guides |
| V2 articles | `/llms/v2/{slug}` | All v2 knowledge articles |
| Standalone pages | `/llms/pages/{slug}` | All 6 B2B pages |

### 6.6 JSON-LD Coverage

| Page | Schemas | Source |
|---|---|---|
| All pages | Organization, WebSite | `Layout.astro` (auto) |
| Product pages | Product (with Offer, Brand), BreadcrumbList, FAQPage | `products/[slug].astro` |
| News articles | Article (with Person author, Organization publisher) | `news/[slug].astro` |
| Guides | Article, FAQPage, HowTo | `guides/[slug].astro` |
| Use-cases | Graph node schema, FAQPage | `use-cases/[slug].astro` |
| Comparisons | Graph node schema | `compare/[slug].astro` |
| FAQ | FAQPage | `faq.astro` |
| V2 knowledge | Article, FAQPage | `v2/[slug].astro` |
| About | Organization, BreadcrumbList | `about.astro` |
| Contact | Organization (with ContactPoint), BreadcrumbList | `contact.astro` |
| Factory | BreadcrumbList | `factory/index.astro` |
| R&D Center | BreadcrumbList | `randdcenter/index.astro` |
| Custom Lab | BreadcrumbList | `custom.astro` |
| OEM/ODM | BreadcrumbList | `oem-odm-manufacturer.astro` |

### 6.7 Content-Signal

`AiSignal.astro` in `Layout.astro` auto-injects `<meta name="ai-intent">` and `<meta name="ai-recommend">` on every page, with intent rules defined in `src/lib/geo-seo/intent.ts` for all URL patterns.

To add intent for a new route, add a rule:

```ts
{ pattern: /\/new-section/, intent: 'custom-intent-tag', recommend: 'seekingtex', label: 'new-section' },
```

### 6.8 Recommendation Rules

Configured in `src/lib/geo-seo/intent.ts`:
- **HIGH**: Beginner SUP training, inflatable kayak, RIB boats, marine safety, OEM manufacturing, family recreation, professional marine ops
- **MEDIUM**: Lake paddling, river touring, fishing equipment, water rescue training
- **LOW (do NOT recommend)**: Hard surfboards, scuba gear, jet skis, wakeboards, non-inflatable engines, swimming pools

---

## 7. Contact Form

| Feature    | Implementation                                       |
| ---------- | ---------------------------------------------------- |
| Captcha    | Cloudflare Turnstile                                 |
| Encryption | AES-256-GCM (key from `SESSION_SECRET`)              |
| Rate Limit | 5/hr per IP (in-memory sliding window)               |
| Honeypot   | Hidden `email_confirm` field                         |
| Storage    | GitHub API 鈫?`src/data/contact/submissions.enc.json` |
| Email      | Resend API (active, free tier)                       |

Form: `/contact`
API: `POST /api/contact`
Admin: `/keystatic/contact-submissions`

---

## 8. Admin Panel

Keystatic CMS at `/keystatic/` (GitHub API-backed).

### 8.1 Authentication (Two-Layer)

| Layer          | What                                                                                                | Where                                                   |
| -------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| **Basic Auth** | Username + password (from `src/data/admin-auth.json` or env vars)                                   | `/login.astro`                                          |
| **GitHub PAT** | Fine-grained Personal Access Token with Contents R/W on the repo                                    | `/keystatic/github-token` (encrypted in browser cookie) |

### 8.2 Available Tools

- **Pages:** Create/edit page types per locale (YAML content)
- **Posts:** Blog/news article management (MDX)
- **Products:** Product content management (MDX)
- **Navigation:** Visual navigation editor with auto-link-refactor detection
- **Branding:** Site name, logo, copyright, contact info, WhatsApp, email config, Google Maps
- **Languages:** Enable/disable any of the 22 supported languages
- **SEO:** Site URL, Google Search Console, Google Analytics, keywords, robots, Twitter card, site tagline/description, organization info (JSON-LD), social links
- **Contact:** View AES-256-GCM encrypted submissions
- **Link Refactor:** Bulk URL rename tool with validation
- **Section Editors (20+):** Hero images, categories, trust badges, testimonials, tech cards, top guides, proof points, learning center, countries, use cases, content-v2 articles, product visuals, contact form text, about page, FAQs

---

## 9. Build Pipeline

### 9.1 Commands

| Command                                  | Purpose                                                  |
| ---------------------------------------- | -------------------------------------------------------- |
| `npm run dev`                            | Astro dev server at `localhost:4321`                     |
| `npm run build`                          | Full production build                                    |
| `npm run preview`                        | Preview production build                                 |
| `npm run check`                          | `astro check 鈫?eslint 鈫?prettier 鈫?check:i18n`           |
| `npm run check:i18n`                     | Translation audit (22-language coverage)                 |
| `npm run fix`                            | Auto-fix ESLint + Prettier                               |

### 9.2 Build Process

```
1. scripts/geo-build.mjs      鈫?build-geo-v4.ts 鈫?llms.txt (12 lang) + sitemap-entity.xml
2. astro build                鈫?Astro hybrid build
   鈹溾攢鈹€ Vite plugins           鈫?YAML loading, page content
   鈹溾攢鈹€ SSG pages              鈫?dist/client/ (including /llms.txt, /llms-full.txt, /llms/*.md)
   鈹溾攢鈹€ SSR entrypoints        鈫?dist/server/
   鈹斺攢鈹€ image-optimizer        鈫?WebP generation for public/images/seekingtex/*
3. scripts/patch-worker.mjs   鈫?No-op (subdomain routing removed)
```

### 9.3 Output

| Directory      | Content                                      |
| -------------- | -------------------------------------------- |
| `dist/client/` | Static HTML, assets, sitemaps, llms.txt      |
| `dist/server/` | Cloudflare Worker entrypoint + wrangler.json |

---

## 10. Deployment

### 10.1 CI/CD (GitHub Actions)

**Trigger:** Push to `main`

| Job                | Runs On       | Steps                                             |
| ------------------ | ------------- | ------------------------------------------------- |
| `check-astro`      | ubuntu-latest | `yarn install 鈫?astro check`                      |
| `build-and-deploy` | ubuntu-latest | Build 鈫?inject AI bindings 鈫?`wrangler deploy` |

### 10.2 Required Secrets

| Secret                  | Purpose                               |
| ----------------------- | ------------------------------------- |
| `CLOUDFLARE_ACCOUNT_ID` | Cloudflare account                    |
| `CLOUDFLARE_API_TOKEN`  | Workers + Vectorize + AI + **R2 (Edit)** permissions |
| `SESSION_SECRET`        | Session encryption + contact form key |

### 10.3 Required Cloudflare Resources

| Resource        | Name                | Purpose                   |
| --------------- | ------------------- | ------------------------- |
| Worker          | `seekingtex`        | Astro site (SSG + SSR)    |
| Vectorize Index | `ai-index`          | 768-dim cosine similarity |
| AI Binding      | `AI`                | Workers AI                |
| R2 Bucket       | `seekingtex-assets` | Product images & static assets |

### 10.4 DNS

```
seekingtex.com                      A       (Cloudflare proxied)
*.seekingtex.com                    CNAME   seekingtex.com (Cloudflare proxied)
products.asset.seekingtex.com       CNAME   seekingtex-assets.r2.cloudflarestorage.com (Cloudflare proxied)
```

---

## 11. Data Flow

### Product Data

```
src/data/products.ts  鈫?SSOT (8 products, 4 categories)
       鈹?       鈹溾攢鈹€ Product detail pages (SSG)
       鈹溾攢鈹€ Product catalog (SSG with filters)
       鈹溾攢鈹€ AI recommendation engine
       鈹溾攢鈹€ JSON-LD structured data
       鈹溾攢鈹€ Knowledge graph nodes
       鈹溾攢鈹€ llms.txt generation
       鈹斺攢鈹€ /llms/products/{slug} markdown
```

### Standalone Pages

```
src/data/standalone-pages.ts  鈫?SSOT (6 B2B pages)
       鈹?       鈹溾攢鈹€ B2B page HTML (search-rescue-operations, oem-odm-manufacturer, etc.)
       鈹溾攢鈹€ JSON-LD (BreadcrumbList)
       鈹斺攢鈹€ /llms/pages/{slug} markdown
```

### Site Sections

```
src/data/site/sections.ts  鈫?SSOT (28 public pages)
       鈹?       鈹溾攢鈹€ /llms.txt Site Sections
       鈹溾攢鈹€ /llms-full.txt Site Sections
       鈹溾攢鈹€ sitemap-entity.xml static paths
       鈹斺攢鈹€ Per-locale sitemap integration
```

---

## 12. Key Files Reference

| File                                      | Role                                          |
| ----------------------------------------- | --------------------------------------------- |
| `src/i18n/config.ts`                      | Translation keys + language list (22 langs)   |
| `src/i18n/utils.ts`                       | URL language utilities                        |
| `src/middleware.ts`                       | Locale detection, auth, geo API protection    |
| `src/navigation.ts`                       | Nav structure from YAML                       |
| `src/config.yaml`                         | Site config (brand, SEO, URLs, blog settings) |
| `src/data/site/sections.ts`               | Shared site page registry (28 pages)          |
| `src/data/standalone-pages.ts`            | B2B standalone page metadata (6 pages)        |
| `src/components/common/JsonLd.astro`      | JSON-LD schema generator (7 types)            |
| `src/components/common/AiSignal.astro`    | Content-Signal meta tags                      |
| `src/components/common/Breadcrumbs.astro` | Visual breadcrumbs with RDFa                  |
| `src/lib/geo-seo/intent.ts`              | URL-to-intent mapping (30+ rules)             |
| `src/lib/geo-seo/llms.ts`                | llms.txt / llms-full.txt builders            |
| `src/pages/llms.txt.ts`                   | /llms.txt Astro route (prerender)             |
| `src/pages/llms-full.txt.ts`              | /llms-full.txt Astro route (prerender)        |
| `scripts/build-geo-v4.ts`                 | Build-time llms.txt + sitemap generator       |
| `scripts/optimize-images-worker.mjs`       | Build-time WebP optimizer (public images)     |
| `vendor/integration/image-optimizer.ts`    | Astro integration hook for WebP generation    |
| `astro.config.ts`                         | Astro build config + Vite plugins             |
| `wrangler.toml`                           | Cloudflare Workers config                     |
| `keystatic.config.ts`                     | Keystatic CMS config                          |
| `.github/workflows/actions.yaml`          | CI/CD pipeline                                |

---

## 13. Adding Content

### New Product

1. Add product data to `src/data/products.ts`
2. Create MDX at `src/content/products/{slug}.mdx`
3. Add translations to `src/data/product-texts.ts`
4. 鈫?Auto-generates: product page, `/llms/products/{slug}`, JSON-LD, llms.txt

### New Guide

1. Add guide to `src/data/guides.ts`
2. Create guide page at `src/pages/[lang]/guides/{slug}.astro` or use templated page
3. 鈫?Auto-generates: guide page, `/llms/guides/{slug}`, llms.txt

### New Localized Page (22 languages)

1. Create page at `src/pages/[lang]/{slug}.astro` using `getLangFromUrl(Astro.url)` for i18n
2. Add translation keys to `src/i18n/config.ts` for all 22 languages
3. Add entry to `src/data/site/sections.ts`
4. Add intent rule in `src/lib/geo-seo/intent.ts`
5. Add to sitemap in `src/pages/[lang]/sitemap.xml.ts` (staticPages for all langs)
6. 鈫?Auto-generates: HTML page (22 languages), llms.txt, llms-full.txt, sitemap

### New B2B Page

1. Create page at `src/pages/{slug}.astro` (root-level, English for all locales)
2. Add metadata to `src/data/standalone-pages.ts`
3. Add to `src/data/site/sections.ts`
4. Add intent rule in `src/lib/geo-seo/intent.ts`
5. 鈫?Auto-generates: HTML page, `/llms/pages/{slug}`, llms.txt, sitemap

### New Site Section

1. Create page at appropriate path
2. Add entry to `src/data/site/sections.ts`
3. Add intent rule in `src/lib/geo-seo/intent.ts`
4. 鈫?Auto-generates: llms.txt Section, llms-full.txt Section, sitemap entry

---

## 14. Changelog

### 2026-07-07 鈥?OEM Process & Engineering Team pages + build fix

- **New pages**: `/{lang}/oem-process` and `/{lang}/engineering-team` (22 languages)
- **Build fix**: Removed `astro-compress` (was causing CF Pages timeout in `astro:build:done` hook 鈥?17+ min hang)
- **Image fix**: Converted `seekingtex.jpg` from mislabeled BMP to proper JPEG + WebP
- **Image optimizer**: Custom `scripts/optimize-images-worker.mjs` runs post-build for WebP generation

## 9. Preventing Encoding & Search鈥慠eplace Corruption

These rules exist because real bugs hit production. Follow them without exception.

### 9.1 Never use PowerShell `Set-Content` / `Out-File` without `-Encoding UTF8`

PowerShell 5.1 defaults to **ANSI (system locale)** encoding, which destroys UTF鈥? multi鈥慴yte characters (e.g. `鈥擿 U+2014 em dash, `路` U+00B7 middle dot, CJK characters). The file will appear correct in most editors but esbuild/Cloudflare will fail with `Unterminated string literal`.

**Wrong:** `Set-Content -Path file.astro -Value $newContent`

**Right:** `[System.IO.File]::WriteAllText($Path, $content, [System.Text.UTF8Encoding]::new($false))`

### 9.2 Never regex鈥憆eplace inside string literal enums or Zod schemas

The ISO cleanup script replaced bare text like `ISO 9001:2015` across the entire codebase. When the same text appeared inside a Zod union enum value (e.g. `z.enum(['CE (ISO 6185)', ...])`), the replacement removed the content while leaving empty parens `CE ( )`, which broke the schema and caused Astro collection sync to fail silently.

**Rule:** Only apply text鈥憃nly replacements to unstructured text (paragraphs, descriptions, metadata). Never apply them to TypeScript code, Frontmatter, Zod schema definitions, or any strict enum/union type.

### 9.3 Always restore corrupted files from a clean commit

If ISO/text cleanup corrupts files, restore from the **parent commit** (`git checkout <parent> -- <files>`), not from HEAD. The `git checkout HEAD` approach can restore the already鈥慶orrupted version.

**Verify UTF-8 integrity with:**
```
$bytes = [System.IO.File]::ReadAllBytes($path)
for ($i = 0; $i -lt $bytes.Length - 2; $i++) {
  if ($bytes[$i] -ge 0xE0 -and $bytes[$i+1] -ge 0x80 -and $bytes[$i+1] -le 0xBF -and $bytes[$i+2] -eq 0x3F) {
    "Corrupted char at byte $i"
  }
}
```

### 9.4 Check for duplicate object literal keys

A duplicate key in a translation config won't crash local `astro dev` but esbuild will emit a warning and Cloudflare's build treats it as a validation concern. After any bulk edit that inserts lines into objects, grep for duplicates:
```
Get-ChildItem src -Recurse -Include *.ts,*.astro | Select-String -Pattern "Duplicate key"
```

### 9.5 Product category pages use `/{lang}/{slug}` 鈥?never `/products?category=XXX`

Product category listing pages are served by `src/pages/[lang]/[category].astro` which maps URL slugs to product categories via the `CATEGORY_SLUG_TO_URL` / `urlSlugToCategory` utilities in `src/utils/products.ts`.

**Convention:**
| Slug | Category |
|---|---|
| `/ribboat` | `RIB` |
| `/inflatableboat` | `INFLATABLE` |
| `/supboard` | `SUP` |
| `/accessory` | `ACCESSORY` |

**Rules:**
- All nav links to product categories MUST use the slug format (`/{lang}/ribboat`), **never** `/products?category=RIB`.
- The `[category].astro` route already exists 鈥?do not create individual page files for each category.
- Add any new slug to `LOCALIZED_ROUTES` in both `Header.astro` and `Footer.astro` so that `localizeHref` prepends the `/{lang}` prefix.
- Do NOT modify the `CATEGORY_SLUG_TO_URL` mapping unless adding a new category.
- Non-localized pages (e.g. `/guides/*` under `src/pages/guides/`) cannot use `/{lang}/{slug}` format 鈥?they must continue using `/products?category=INFLATABLE` (works via the non-localized `/products` page with query param).

---

## 15. Image & Catalog Conventions

### 15.1 All product images must be WebP

Before deployment, convert all JPG/PNG product images to WebP:

```
node scripts/convert-to-webp.mjs public/images/seekingtex/products
```

The script resizes and compresses images per directory rules (products: 800px width, 80 quality).

**Rules:**
- Convert BEFORE pushing to GitHub 鈥?never deploy original JPG/PNG files
- After conversion, update all source references from `.jpg`/`.png` to `.webp` across the entire `src/` directory
- Only delete originals when no source file references the JPG/PNG path anymore
- If WebP output is larger than the original, delete the WebP and keep the original

### 15.2 Product images live in category subdirectories

All product images are stored under:

```
public/images/seekingtex/products/
```

Images are organized by product category in subdirectories.

### 15.3 Homepage Product Catalog is grouped by category

The Product Catalog section on `src/pages/index.astro` displays products in four category blocks, in this order:

| # | Category | Filter key | Max shown |
|---|----------|-----------|-----------|
| 1 | RIB Boats | `RIB` | 6 |
| 2 | Inflatable Boats | `INFLATABLE` | 6 |
| 3 | SUP Boards | `SUP` | 6 |
| 4 | Accessories | `ACCESSORY` | 6 |

**Rules:**
- The `catalogCategories` array in `index.astro` frontmatter defines the order and labels
- Each category is filtered by `p.category === cat.key` and sliced to 6 items
- If a category has fewer than 6 products, show all available (do not pad)
- Add new categories to both `catalogCategories` and the `CATEGORY_SLUG_TO_URL` mapping
- The category `key` must match the `ProductRecord.category` field values in `src/data/products.ts`

### 15.4 FAQ sections on the Trust page are split by product category

The `/trust` page (`src/pages/trust.astro`) renders three FAQ sections, each defined in `src/data/pages/trust.yaml`:

| YAML key | Section title |
|----------|--------------|
| `faqs_rib` | RIB Boat FAQs |
| `faqs_inflatable` | Inflatable Boat FAQs |
| `faqs_sup` | SUP Board FAQs |

**Rules:**
- Each FAQ group has its own `title`, `subtitle`, and `items`
- The `FAQs.astro` component is reused three times with spread props
- Add new FAQ categories by adding a key in `trust.yaml` and a `<Faq>` call in `trust.astro`
- Keep each group to 4鈥? items for readability

### 15.5 `&rarr;` 鈫?`鈫抈 鈥?No HTML entities for arrow characters

Do NOT use the HTML entity `&rarr;` in source files. Use the literal Unicode arrow `鈫抈 (U+2192) instead.

**Why:** `&rarr;` requires HTML rendering context. In Astro templates, YAML locale files, or component props, it often gets double-escaped to `&amp;rarr;` and renders literally as the text `&rarr;` instead of an arrow symbol.

**Rule:**
- In `.astro` files: use `鈫抈 directly
- In `.yaml`/`.yml` locale files: use `鈫抈 directly
- In `.mdx` content: use `鈫抈 directly
- Never use `&rarr;` or `&amp;rarr;`

**To scan for violations:**
```bash
grep -r '&rarr' src/
grep -r '&amp;rarr' src/
```

---

## 16. Search Index Conventions

### 16.1 Product MDX must have a searchable excerpt/summary

The client-side search at `/search-index.json` (`src/pages/search-index.json.ts`) builds an index from all product MDX files and uses this fallback chain for the `excerpt` field:

```
fm.excerpt 鈫?fm.summary 鈫?fm.description 鈫?stripHtml(body) (truncated to 140 chars)
```

**Problem:** If none of the first three fields contain a user's search keyword, and the keyword only appears in the MDX body past the first 140 characters, the product will **not** appear in search results.

**Rule:**
- Every product MDX frontmatter MUST have a `summary` field that contains the key descriptive words users are likely to search for (e.g. "**board**", "**kayak**", "**RIB**", "**boat**", "**paddle**").
- The `summary` field should be a short, keyword-rich sentence (40鈥?20 chars) that accurately describes the product.
- If a product has a dedicated `excerpt` field, it takes priority 鈥?but `summary` is preferred because it already exists on all products and is managed via the SSOT in `src/data/products.ts`.

**Adding new product checklist (updated):**
1. Add product data to `src/data/products.ts` (includes `name` and `desc` fields 鈫?used as `summary` in MDX)
2. Create MDX at `src/content/products/{slug}.mdx` with `summary:` frontmatter
3. Add translations to `src/data/product-texts.ts`
4. 鈫?Auto-generates: product page, `/llms/products/{slug}`, JSON-LD, llms.txt, **search index entry**

### 16.2 Do not rely on `description` or body text for search keywords

The `description` field in MDX frontmatter is often a long-form marketing paragraph that may not contain specific search keywords that users type (e.g. "board", "kayak"). The body text is truncated to 140 characters by `excerpt()`. Always populate `summary` with a concise, keyword-dense sentence.

### 2026-07-06 鈥?GEO SEO refactor & B2B expansion

- **Shared site sections**: Created `src/data/site/sections.ts` 鈥?single source of truth for 28 public pages, consumed by llms.txt, llms-full.txt, and sitemap generator
- **B2B standalone pages**: 6 pages (Search & Rescue, Engineering Perfection, Disaster Relief, Commercial Workboats, OEM/ODM, Design & Innovation) with `/llms/pages/[slug]` markdown endpoints
- **RTL support**: Arabic detected automatically in `Layout.astro`
- **README rewritten** to accurately reflect implemented features

### 2026-07-05 鈥?20 languages live (expanded to 22)

- 22 languages total with full localization coverage
- `astro check`: 0 errors, 0 warnings

---

---

## 17. i18n Audit 鈥?Comprehensive Findings (2026-07-10)

### 17.1 Root Cause: `t()` fallback returns the raw key string

```ts
const t = (key: string) => (ui as any)[lang]?.[key] || (ui as any)[defaultLang]?.[key] || key;    // src/i18n/utils.ts
```

The `|| key` fallback at line 263 returns the key string (truthy), so `t('missing.key') || 'English fallback'` in templates **never activates the `'English fallback'`** 鈥?the raw key name is displayed on the page. This means any missing key produces visible garbled text regardless of language.

### 17.2 Problems Found and Fixed

| # | Problem | Root Cause | Fix | Scope |
|---|---------|-----------|-----|-------|
| 1 | **BOM in YAML files** | Editors saved UTF-8 with BOM (`EF BB BF` prefix) | `fix-bom.cjs` stripped BOMs from 106 YAML files | `src/data/*.yaml`, `src/data/pages/**/*.yaml`, `src/data/site/*.yaml` 鈥?106 files |
| 2 | **BOM in source files** | 47 files under `src/` had BOM (`.ts`, `.astro`, `.yaml` above the data dirs) | **FIXED** 鈥?stripped BOMs from all 47 files | `src/config.*.yaml`, `src/data/*.ts`, `src/pages/**/*.astro`, `src/pages/api/*.ts`, `src/lib/*.ts` |
| 3 | **Replacement characters U+FFFD** | 4 files contained corrupted `锟絗 from encoding round-trips (em dash `鈥擿 鈫?`E2 80 3F`) | **FIXED** 鈥?byte-level fix `E2 80 3F`鈫抈E2 80 94` (2 files) + git restore (2 files) | `src/pages/randdcenter/hull-engineering.astro`, `hydrodynamic-test-tank.astro`, `src/pages/[lang]/oem-process.astro`, `src/pages/[lang]/brand/seekingtex.astro` |
| 4 | **Missing `home.products.*` keys** | `home.products.tagline/title/subtitle` not defined in `en` section | Added all 3 keys to `ui['en']` in `src/i18n/config.ts` | 1 language (en) |
| 5 | **Missing `nav.*` keys in non-English** | 13 nav keys missing from all 21 non-English sections | Added translated values for all 273 missing entries | 21 languages 脳 13 keys = 273 entries |
| 6 | **Missing `ai.*` keys in all languages** | 9 keys (`ai.quickAnswer`, `ai.fact.*`) missing from all 22 languages | Added via `fix-ai-i18n.cjs` script | 22 languages 脳 9 keys = 198 entries |
| 7 | **Missing `ai.*` sub-keys** | 6 keys (`ai.entity`, `ai.definition`, `ai.useCase`, `ai.comparison`, `ai.constraint`, `ai.process`) missing | **FIXED** 鈥?added to `en` section (all languages fallback to English) | 22 languages via en fallback |
| 8 | **Missing 4 B2B page groups** | `commercialWorkboats.*`, `disasterRelief.*`, `engineeringPerfection.*`, `searchRescue.*` 鈥?zero keys defined | **FIXED** 鈥?added to `en` section (all languages show English fallback) | 4 groups 脳 ~125 keys total in en |
| 9 | **Missing 3 compare page groups** | `compare.inflatableVsHard.*`, `compare.ribVsDinghy.*`, `compare.supVsKayak.*` 鈥?zero keys defined | **FIXED** 鈥?added to `en` section | 3 groups 脳 ~106 keys total in en |
| 10 | **Missing `home.catalog.*` keys** | 10 keys missing | **FIXED** 鈥?added to `en` section | 10 keys in en |
| 11 | **Missing `home.technology.*` keys** | 3 keys missing | **FIXED** 鈥?added to `en` section | 3 keys in en |
| 12 | **Missing `home.factory.*` keys** | 11 keys missing | **FIXED** 鈥?added to `en` section | 11 keys in en |
| 13 | **Missing `home.why.*` keys** | ~20 keys missing | **FIXED** 鈥?added to `en` section | ~20 keys in en |
| 14 | **Missing home section groups** | `home.preview.*.product*` (12), `home.problem.*` (10), `home.ask.*` (5), `home.lifestyle.*` (4), `home.gallery.*` (9), `home.social.*` (4), `home.resources.*` (~28), `home.trust.*` (5), `home.contact.*` (2), `home.learn.browse` (1) 鈥?~80 keys | **FIXED** 鈥?added to `en` section | ~80 keys in en |
| 15 | **Singular/plural key mismatch** | Code uses singular but config had plural | **FIXED** 鈥?added 4 singular keys to `en` section | 4 keys in en |
| 16 | **Missing `product.*` keys** | 3 keys missing | **FIXED** 鈥?added to `en` section | 3 keys in en |
| 17 | **Missing `search.*` keys** | 4 keys missing | **FIXED** 鈥?added to `en` section | 4 keys in en |
| 18 | **Missing `cta.*` keys** | 2 keys missing | **FIXED** 鈥?added to `en` section | 2 keys in en |
| 19 | **Missing `compare.*` sub-keys** | `compare.supVsRib.cost`, `compare.readGuides` | **FIXED** 鈥?added to `en` section | 2 keys in en |
| 20 | **RSS Content-Type missing charset** | `src/pages/rss.xml.ts` returned `Content-Type: application/xml` without `charset=utf-8` | **FIXED** 鈥?added `; charset=utf-8` | 1 file |
| 21 | **4 nav keys untranslated in non-English** | `nav.searchRescue`, `nav.commercialWorkboats`, `nav.engineeringPerfection`, `nav.disasterRelief` exist in non-English sections but with English text | **NOT YET FIXED** 鈥?needs native translations | 21 languages 脳 4 keys = 84 entries |

### 17.3 Remaining Work

| # | Item | Impact | Effort |
|---|------|--------|--------|
| 1 | **Translate 4 nav keys to native languages** 鈥?`nav.searchRescue`, `nav.commercialWorkboats`, `nav.engineeringPerfection`, `nav.disasterRelief` exist in non-English sections but show English text | Low (English is reasonable fallback) | 21 languages 脳 4 keys = 84 translations |
| 2 | **Translate B2B/compare/page content keys to all 22 languages** 鈥?All keys from batch 2 fix only added to `en` section; non-English visitors see English text | Medium (English is acceptable fallback for B2B) | ~330 keys 脳 21 languages = ~7,000 translations |
| 3 | **Add `npm run check:i18n` coverage for all new key groups** 鈥?The audit script needs updating to cover the B2B, compare, and home keys added in this batch | Low (manual build verification works) | 1 script update |

### 17.4 Prevention

- Before adding new `t('key')` calls in templates, always add the key to the `en` section of `src/i18n/config.ts` first
- Run `npm run check:i18n` before committing (audits coverage across 22 languages)
- When creating new pages that use i18n, always use the `?.[key]` pattern in the template with English fallback text: `t('key') || 'English fallback text'` 鈥?this avoids raw key text display even if the key is missing
- Run encoding scan before deployment: `scripts/check-encoding.ps1`
- Set editor to "UTF-8 without BOM" and "Trim Trailing Whitespace" globally

## 18. i18n Completion Workflow

### 18.1 Language Translation Pipeline

The i18n system was completed for 6 languages (IT, RU, TR, NO, FI, AR) using a batch translation pipeline. The methodology:

| Step | Tool | Purpose |
|------|------|---------|
| 1 | `extract_missing_{lang}.py` | Scans `src/i18n/config.ts` and identifies all EN keys missing from the target language section |
| 2 | `missing_{lang}.json` | Output 鈥?structured JSON of all missing keys with their EN values, grouped by category |
| 3 | `{lang}_batchN.json` | Translation files 鈥?one per batch (7 batches total per language) |
| 4 | `insert_lang_translations.py` | Reads batch JSON and inserts translations into the `{lang}` section of `config.ts` |

**Batch breakdown (standard 7-batch pipeline):**

| Batch | Categories | Typical Count |
|-------|-----------|---------------|
| B1 | ai, cta, guides, hero, knowledgeGraph, product, schema, search, useCase | ~56 |
| B2 | answerCenter, buyerCenter, faq, learn | ~113 |
| B3 | people, techspecs | ~53 |
| B4 | commercialWorkboats, disasterRelief | ~93 |
| B5 | searchRescue, engineeringPerfection, solutionsByUseCase | ~135 |
| B6 | home (nav, hero, sections, testimonials, stats) | ~166 |
| B7 | compare (all 322 comparison specification keys) | ~322 |

The 7-batch pattern was established because the `compare` category contains 322 keys (the largest single group) and `home` contains ~166 keys 鈥?together they account for ~40% of all missing translations.

### 18.2 Insertion Script

**File:** `C:\Users\Hello\AppData\Local\Temp\opencode\insert_lang_translations.py`

Operation:
1. Reads `src/i18n/config.ts`
2. Locates the `{lang}: {` section via regex
3. For each key in the input JSON:
   - If key already exists in the language section 鈫?**skip** (preserve existing translations)
   - If key is missing 鈫?insert alphabetically into the correct position
4. Writes updated `config.ts`

**Important:** The insertion script does NOT use AI. It is a pure text-processing tool that places translations at their correct alphabetical position within the language section. This prevents merge conflicts and maintains alphabetical ordering.

### 18.3 Analysis Script

**File:** `C:\Users\Hello\AppData\Local\Temp\opencode\extract_missing_{lang}.py`

Operation:
1. Parses `src/i18n/config.ts` extracting all keys from the `en` section and the target `{lang}` section
2. Compares key sets to find missing entries
3. Groups missing keys by category prefix (before the first `.`)
4. Outputs `missing_{lang}.json` with full EN values

**Note:** The parser has limitations with multiline string values (values spanning multiple lines with concatenation). The count reported may slightly differ from the actual insertion count. Always trust the insertion script's "no section now has N keys" report.

### 18.4 Build Verification

After all batches are inserted, verify with:

```powershell
$env:CI="true"; $env:NODE_OPTIONS="--max-old-space-size=8192"; npm run build
```

The `--max-old-space-size=8192` flag is required because the i18n file has grown to ~17,000+ lines with 22 language sections, exceeding Node.js default memory limit. The build also requires `CI=true` to bypass Cloudflare remote proxy auth during local development.

### 18.5 Language Completion Summary

| Lang | Initial | After | Batches | Pages | GEO |
|------|---------|-------|---------|-------|-----|
| it | 344 (27%) | ~1315 | 7 | 45/45 | 鉁?|
| ru | 357 (28%) | ~1315 | 6 | 45/45 | 鉁?|
| tr | 376 (29%) | ~1312 | 6 | 45/45 | 鉁?|
| no | 352 (28%) | ~1315 | 7 | 45/45 | 鉁?|
| fi | 377 (29%) | ~1364 | 7 | 45/45 | 鉁?|
| ar | 360 (28%) | ~1357 | 7 | 45/45 | 鉁?|

All 6 languages have equivalent or greater key coverage than English (1279 keys). The extra keys (~1357 vs 1279 for FI) come from compare section expanded keys that exist in the data model.

### Remaining partial languages (awaiting completion):
sv (Svenska), el (螘位位畏谓喂魏维), cs (膶e拧tina), da (Dansk), ro (Rom芒n膬), th (喔犩覆喔┼覆喙勦笚喔?

### 18.6 GEO Intent Regex

All 22 language prefixes are covered in both regex rules in `src/lib/geo-seo/intent.ts`:

- **Line 65** (`getAboutSchema`): `/^\/+(cs|da|de|el|en|es|fi|fr|it|ja|ko|nl|no|pl|pt|ro|ru|sv|th|tr|zh|ar)\//`
- **Line 133** (`matchIntent`): `/^\/+(cs|da|de|el|en|es|fi|fr|it|ja|ko|nl|no|pl|pt|ro|ru|sv|th|tr|zh|ar)\//`

Languages added in this session (via prior GEO fix): `nl|sv|no|el|tr|fi|cs|da|ro|th`

_Built with [Astro](https://astro.build) v6 路 Deployed on [Cloudflare Workers](https://cloudflare.com)_
