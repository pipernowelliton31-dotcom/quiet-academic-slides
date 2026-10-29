# Bundled design assets

This repository includes the **complete distributable Skill** and its binary design references:

- [Download complete Skill ZIP](../skill.zip)
- [Editable PowerPoint starter](quiet-academic-starter.pptx)
- [Reference contact sheet](reference-pages/contact-sheet.jpg)
- Seven slide references: `reference-01.jpg` through `reference-07.jpg`
- [Cover and closing visual assets](cover-close/) — `1.png` through `15.png`, ready to place directly on opening and closing slides.

The seven images are visual studies distilled from the source presentation and should not be treated as freely licensed stock artwork. They document the intended composition, hierarchy and rhythm.

The `cover-close` images are supplied as visual assets for direct use: choose one that fits the subject and use it as a cover or closing image, preserving its aspect ratio and cropping deliberately. Their numerical order follows the supplied files' chronology; it does not prescribe slide order.

To regenerate a generic editable starter from source:

```bash
npm install pptxgenjs
node scripts/build_starter.js starter.pptx
python scripts/audit_deck.py starter.pptx --strict
```

Do not bundle or redistribute font binaries.
