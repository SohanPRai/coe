# Asset Generation Prompt: 04-grid-overlay.svg

## Metadata
- **Page**: loading-page
- **Sequence Number**: 04
- **Visual Description**: A subtle, responsive grid overlay that spans the background of the loader, providing a cybernetic engineering blueprint aesthetic.

## Prompt Used
```text
Create a clean, scalable vector (SVG) representing a grid overlay for background texture.
Requirements:
- A pattern-based grid, where the grid cells are 40x40 pixels.
- The grid lines should be very thin (0.5px) and high-transparency gray or white (opacity 0.03 to 0.05).
- A secondary coordinate grid (every 5 cells) with slightly thicker lines (1px) or a different opacity (0.08).
- Set viewBox to "0 0 100 100" with preserveAspectRatio="none" to ensure it stretches to fit any viewport sizes.
- Decorative only, include aria-hidden="true".
```

## Regeneration Notes
- Configured a `<pattern>` inside `<defs>` with width and height set to `40` and `patternUnits="userSpaceOnUse"`.
- Nested a secondary pattern for subgrid details, then filled a `<rect>` with width and height at `100%` to tile the grid across the screen.
- Used `aria-hidden="true"` and `role="presentation"` for accessibility compliance.
