# Quiet Academic Slides

**Elegant, minimal academic presentations where structure speaks louder than decoration.**

An AI presentation skill distilled from a seven-slide research talk, designed for mathematically accurate, highly legible and visually restrained PowerPoint presentations. Its core principle: **Less is more, but never less reasoning.**

## Design language

- Warm ivory paper `#FAF8F3` and deep forest ink `#19392F`
- Muted sage `#728D73` and powder blue `#88AABD` for semantic distinction
- Palatino Linotype serif headlines and **static** Lato body typography
- Editorial whitespace, precise grid alignment, restrained labels
- Mathematical formulas rendered proportionally without distortion
- Arrows, trajectories and matrices represent actual conceptual relationships
- Distinct compositions rather than repeating the same cards on every slide

## Use

Install as a ChatGPT Skill by importing its complete package. Then ask:

> Create a ten-slide research presentation about my paper using Quiet Academic Slides. Keep formulas mathematically accurate, illustrations relevant, slide text concise, and PowerPoint objects editable.

To redesign existing work, provide your PowerPoint or manuscript and request the same visual language. Read [SKILL.md](SKILL.md) for the execution workflow, [design DNA](references/design-dna.md) for the full tokens and [layout grammar](references/layout-grammar.md) for semantic slide archetypes.

## Repository structure

```text
SKILL.md
agents/openai.yaml
assets/style-tokens.json
references/
  design-dna.md
  layout-grammar.md
  scientific-visuals.md
  story-and-qa.md
  reference-gallery.md
  usage-examples.md
scripts/
  build_starter.js
  audit_deck.py
assets/
  quiet-academic-starter.pptx
  reference-pages/
```

[Download the complete Skill ZIP](skill.zip), [editable starter deck](assets/quiet-academic-starter.pptx), and [visual reference sheet](assets/reference-pages/contact-sheet.jpg) directly from this repository. The source design intentionally avoids bundling or redistributing font binaries.

## Visual workflow

Plan the scientific story → choose a composition by its information topology → apply typography and color semantics → author editable slides → render **every** page → audit fonts, cropping, equations and information flow → iterate.

No pseudo-scientific decoration. No variable-font gibberish. No stretched equations. No unmotivated dark slide. No redundant captions.

## Attribution

Design direction adapted from the user's original **From Noise to Image: How Diffusion Models Work** presentation. Reference artwork and empirical illustrations remain subject to their original rights; use them as design studies rather than reusable stock assets.
