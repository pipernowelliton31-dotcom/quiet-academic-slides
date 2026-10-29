# Design DNA: Quiet Academic Slides

## Philosophy
Less is more, but never less reasoning. The source design is a seven-slide research explanation, not a compulsory template. Use restrained editorial layout to convey mathematics, evidence, sequence and intellectual curiosity. Preserve technical accuracy before decoration.

## Palette
| Role | Hex | Usage |
|---|---|---|
| Paper | `#FAF8F3` | Default warm-ivory canvas |
| Ink | `#19392F` | Headings, formulas and primary labels |
| Sage | `#728D73` | Known quantities, stable source path |
| Powder blue | `#88AABD` | Predictions and secondary information |
| Muted text | `#75847E` | Metadata and noncritical labels |
| Dividers | `#C6CECA` | Fine grouping rules and arrows |
| Faint blue | `#E9F0F3` | Small technical containers |
| Faint sage | `#EAF0E7` | Supporting comparisons |
| Matrix blue | `#CDDDDF` | Matrix or heatmap tones |
| Matrix sage | `#A5BAA0` | Matrix or heatmap tones |
| Terracotta | `#C96958` | Rare semantic contrast, never a background |

Accents must signal semantic relationships. Do not make arbitrary color choices for variety.

## Typography
- **Headings:** Palatino Linotype Regular, or verified static old-style serif fallback (TeX Gyre Pagella, Book Antiqua).
- **Body:** Lato static Regular/Medium. Avoid variable Inter and Noto Serif Display versions that caused rendering failure.
- **Prompts / quotations:** Cambria Italic or Palatino Italic when meaningfully differentiated.
- **Equations:** actual mathematical typesetting, preferably proportional vector notation. Keep radical sizes, superscripts, bars and fractions intact.
- Starting sizes from the exemplar: cover 48 pt, section 29 pt, agenda title 37 pt, agenda question 24 pt, agenda numbers 34 pt, micro labels 11–14 pt. Adjust for actual projection distance.
- Avoid all font binaries in distributed assets.

## Layout
16:9 canvas (13⅓ × 7.5 in), typical outer margin 0.7 in. Section number around x=0.58, fine rule around x=0.98, section heading around x=1.63 and top y=0.3. Preserve common baselines and column centers across related items.

Employ open-paper composition, generous whitespace, thin lines, native PowerPoint diagrams and consistent color meanings. Avoid card-grid monoculture and unrelated full-slide dark switches.

## Imagery
Select source-relevant high-resolution pictures and real research illustrations. Prefer showing a complete subject at meaningful aspect ratios. Do not add stock decoration or crop away important content. Visuals must serve hooks, comparisons, evidence or conclusions.

## Scientific polish
Do not stretch image-based equations. Align formulas near the corresponding operator. Check flow-chart arrows against a written source–transformation–destination table. Show actual research data when asserting empirical behavior; schematic visualizations must be clearly distinguishable. Use minimal labels to avoid overexplaining a diagram.

## Publication gate
Export editable PPTX; render every slide; inspect 100% scale formula glyphs, image crops and word wrapping; check fonts and boundaries with the audit script; repair and repeat. Never claim pixel-level verification based on XML inspection alone.

## Design signature
A recognizable Quiet Academic deck has serene paper, dark-green mathematics, elegant serif editorial titles, quiet sans-serif annotations, purposeful technical flow, visually varied pages and a coherent narrative. It does not require watercolor, a three-question agenda or diffusion-model content.
