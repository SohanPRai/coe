# Loading Page Feature

## Purpose
The cinematic loading page serves as the entry sequence and visual design foundation for the CoE Demo Website. It creates a premium, academic-tech first impression, booting systems and running a smooth visual transition before revealing the dashboard.

---

## Folder Structure
```text
loading-page/
├── svg/
│   ├── 01-coe-logo.svg        # Academic shield logo with draw paths
│   ├── 02-coe-text.svg        # Title text typography
│   ├── 03-glow-orb.svg        # Ambient background glow sphere
│   └── 04-grid-overlay.svg    # Tiling blueprint coordinate grid
├── prompts/
│   ├── 01-coe-logo.md         # Prompt log for logo shield vector
│   ├── 02-coe-text.md         # Prompt log for title text vector
│   ├── 03-glow-orb.md         # Prompt log for radial gradient glow
│   └── 04-grid-overlay.md     # Prompt log for background mesh grid
├── animations/
│   └── logo-draw.css          # Keyframe sequences for SVG path drawing
├── styles/
│   └── loading.css            # Layout structure, glows, and positioning
├── components/
│   ├── LoadingScreen.tsx      # Orchestrator component with progress hook
│   └── ProgressRing.tsx       # Radial circular percentage progress ring
└── README.md                  # This file
```

---

## Components
1. **`LoadingScreen.tsx`**: Renders the complete layout. Drives the mock progress timeline, registers event listeners for dynamic mouse spotlight tracking, and exposes the `onComplete` hook.
2. **`ProgressRing.tsx`**: Renders a circular SVG loader. Custom computes stroke offset configurations dynamically to trace progress.

---

## SVG Inventory
- `01-coe-logo.svg`: Abstract geometric hexagonal crest depicting engineering circuits.
- `02-coe-text.svg`: Uppercase title reading "CENTER OF EXCELLENCE".
- `03-glow-orb.svg`: Translucent gold radial gradient orb to illuminate dark backgrounds.
- `04-grid-overlay.svg`: Coordinate grid pattern tiling across the backdrop.

---

## Animation Inventory
- **SVG Stroke Drawing**: Path stroke-dashoffset transitions from 800 to 0 over 2 seconds.
- **Staggered Delays**: Borders draw first, followed by circuit lines, and finally nodes.
- **Pulse Core**: The logo's center energy node pulses continuously (`scale(1)` to `scale(1.3)`).
- **Fade & Scale Intro**: Titles and progress ring fade in cleanly once drawing completes.
- **Exit Zoom**: The entire container fades out and scales up slightly on load completion.

---

## Prompt Inventory
- `01-coe-logo.md`: Abstract node hexagonal shield vector instruction.
- `02-coe-text.md`: Wide tracking uppercase title instruction.
- `03-glow-orb.md`: Low-opacity radial spotlight gradient instruction.
- `04-grid-overlay.md`: 30x30 coordinate grid tiling backdrop instruction.

---

## Dependencies
- `framer-motion`: For fluid container transitions and exits.
- `react`: Standard hooks (`useState`, `useEffect`, `useRef`).

---

## Future Improvements
- Integrate physical coordinate tracking using gyroscopic sensors on mobile devices.
- Cache loaded assets so subsequent page reloads skip the full loading sequence.

---

## Changelog
- **2026-07-06**: Designed and implemented the complete cinematic loading sequence and assets.
