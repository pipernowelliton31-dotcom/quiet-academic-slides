# Bundled design assets

This repository includes the **complete distributable Skill** and its binary design references:

- [Download complete Skill ZIP](../skill.zip)
- [Editable PowerPoint starter](quiet-academic-starter.pptx)
- [Reference contact sheet](reference-pages/contact-sheet.jpg)
- Seven slide references: `reference-01.jpg` through `reference-07.jpg`

The seven images are visual studies distilled from the source presentation and should not be treated as freely licensed stock artwork. They document the intended composition, hierarchy and rhythm.

To regenerate a generic editable starter from source:

```bash
npm install pptxgenjs
node scripts/build_starter.js starter.pptx
python scripts/audit_deck.py starter.pptx --strict
```

Do not bundle or redistribute font binaries.
