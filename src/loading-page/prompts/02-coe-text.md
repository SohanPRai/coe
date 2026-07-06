# Asset Generation Prompt: 02-coe-text.svg

## Metadata
- **Page**: loading-page
- **Sequence Number**: 02
- **Visual Description**: A text SVG rendering the words "CENTER OF EXCELLENCE" in an elegant, widely tracked, clean sans-serif typeface, optimized for scale and crisp readability on all devices.

## Prompt Used
```text
Create a clean, optimized vector (SVG) containing the text "CENTER OF EXCELLENCE".
Requirements:
- Typography should be uppercase, modern, and high-contrast, with generous letter-spacing (tracking).
- Text color should be crisp white or light silver (#f8fafc) to contrast with dark backgrounds.
- Do not use external fonts; use standard web-safe system fonts like system-ui, Inter, or Arial in the SVG style, or convert the text paths to ensure consistent rendering across all systems without loading external assets.
- Set viewBox to "0 0 500 40" and align the text perfectly to the center.
- Provide proper class names for transition control.
```

## Regeneration Notes
- Configured SVG with `font-family="system-ui, sans-serif"`, `font-size="20"`, `font-weight="700"`, and `letter-spacing="8"`.
- Set `text-anchor="middle"` at position `x="250" y="26"` to ensure perfect horizontal centering.
- Added accessibility tags: `role="img"` and `aria-label="Center of Excellence Title Text"`.
