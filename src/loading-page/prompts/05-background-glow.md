# Asset Generation Prompt: 05-background-glow.svg

## Metadata
- **Page**: loading-page
- **Sequence Number**: 05
- **Visual Description**: A subtle, center-weighted white/gold radial glow that fades out to absolute transparency, creating a luxurious backlighting spotlight.

## Prompt Used
```text
Create a clean, scalable vector (SVG) representing a soft background radial glow.
Requirements:
- Center-weighted radial gradient.
- Colors: Pure white (#ffffff) at 0% with 0.1 opacity, transitioning to soft warm gold (#fbbf24) with 0.03 opacity at 40%, and completely transparent at 100%.
- Center circle coordinates cx="300" cy="300" r="280".
- Set viewBox to "0 0 600 600" and use only for decorative purposes (aria-hidden="true").
```

## Regeneration Notes
- Styled using nested `<radialGradient>` definitions with ids.
- Embedded a centered circle that will be rendered behind the wordmark to establish the glowing core.
- Bypasses screen readers using `role="presentation"`.
