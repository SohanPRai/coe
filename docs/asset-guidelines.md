# Asset Guidelines - CoE Demo Website

## Core Guidelines
Assets must follow strict guidelines to ensure isolation, maintainability, and ease of recreation.

---

## SVG Asset Standards

1. **Isolation**: Every SVG must represent exactly **one** visual component (e.g., logo shield, logo text, grid overlay, glowing sphere). Do not group pages or complex interfaces into a single file.
2. **Individual Files**: Put every asset in its own file under its respective page's `svg/` directory.
3. **Optimized XML**: Avoid unnecessary metadata from vector software (e.g., Illustrator, Inkscape).
   - Use direct coordinates.
   - Clean group `g` styling.
   - Use relative/scalable `viewBox` coordinates instead of hardcoded pixel sizes where appropriate.
4. **Accessibility (a11y)**:
   - Decorative SVGs must include `aria-hidden="true"` and `role="presentation"`.
   - Actionable or informational SVGs must include `role="img"`, a `<title>` tag with a clear description, and an `aria-label` or `aria-labelledby`.

---

## Prompt Logging

Every generated SVG must have an identical companion prompt file saved in the `prompts/` folder.
- **Location**: `page-name/prompts/`
- **File Format**: Markdown (`.md`)
- **Naming Rule**: Must exactly match the name of the SVG.
  - SVG: `svg/01-coe-logo.svg`
  - Prompt: `prompts/01-coe-logo.md`

### Prompt Document Template
```markdown
# Asset Generation Prompt: [Asset Name]

## Metadata
- **Page**: [Page Folder Name]
- **Sequence Number**: [01, 02, etc.]
- **Visual Description**: [Short summary of the generated output]

## Prompt Used
```text
[Insert the exact prompt used to generate this vector code]
```

## Regeneration Notes
[Include details about manual optimizations, viewBox adjustments, or keyframes applied after generation.]
```

---

## Sequential Filename Standard
All SVGs and prompts must use a double-digit stable sequential prefix.
- Example: `01-coe-logo.svg`, `02-coe-text.svg`, `03-glow-orb.svg`.
- **STABILITY RULE**: Once an asset has been committed, **never rename it or shift its index**. This preserves history and configuration bindings. Any new assets must be appended at the end of the sequence.
