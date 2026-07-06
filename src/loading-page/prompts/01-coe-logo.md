# Asset Generation Prompt: 01-coe-logo.svg

## Metadata
- **Page**: loading-page
- **Sequence Number**: 01
- **Visual Description**: A custom premium geometric vector wordmark for the letters "COE", styled with thin lines, rounded caps, and precise layout for path drawing animations.

## Prompt Used
```text
Create a clean, scalable vector (SVG) wordmark containing the letters "COE".
Design details:
- Clean, modern, high-end geometric typography.
- Letter 'C': A perfect open circle arc on the left.
- Letter 'O': A complete concentric circle in the middle.
- Letter 'E': A clean vertical spine with three horizontal parallel arms on the right.
- Set viewBox to "0 0 300 100" and ensure it is vertically and horizontally centered.
- Use a stroke width of 4 with rounded caps (stroke-linecap="round").
- Outline the path coordinates explicitly so that stroke-dashoffset animations can draw the letters smoothly.
- Avoid fills; use only white (#ffffff) or silver strokes for the letters.
```

## Regeneration Notes
- Configured individual letters using separate `<path>` tags with descriptive ids: `letter-c`, `letter-o`, `letter-e-spine`, `letter-e-top`, `letter-e-mid`, and `letter-e-bot`.
- Bounded text lines to standard heights `y = 18` to `82` for a modern square proportion.
- Added accessibility tags: `role="img"` and `aria-label="COE custom wordmark"`.
