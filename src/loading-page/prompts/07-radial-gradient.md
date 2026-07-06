# Asset Generation Prompt: 07-radial-gradient.svg

## Metadata
- **Page**: loading-page
- **Sequence Number**: 07
- **Visual Description**: A radial gradient vignette mask that frames the screen, keeping corners dark and drawing eyes into the center composition.

## Prompt Used
```text
Create a clean, scalable vector (SVG) representing a radial gradient vignette.
Requirements:
- Radial gradient with center at 50%, 50%.
- Center (0%) is fully transparent (opacity 0).
- Midpoint (70%) is starting to darken (opacity 0.2 black).
- Edge (100%) is absolute black (opacity 0.95 to 1.0) to mask the screen edges.
- Set viewBox to "0 0 100 100" with preserveAspectRatio="none" to scale dynamically across any screens.
- Bounded with role="presentation" and aria-hidden="true".
```

## Regeneration Notes
- Configured a `<rect>` at `width="100"` and `height="100"` with a radial gradient fill.
- Included `preserveAspectRatio="none"` in the root `<svg>` to stretch it to fill the absolute viewport.
- Accessibility tags set to decorative.
