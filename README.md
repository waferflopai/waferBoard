# waferBoard

**Markdown dashboards** — define dashboard sections using clean Markdown and special directives. No backend, no build tools, just a single HTML file.

[![Live Demo](https://img.shields.io/badge/Live-Demo-00C7B7?logo=vercel&logoColor=white)](https://waferboard.vercel.app/)

## About

waferBoard is a self-contained dashboard tool that transforms Markdown files into a grid of interactive cards. Each section can display statistics, channel bars, metric grids, action lists, tags, and charts (pie/bar) using plain text directives. The entire dashboard is stored in your browser's local storage and can be exported as HTML, Markdown, PNG, SVG, or printed as PDF.

## Features

- **Markdown‑driven sections** – each dashboard block is defined by a Markdown string.
- **Special directives** – add interactive components without writing HTML or JavaScript:
  - `#stats` – key‑value cards with optional change indicators (▲/▼)
  - `#channels` – horizontal bars with percentages (width equals value)
  - `#metrics` – two‑column key‑value grid
  - `#actions` – task list with optional priority markers [HIGH], [MED], [LOW]
  - `#tags` – pill labels (comma separated)
  - `#chart pie` / `#chart bar` – inline charts using Chart.js
  - ` ```chart ``` ` – alternative chart definition block (labels, values, type)
- **Live editing** – click the pencil icon on any section to edit its Markdown source. Changes are saved automatically to localStorage.
- **Load external Markdown files** – import `.md` files to add new sections or replace existing content.
- **Export** – export the entire dashboard as:
  - HTML (self‑contained with embedded styles and scripts)
  - Markdown (concatenated sections)
  - PNG / SVG (screenshot of the dashboard via html2canvas)
  - PDF (via browser print dialog)
- **Responsive grid** – adapts to screen size; prints cleanly with no interactive elements.
- **Help modal** – built‑in reference for all directives.

## Usage

1. Open `index.html` in any modern browser.
2. The default dashboard contains five sections (Overview, Revenue, Users, Metrics, Notes).
3. Click the edit (✎) button on any section to modify its Markdown.
4. Use the **Load Files** button to import `.md` files — each file becomes a new section.
5. Export your dashboard using the **Export** dropdown.

### Markdown Directives

Place these directives on their own lines. They will render as interactive components.

| Directive | Example | Output |
|-----------|---------|--------|
| `#stats` | `Revenue: $284k ▲12.4%` <br> `Users: 12.4k ▲8.1%` | Stat cards with change indicator |
| `#channels` | `Direct: 35` <br> `Organic: 25` | Horizontal bars, width = percentage |
| `#metrics` | `CAC: $42` <br> `LTV: $340` | Two‑column metric grid |
| `#actions` | `- [ ] Q4 Goal: Organic traffic +20% [HIGH]` | Task list with priority badges |
| `#tags` | `growth, q3, trending` | Pill‑style tags |
| `#chart pie` or `#chart bar` | `Direct: 35` <br> `Organic: 25` | Pie or bar chart |
| ` ```chart ` block | <pre>type: pie<br>labels: Direct, Organic<br>values: 35, 25</pre> | Alternative chart definition |

**Note:** Chart colors are automatically cycled from a predefined palette.

### Keyboard shortcuts

- `Ctrl+Enter` (or `Cmd+Enter`) inside the Markdown editor to save and close the section.

## Customization

- **Grid layout** – the dashboard is built with CSS Grid (2 columns, 3 rows). Each section can span the full width using the `full` class (applied to the Overview section by default).
- **Theming** – all colours are defined in the `<style>` block. The dark theme uses slate/green tones; you can modify the CSS variables or override classes.
- **Chart defaults** – the chart directive picks from a set of ten colours. You can override by providing a `colors` list inside the ` ```chart ` block.

## Export Details

- **HTML** – exports a standalone HTML file with all styles and scripts embedded. Charts are re‑initialised when the exported file is opened.
- **Markdown** – exports all sections as a single Markdown document (directives are preserved, so they can be re‑imported later).
- **PNG / SVG** – uses html2canvas to capture the dashboard as an image.
- **PDF** – triggers the browser’s print dialog; use “Save as PDF” from the print options.

## File Structure

- `index.html` – the entire application (HTML, CSS, JavaScript). No external dependencies besides CDN‑loaded libraries (Chart.js, Marked.js, html2canvas).

## Local Storage

All content edits are stored under the key `markboard_md` in `localStorage`. The dashboard restores your last saved state on reload. The **Reset** button restores the original default content for all built‑in sections and removes any imported file sections.

## License

This project is provided as‑is under the MIT License.
