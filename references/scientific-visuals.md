# Scientific and mathematical visual grammar

Apply to science, engineering, research, data, or any deck with formulas or methodological claims. Technical meaning outranks aesthetic similarity.

## Equations

- Render mathematical notation using a reliable native equation editor or LaTeX → SVG/vector export. Never stretch a raster equation separately in x/y; check the aspect ratio and every radical, fraction, subscript, bar, exponent, angle bracket, and Greek letter at full size.
- Use dark forest ink for math; color one target/input or predicted counterpart if it carries meaning. Never color symbols randomly.
- Define every introduced variable either by a short inline label, a nearby legend, or speech notes. Do not make slides into a dictionary.
- A slide typically needs one anchor equation and at most one supporting relation; multiple are allowed on a genuinely mathematical slide when aligned and grouped by a real proof/algorithm structure.
- Place each equation under the operation it states, not in an arbitrary corner. Equation baselines and horizontal fractions must not collide with lines, images, or neighboring labels.
- Do not replace correct source formulas with simplified but false ones. If a pedagogical formula is illustrative, label it as such in notes, not as an experimentally measured mechanism.

## Flows, arrows and loops

Before placing arrows, write a dataflow table: *source → transformation → destination*. For loops also state the recurrence variable and its updated state. Review that the line endpoints represent this graph.

Illustrative example for conditional generation:

- current state → predictive function → predicted quantity
- condition/text representation → predictive function (not directly to the final image)
- predicted quantity + current state → update/sampler → next state
- next state → repeated predictive step until final state
- final latent → decoder → visible output

This is a logic example, not a requirement to depict diffusion for future topics.

## Charts and empirical visuals

- Source real data and preserve units, seeds, sample counts, uncertainty, baselines and task definitions when essential.
- Chart axes must be honest; graphs, heatmaps and scatterplots need clear dimensions and color semantics. Never convert a 4×4 swatch matrix into an asserted experiment unless the values actually exist.
- If data are categorical, make categories legible and use tables or ordered comparisons instead of pseudo-quantitative bars.
- Distinguish actual samples and schematic examples in speaker notes or concise figure labels where it matters.
- Show real comparison trajectories when claiming behavior over time. Reversed noising frames are not automatically a real generative sampling path.

## Image selection

- Select high-resolution, relevant and properly licensed visuals. Preserve aspect ratios. Prefer uncropped central information.
- Image frames should serve a page job: reveal a phenomenon, compare states, verify a result, or provide a meaningful emotional entry/exit.
- Always inspect left/right crop boundaries: a source image may look attractive at thumbnail size while hiding a subject or key object.
- Do not add noise/grain filters gratuitously; restrained research style means clean rendering, not simulated paper texture everywhere.

## Native editing and formulas in PPTX

- Keep words, vector shapes, separators, matrices, score cells, connectors and diagram nodes editable when practical.
- Embed vector formulas or mathematics at correct aspect. When using text boxes for actual math, verify superscripts/subscripts and radical sizes, especially after opening in Microsoft PowerPoint.
- Capture source references in speaker notes or a separate appendix when scholarly attribution is required, without cluttering the slide with visible defense footnotes.
- When source material is incomplete, identify missing facts instead of inventing values or drawing a misleading figure.
