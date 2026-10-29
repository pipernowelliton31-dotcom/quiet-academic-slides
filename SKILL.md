---
name: quiet-academic-slides
description: Create or redesign editable PowerPoint presentations with a restrained, elegant, research-led editorial aesthetic derived from the user's seven-slide From Noise to Image presentation. Use for academic talks, scientific explanations, thesis/research presentations, research figures adapted to slides, data narratives, methods, mechanisms, or polished executive/technical slide decks where users ask for less-is-more design, Palatino-style serif headings, static Lato sans-serif text, warm ivory and forest-green palette, mathematical accuracy, high-quality imagery, and purposeful diagrams. Supports Chinese or English source content, outlines, manuscripts, PPTX, or rough sketches. Do not use this skill merely to summarize slides without creating or redesigning a deck.
---

# Quiet Academic Slides

Make scholarly slides that feel calm and exact. The inherited design philosophy is **less is more, but never less reasoning**. Treat layout, whitespace, type, arrows, formulas, and photographs as carriers of meaning. The visual system must survive a different topic without cloning the original deck's research content or slide sequence.

## Primary resources

- `references/design-dna.md` — exact tokens, typography, emotional register, editorial restraint; read every time.
- `references/layout-grammar.md` — seven archetypes plus additional adaptable compositions; read every time.
- `references/scientific-visuals.md` — figures, equations, trajectories, diagrams, image handling; read for technical/scientific decks.
- `references/story-and-qa.md` — narrative design, quality gates, render/inspection loop; read every time.
- `references/reference-gallery.md` — how to study reference pages without overfitting; read when matching a specific composition.
- `assets/style-tokens.json` — machine-readable palette, typography, ratios, and spacing. Reference source of truth.
- `assets/reference-pages/reference-01.jpg` through `reference-07.jpg` — anonymized visual references. Read selectively based on required page job; they are not slides to insert verbatim.
- `assets/quiet-academic-starter.pptx` — an editable, generic layout starter made of native PowerPoint elements. Optional structural aid, not a fixed template.
- `scripts/build_starter.js` — reproducible starter generation, when Node/PptxGenJS are available.
- `scripts/audit_deck.py` — machine checks for fonts, overflow, suspicious distortions, and low-legibility text. Run after every substantial export.

## Working contract

**Inputs**: a new topic, outline, notes, slides, paper, technical explanation, or reference visuals; preferred audience and page/time budget when supplied. Infer reasonable defaults from a sufficiently specific request; do not repeat questions already answered.

**Output**: a structurally coherent **editable `.pptx`**. Include PDF only when requested. Offer concise speaker notes only when part of the task; do not turn the actual slide into a script. For user-supplied figures, preserve factual labels and provenance. No connector is required by this skill; use the presentation/slide-building tools actually available.

**Do not** substitute a sequence of flattened screenshots for an editable deck. Rasterize individual artworks when appropriate, but text, lines, matrices, boxes, chart annotations, and arrows should remain native/editable whenever practical. Equations may be vector SVG/MathML or native math; preserve aspect ratio and sharpness.

## Execution workflow

1. **Read and inventory.** Determine audience, purpose, oral vs self-reading presentation, thesis, claims, data, visual assets, and constraints. Separate source facts from illustrative sketches. Preserve user-authored images where authorized; do not pretend they are experimentally measured or AI-generated if unverified.
2. **Find the story.** Write a one-sentence audience takeaway and a slide-by-slide roster: each page's *job*, key evidence or mathematical relationship, and its visual composition. Reuse ideas, not the original research subject. Prefer a compelling question or visual contrast, then progression, then a resonant closing.
3. **Select distinct page compositions.** Choose from `references/layout-grammar.md` by information topology. Do not deploy uniform cards on every page. At a glance, the seven-slide reference uses cover contrast, three-question progress, symmetric process comparison, sequential sampling, text-image matrix, applied case, and visual return.
4. **Freeze design tokens.** Use `assets/style-tokens.json`; choose a restrained subset of accents. Do not silently substitute fonts with uncertain variable faces. On systems without Palatino Linotype use a visually similar *static* old-style serif and render-verify; use regular static Lato for body, or a proven static humanist/geometric sans if missing. Do not bundle font files.
5. **Author deliberately.** Use PptxGenJS and helpers where available (preferred), or the installed official Slides capability. Keep native edits. Use exact colors, consistent margins and baselines, aligned reading order, and adequate projection contrast. Put equations next to the specific operation they explain.
6. **Preserve topology.** Arrows must express source, transformation, and destination; any loop must reconnect to the correct state. Separate training from inference, input from output, and illustrative from measured data. For a scientific deck, use `references/scientific-visuals.md` as a mandatory technical gate.
7. **Render every slide.** Inspect at full size, not just thumbnails. Recheck cover, body equations, any complex multi-arrow slide, and end slide. Run `scripts/audit_deck.py FILE.pptx` and the available slide overflow test. Resolve text collisions, missing glyphs, formula deformation, cut-off subjects, off-palette elements, and inconsistent styles. Do not announce quality assurance unless executed.
8. **Deliver the finished PPTX.** Link only files confirmed to exist. In the reply, mention only meaningful design decisions and any genuine outstanding limitation, not ceremonial progress claims.

## Style rules that must survive every topic

- **Less is more**: one conceptual job per slide; captions only if they disambiguate data. Delete explanatory noise before shrinking the font.
- **Editorial but rigorous**: an elegant serif for display; static sans-serif for functional labels; restrained small caps; mathematical notation rendered with true proportional scaling.
- **One light design language**: warm-ivory canvas by default, deep forest ink, muted sage + powder blue. Do not surprise the audience with an unrelated full-page dark green or candy-colored slide.
- **Graphical causality**: structure teaches. A matrix explains cross-relationships; a progression shows time; a split shows contrasts; a boundary signals separation.
- **Image integrity**: source high-resolution relevant imagery; preserve full subject, intentional crop, realistic aspect. A decorative image must not displace key evidence.
- **No gratuitous doodles or unmotivated icons.** No random supplementary phrases, fake statistics, made-up charts, unnecessary defensive disclaimers, or footnotes on the visible slide.
- **No middle dot `·` as prose separator.** Use paragraph spacing, hierarchy, or a thin rule instead.
- **Do not duplicate the exact reference deck's topic, personal details, research images, or text** when producing a new topic. Its assets illustrate *style*, not a content library.

## Deliverable readiness checklist

A deck is not ready until: (a) fonts are legible with no substitutions causing gibberish; (b) all formulas remain readable and undistorted; (c) every arrow/curve has scientific meaning; (d) pages share one visual system while using varied compositions; (e) no intended subject is unintentionally cropped; (f) normal projected viewing supports the main message; (g) render + image inspection have actually been performed; and (h) the output exists and can open.
