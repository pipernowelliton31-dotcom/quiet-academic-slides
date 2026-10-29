# Binary design references

The complete distributable Skill bundle includes visual examples and the editable PowerPoint starter, but this GitHub sync currently contains the **source code and design documentation**, not the binary reference media.

To restore the full package locally, extract the original `skill.zip` from the ChatGPT conversation and copy:

- `assets/quiet-academic-starter.pptx`
- `assets/reference-pages/contact-sheet.jpg`
- `assets/reference-pages/reference-01.jpg` through `reference-07.jpg`

The reference pages are for studying composition, not for reuse as third-party stock imagery. Their bundled versions anonymize personal identifying fields.

You can alternatively regenerate a generic editable starter with:

```bash
npm install pptxgenjs
node scripts/build_starter.js starter.pptx
python scripts/audit_deck.py starter.pptx --strict
```

The starter script is a lightweight generic layout generator. It does not reproduce the source illustration or academic content.
