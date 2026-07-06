# Asset Generation Prompt: 03-glow-orb.svg

## Metadata
- **Page**: loading-page
- **Sequence Number**: 03
- **Visual Description**: A large radial gradient glow orb that creates a soft, luxurious background lighting effect, with warm amber/gold colors, fading out to transparency.

## Prompt Used
```text
Create a clean, scalable vector (SVG) representing a glowing background radial light source.
Requirements:
- Radial gradient starting with warm amber/gold (#eab308) at 0% with 20% opacity, transitioning to #d97706 with 5% opacity at 50%, and fully transparent (0% opacity) at 100%.
- Set viewBox to "0 0 800 800" and the circle perfectly centered.
- The SVG should serve as a decorative backlighting layer (radial spotlight) for the dark screen.
- Set proper accessibility tags for a decorative-only graphic (aria-hidden="true").
```

## Regeneration Notes
- Configured a single `<circle>` at `cx="400" cy="400" r="350"` with a radial gradient fill.
- Included `aria-hidden="true"` and `role="presentation"` to bypass screen readers.
