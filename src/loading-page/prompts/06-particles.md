# Asset Generation Prompt: 06-particles.svg

## Metadata
- **Page**: loading-page
- **Sequence Number**: 06
- **Visual Description**: A coordinate template of subtle, tiny floating white circles/dots scattered across a wide viewBox to simulate floating particles or stars.

## Prompt Used
```text
Create a clean, scalable vector (SVG) containing scattered particles.
Requirements:
- Coordinate distribution of ~15 to 20 tiny circles (radius between 0.8px and 1.5px).
- Color: Flat white (#ffffff) with varying opacities (from 0.1 to 0.45) to create depth.
- Distributed across a viewBox="0 0 1000 1000".
- Set class="drift-particle" on paths/circles to allow CSS floating/drift animations.
- Bounded with role="presentation" and aria-hidden="true".
```

## Regeneration Notes
- Configured 16 circle coordinates scattered across a 1000x1000 field.
- Added variable opacities inline (`opacity="0.2"`, `opacity="0.4"`, etc.) for atmospheric depth.
- Standardized for responsive display inside the absolute container.
