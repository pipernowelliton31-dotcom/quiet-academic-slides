# Design DNA: the quiet academic aesthetic

This is an *interpretation of the provided final seven-slide PowerPoint*, not a claim that the design rules are universally correct. Learn the underlying choices and adapt them to the topic. The original topic was text-to-image diffusion. New decks must not inherit its subject matter automatically.

## 1. The central choice: restraint with information density

**Less is more** means removing redundant explanatory prose, not deleting essential scientific semantics. A slide can contain several formulas when they are the *actual* object of explanation; it must not become a decorative collage. Favor meaningful structural relationships over cards, drop shadows, callout badges, emojis, or stock icons. Each slide has one primary answer, one spatial hierarchy, and ideally one dominant focus.

**Second principle: elegant does not mean vague.** The original deck's strongest pages treat an algebraic equality, a predicted quantity, or a repeated state as a geometrically meaningful object. The source PPTX went through several revisions specifically because missing or malformed formulas and arrows were unacceptable. Recreate this editorial rigor.

**Third principle: same language, different sentences.** Pages share background, typography, ink, accent colors, and geometric restraint. They do not share an identical card template. A dark, saturated interstitial will usually violate this style without a compelling user-requested reason.

## 2. Palette from editable source

| Token | Hex | Role |
|---|---|---|
| Paper | `#FAF8F3` | Dominant warm ivory canvas. Never generic pure-white unless content demands it. |
| Ink | `#19392F` | Main text, equation strokes, prominent headers. |
| Sage | `#728D73` | Source/known state, numbered progress, accepted/green input paths. |
| Powder blue | `#88AABD` | Predicted / inferred counterpart, secondary information flow. |
| Muted copy | `#75847E` | Captions and noncritical metadata. |
| Dividers | `#C6CECA` | Fine guides, separation rules, light arrows. |
| Faint blue | `#E9F0F3` | Small method/data containers only when needed. |
| Faint green | `#EAF0E7` | Secondary methods, final decoding, or gentle contrast. |
| Matrix blue | `#CDDDDF` / `#B5CCD4` | Continuous matrix / sample variation. |
| Matrix sage | `#A5BAA0` / `#C3D1BB` | Continuous matrix / sample variation. |

Accent logic: sage and blue have semantic roles within a page, not merely decoration. Optional muted terracotta for one high-priority contrast, never as a whole-page theme switch. Avoid highly saturated red, neon cyan, electric purple, and pure-black screens.

## 3. Typography

- Display: **Palatino Linotype** (regular); its old-style proportions give the deck literary, editorial authority. If missing, choose a **static** old-style serif with similar stress and proportions (TeX Gyre Pagella, Book Antiqua, or a verified alternative). Do not randomly replace with a generic modern sans.
- Body, functional labels and captions: **Lato Regular / Medium** from static faces. This is not the default Segoe UI look, nor a variable Inter/Noto mishmash. If Lato missing, choose a visually close verified static sans and render-check every page.
- Special prompt or quotation line: a restrained italic serif, either Palatino Italic or Cambria Italic, only if a prompt/quotation needs rhetorical separation.
- Equations: properly typeset mathematical notation in vector form when possible; true fractions and aligned operators, not cramped pseudo-math or stretched screenshots. Use mathematics as meaning, not flourish.
- Original example sizes: cover display 48 pt, section titles 29 pt, agenda title 37 pt, agenda question 24 pt, agenda numerals 34 pt; small section index 11.4 pt; recurring body labels 12–17 pt. These are grounded measurements, not universal maxima. Choose size from actual projection distance, length, and available space.
- Sentence case is preferred for editorial headlines. Compact uppercase Lato is suitable for micro labels: `ADD NOISE`, `PREDICT`, `RGB IMAGE`.
- Avoid font-face roulette. Never silently introduce variable fonts that render inconsistently in Office and LibreOffice. Do not embed or share proprietary font files.

## 4. Spatial system

- Canvas: 16:9, 13.333 x 7.5 inches.
- Typical outer horizontal margin: about 0.70 inches, with 0.58-inch left indices on section pages.
- Typical section header: index around x=0.58, thin rule x~0.98, serif title x~1.63 at top 0.25–0.31; page number near x=12.39 and y=7.12.
- More important than exact coordinates: stable alignments, generous upper breathing room, and deliberate balance of figure-to-type.
- Ink hierarchy: heading > scientific operator/visual > short functional label > muted annotation. Avoid stacking four tiers of similar small body copy.
- Dividers: hairlines in `#C6CECA`, used only to show grouping or comparative boundary; line weight around 0.6–1.2 pt depending on projection.
- Geometry: square or lightly rounded corners when semantic. Do not reflexively wrap every diagram node in a pill/card; many elements can sit on open paper.
- Thin directional arrows distinguish movement without competing with mathematical symbols.

## 5. Image tone and treatment

Reference art shows delicate watercolor / botanical imagery, slightly grainy paper, human-scaled scenes, low saturation, and imperfect natural forms. The real transferable rule is **calm, image-led human warmth in an otherwise mathematical deck**, not a requirement to paint every subject as a cartoon beach. For another topic, select authentic, high-resolution images in a comparable low-chroma editorial register, or use the actual research imagery when it matters more than decoration.

- Cover uses a large dominant image with negative space for typography; closing returns to a related visual motif.
- Do not crop people, key structures, labels, the subject's face, or defining context simply to fill a rectangle.
- Keep source image aspect unless an intentional crop is visually checked.
- Prefer no decorative stock shots when the slide's evidence is a figure, chart, trace, image sample, or derivation.
- Authored technical visuals remain visually consistent with paintings because they share paper, ink, line weight, and color discipline.

## 6. Anti-patterns directly derived from the iteration history

| Failure | Remedy |
|---|---|
| Mixed Inter/Noto variable faces caused visibly different glyphs and garbling | Static, tested title and body fonts; render every slide after substitution. |
| Formula bitmap stretched horizontally and vertically | Preserve aspect ratio, increase genuine canvas space, generate vector notation. |
| A full-page dark forest section broke the visual continuity | Retain paper background; create emphasis with space, contrast and geometry, not sudden darkness. |
| `z_t` update arrows pointed to the wrong stage | Draw the actual information topology; review node edges before typography. |
| Input image cropped away a defining object | Use `contain` or carefully inspected crop, not automatic fill. |
| Inaccurate microcopy (`Predict known noise`) obscured training logic | Label both adding noise and comparing model estimates. |
| Redundant subtitles crowded every page | Remove text that only repeats the visible figure. |
| Every page reused the same card grid | Use page-job-specific composition families. |
| Decorative punctuation, especially the middle dot as a prose divider | Use intentional spacing and rules instead. |

## 7. Adaptation rule

If the topic is a strategy review, still use the ivory/serif/sans/low-saturation grammar, but replace a diffusion trajectory with a decision path, a cross-attention matrix with a segment/feature relationship matrix, or an experimental sample grid with actual empirical evidence. **Preserve the structure's function, never its original topic.**
