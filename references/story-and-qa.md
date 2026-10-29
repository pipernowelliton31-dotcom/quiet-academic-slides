# Storycraft and quality gates

## A. Story before drawing

1. Identify the audience's prior knowledge and the action/insight the deck should enable.
2. Distill one sentence: "After this talk, the audience can explain/decide ___."
3. Outline a natural story: **hook → roadmap → evidence/mechanism → consequence/open question → return**. Other well-structured narratives are allowed; choose for purpose, not out of habit.
4. Give each page a single *page job* and choose composition from `layout-grammar.md`.
5. Write the shortest accurate text that makes the figure interpretable, leaving oral explanation in speaker notes for live talks.
6. Use transitions that connect intellectual questions, not "Next, slide three shows" as essay-like filler.

For a short live speech, the original example's effective technique was to move from a beautiful image to random noise, ask why, then explain increasingly precise mathematics while avoiding unnecessary specialist jargon. Transfer the **curiosity-first pedagogy** to other subjects, not its literal picture.

## B. Content design checklist

- Every page has one takeaway and its proof, observation, calculation or example.
- Related variables/colors retain stable meanings across pages.
- Groupings, repetition, changes in line thickness and boundaries correspond to real conceptual relations.
- Labels use meaningful verbs and outcomes: "Add noise", "Predict the difference", "Sample and repeat", not empty slogans.
- A slide can be quiet; do not fill 30% blank space with unrelated secondary prose.
- The introductory and closing pages are emotionally and visually related.
- Page numbers and micro metadata remain subdued; no flamboyant chapter-number badges.
- Use English/Chinese naturally and with consistent punctuation. Do not use a middle dot as a document separator.

## C. Visual acceptance gates

**Hard fail**

- Garbled or visibly missing characters (especially after variable-font replacement).
- Formula stretched, clipped, malformed, too small to interpret, or obscured by a shape.
- State transition arrow leading to the wrong node or incorrect result.
- Any major item outside slide canvas, visible text overlap, or a critical image subject cut off.
- Fabricated evidence, mislabeled axes, false equivalence between training and generation, or unmarked synthetic data presented as measured.
- One random full-page dark/candy-colored slide that violates the declared system.

**Needs review**

- Caption repeats what is already obvious.
- One accent color appears on only one slide without semantic rationale.
- Excessive large card rectangles compared to the reference's open-paper layout.
- Long text blocks or serif body paragraphs in the center of a diagram.
- Details smaller than 12pt on a projection screen; in the reference, a few <12pt micro labels were present, but that is not license to make the main argument tiny.
- Figure thin rules/text with insufficient contrast from rear of classroom.

## D. Technical QA procedure

1. Export a provisional editable `.pptx`.
2. Run `python scripts/audit_deck.py output.pptx` for font families, numeric sizes, canvas bounds and media distortion flags. Treat warnings as places to inspect, not final aesthetic judgments.
3. Use the installed slide renderer (when available):
   `python /home/oai/skills/slides/container_tools/render_slides.py output.pptx`
4. Create a montage for global rhythm:
   `python /home/oai/skills/slides/container_tools/create_montage.py --input_dir output --output_file montage.png`
5. Open *every rendered page* at actual page size and inspect type, math, crop, line endpoints and story. Inspect key equation pages at 100% zoom.
6. Run `python /home/oai/skills/slides/container_tools/slides_test.py output.pptx` when available.
7. Correct source objects and re-export. Repeat rendering until no critical issue remains.
8. If fonts are substituted on another device, supply a visually locked projection copy only if requested; still deliver an editable presentation, never only screenshots.

The above installed tool paths are examples for ChatGPT's container environment, not bundled dependencies or universal OS paths. If unavailable, use the host environment's equivalent rendering and QA tools.

## E. Quality scoring (internal)

Score each category 0–5; no single score can compensate for a hard fail:

- **Scientific/semantic accuracy (30%)**: variables, states, sources, units, claims and arrows.
- **Structural clarity (25%)**: one main message, obvious scan order, legible cause/sequence, not duplicated captions.
- **Aesthetic fidelity (20%)**: warm paper, forest ink, static font hierarchy, low-saturation accents, coherent linework.
- **Editorial variety (15%)**: composition matched to page job, not uniform card repetition.
- **Projection usability (10%)**: legibility, contrast, actual image crop, no occlusions or font garbling.

A high score only after actual rendering matters; do not report a score from source XML alone.
