# Pregnancy & Breastfeeding Procedure Safety Reference - Technical Documentation

## Table of Contents

1. [Architecture Overview](#architecture-overview)
2. [Data Schemas](#data-schemas)
3. [Calculation / Logic Algorithms](#calculation--logic-algorithms)
4. [API Reference](#api-reference)
5. [Integration Guide](#integration-guide)
6. [Customization](#customization)
7. [Performance](#performance)
8. [Browser Compatibility](#browser-compatibility)
9. [Security](#security)
10. [Version History](#version-history)
11. [Support / Contact](#support--contact)

## Architecture Overview

### Technology Stack

- **HTML5**, Semantic markup with ARIA-compatible structure
- **CSS3**, Single external stylesheet (`/tools/pregnancy-piercing-safety/css/style.css`)
- **Vanilla JavaScript (ES6)**, Single external script (`/tools/pregnancy-piercing-safety/js/app.js`)
- **Zero external dependencies**, No frameworks, libraries, or CDN resources

### File Structure

```
/tools/pregnancy-piercing-safety/
├── index.html
├── css/
│   └── style.css
└── js/
    └── app.js
```

### Component / Logic Breakdown

The tool consists of three layers:

1. **HTML Structure (`index.html`)**
   - Header with badge, title, and description
   - Two `<select>` dropdowns in a `.select-card` container
   - Dynamic `<div id="result">` for output
   - Disclaimer footer

2. **CSS Presentation (`style.css`)**
   - Responsive layout classes (`.tool-wrapper`, `.form-grid`, `.result-card`)
   - Safety level color coding (`.level-safe`, `.level-caution`, `.level-avoid`)
   - Typography and spacing for readability

3. **JavaScript Logic (`app.js`)**
   - `MATRIX` constant: complete decision data structure
   - `update()` function: event-driven rendering
   - `escHtml()` utility: XSS prevention
   - Event listeners on both `<select>` elements

## Data Schemas

### `MATRIX` Constant

The core data structure is a nested object mapping procedure types to pregnancy stages.

**Top-level keys** (procedure types):

| Key | Display Label |
|-----|---------------|
| `tattoo` | New tattoo |
| `piercing` | Body piercing (non-ear) |
| `earlobe` | Earlobe piercing |
| `pmu` | Permanent makeup / microblading |
| `removal` | Tattoo laser removal |

**Second-level keys** (pregnancy stages):

| Key | Display Label |
|-----|---------------|
| `trying` | Trying to conceive |
| `first` | First trimester (weeks 1-12) |
| `second` | Second trimester (weeks 13-26) |
| `third` | Third trimester (weeks 27-40) |
| `breastfeeding` | Breastfeeding / postpartum |

**Leaf node schema** (example from `tattoo.trying`):

```javascript
{
  level: 'caution',           // 'safe' | 'caution' | 'avoid'
  icon: '⚠️',                 // Emoji for visual indicator
  label: 'Use caution',       // Short safety label
  sub: 'Low direct risk, limited data',  // Subtitle
  summary: 'No evidence that tattoo inks cause teratogenic effects...',  // Paragraph
  risks: [                    // Array of bullet-point strings
    'Limited data on systemic pigment absorption during conception window',
    'Infection risk if healing coincides with early implantation period',
    'Ink composition varies widely, EU Regulation 2020/2081 compliant inks preferred'
  ]
}
```

**Complete matrix size**: 5 procedures × 5 stages = 25 leaf nodes, each with 6 fields.

### HTML Select Options

**Procedure dropdown** (`#procedure`):

| Value | Text |
|-------|------|
| `""` |, Select, |
| `"tattoo"` | New tattoo |
| `"piercing"` | Body piercing (non-ear) |
| `"earlobe"` | Earlobe piercing |
| `"pmu"` | Permanent makeup / microblading |
| `"removal"` | Tattoo laser removal |

**Stage dropdown** (`#stage`):

| Value | Text |
|-------|------|
| `""` |, Select, |
| `"trying"` | Trying to conceive |
| `"first"` | First trimester (weeks 1-12) |
| `"second"` | Second trimester (weeks 13-26) |
| `"third"` | Third trimester (weeks 27-40) |
| `"breastfeeding"` | Breastfeeding / postpartum |

## Calculation / Logic Algorithms

### `escHtml(input)`

**Purpose**: Sanitize user-facing strings to prevent XSS attacks.

**Parameters**: `input` (string or falsy value)

**Algorithm**:
1. Convert input to string using `String(s || '')`
2. Replace `&` with `&amp;`
3. Replace `<` with `&lt;`
4. Replace `>` with `&gt;`
5. Replace `"` with `&quot;`
6. Return escaped string

**Used by**: `update()` when rendering `d.summary`, `d.sub`, `d.label`, and each `d.risks[i]` string.

### `update()`

**Purpose**: Read current dropdown selections, look up the corresponding matrix entry, and render the result card into the DOM.

**Algorithm**:

1. Read `procedureSel.value` and `stageSel.value`
2. If either value is empty string (`""`), clear `resultDiv.innerHTML` and return
3. Look up `MATRIX[proc][stage]` and assign to `d`
4. If `d` is falsy, clear `resultDiv.innerHTML` and return
5. Build `risksHtml` by mapping each string in `d.risks` through `escHtml()` and wrapping in `<li>` tags
6. Construct HTML template string with:
   - `.result-card` container
   - `.safety-banner` with dynamic level class (`level-${d.level}`)
   - Safety icon, label, and subtitle
   - Summary section with `d.summary`
   - Specific considerations section with `risksHtml`
   - Static healthcare provider disclaimer
7. Assign template to `resultDiv.innerHTML`

**Event binding**: Called on `change` events from both `<select>` elements.

## API Reference

### Public Functions

| Function | Parameters | Returns | Description |
|----------|------------|---------|-------------|
| `escHtml(s)` | `s`: any value | `string` | HTML-escapes a string for safe DOM insertion |
| `update()` | None | `undefined` | Reads dropdowns, queries MATRIX, renders result |

### Event Handlers

| Element | Event | Handler | Description |
|---------|-------|---------|-------------|
| `#procedure` | `change` | `update()` | Triggers re-render when procedure type changes |
| `#stage` | `change` | `update()` | Triggers re-render when pregnancy stage changes |

### Global Variables

| Variable | Type | Description |
|----------|------|-------------|
| `MATRIX` | `Object` | Immutable decision data (5 procedures × 5 stages) |
| `procedureSel` | `HTMLElement` | Reference to `#procedure` select element |
| `stageSel` | `HTMLElement` | Reference to `#stage` select element |
| `resultDiv` | `HTMLElement` | Reference to `#result` output container |

## Integration Guide

### Standalone Embedding

The tool is fully self-contained and can be embedded via iframe:

```html
<iframe
  src="https://poliinternational.com/tools/pregnancy-piercing-safety/"
  width="100%"
  height="800"
  frameborder="0"
  title="Pregnancy & Breastfeeding Procedure Safety Reference"
></iframe>
```

### Iframe Communication

The tool detects iframe embedding via `window.self !== window.top`. When embedded:

- Dark theme is applied by default (`data-theme="dark"`)
- The tool listens for `message` events with `type: 'poli-theme'`
- Send `{ type: 'poli-theme', light: true }` for light theme, `{ type: 'poli-theme', light: false }` for dark theme

### Dependencies

**None**. The tool is dependency-free static HTML/CSS/JS. No jQuery, React, or external libraries required.

### Hosting Requirements

- Static file server capable of serving HTML, CSS, and JS
- No server-side processing required
- No database or API endpoints needed

## Customization

### Modifying Safety Data

Edit the `MATRIX` object in `js/app.js` to:

- Add new procedure types (add top-level key with all 5 stage entries)
- Add new pregnancy stages (add second-level key to all 5 procedures)
- Update risk text, summaries, or safety levels
- Change emoji icons per entry

### Styling

The CSS file (`css/style.css`) uses BEM-like class naming:

- `.tool-wrapper`, `.tool-header`, `.tool-header__badge`
- `.select-card`, `.form-grid`, `.form-field`
- `.result-card`, `.safety-banner`, `.safety-icon`, `.safety-label`, `.safety-sub`
- `.result-section`, `.result-section-title`, `.result-body`, `.risk-list`
- `.level-safe`, `.level-caution`, `.level-avoid`
- `.disclaimer`

Override these classes in your own stylesheet if embedding.

### Adding New Fields

To extend the data schema for each leaf node:

1. Add new properties to each entry in `MATRIX`
2. Modify the template literal in `update()` to render the new fields
3. Apply `escHtml()` to any user-facing string values

## Performance

- **Total payload**: ~8KB (HTML + CSS + JS combined)
- **DOM operations**: Single `innerHTML` assignment on user interaction
- **Memory**: One data object (MATRIX) with 25 entries, no runtime allocations
- **Rendering**: No loops or complex computations; direct object lookup
- **Network**: Zero external requests after initial page load

## Browser Compatibility

| Feature | Support |
|---------|---------|
| ES6 (`const`, `let`, arrow functions) | IE 11+, all modern browsers |
| `template literals` | IE 11+, all modern browsers |
| `addEventListener` | IE 9+, all modern browsers |
| `document.getElementById` | IE 5+, all modern browsers |
| CSS Grid / Flexbox | IE 10+ (partial), all modern browsers |
| `window.self !== window.top` | All browsers |
| `postMessage` / `message` event | IE 8+, all modern browsers |

**Minimum supported**: Internet Explorer 11 with polyfills for template literals.

## Security

### XSS Prevention

- All user-facing strings from `MATRIX` are passed through `escHtml()` before DOM insertion
- The `escHtml()` function escapes `&`, `<`, `>`, and `"` characters
- Dropdown values are validated against the `MATRIX` object keys before lookup
- No user input is accepted beyond dropdown selections

### Content Security

- The tool sets `name="robots" content="noindex, nofollow"` to prevent search indexing
- No inline event handlers (no `onclick`, `onchange` in HTML)
- No `eval()` or dynamic code execution

### Iframe Security

- The tool detects iframe embedding and applies appropriate theming
- No sensitive data is transmitted or stored
- No cookies, localStorage, or sessionStorage used

## Version History

| Version | Date | Description |
|---------|------|-------------|
| 1.0.0 | Initial release | Complete pregnancy safety reference with 5 procedure types and 5 pregnancy stages |

## Support / Contact

For technical inquiries or integration support:

- **Email**: support@poliinternational.com
- **Documentation**: https://poliinternational.com/tools/pregnancy-piercing-safety/
- **Company**: Poli International (serving tattoo & piercing studios)
