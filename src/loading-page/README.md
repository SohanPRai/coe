# Loading Page Feature

## Purpose
The cinematic loading page serves as the entry sequence and visual design foundation for the CoE Demo Website. It creates a premium, academic-tech first impression, booting systems and running a smooth visual transition before revealing the dashboard.

---

## Folder Structure
```text
loading-page/
├── svg/
│   ├── 01-coe-logo.svg              # Custom COE vector wordmark logo
│   ├── 02-center-of-excellence.svg  # Subtitle text wordmark
│   ├── 03-sahyadri-college.svg      # Two-line institution title text
│   ├── 04-divider-line.svg          # Thin dividing vector line
│   ├── 05-background-glow.svg       # Soft center spotlight radial glow
│   ├── 06-particles.svg             # scattered floating dust particles
│   └── 07-radial-gradient.svg       # Edge vignette mask gradient
├── prompts/
│   ├── 01-coe-logo.md               # Prompt log for wordmark vector
│   ├── 02-center-of-excellence.md   # Prompt log for subtitle wordmark
│   ├── 03-sahyadri-college.md       # Prompt log for institution title
│   ├── 04-divider-line.md           # Prompt log for divider line
│   ├── 05-background-glow.md        # Prompt log for center glow
│   ├── 06-particles.md              # Prompt log for floating particles
│   └── 07-radial-gradient.md        # Prompt log for vignette mask
├── animations/
│   └── logo-draw.css                # Keyframe sequences for SVG letter drawing
├── styles/
│   └── loading.css                  # Layout structure, glows, and positioning
├── components/
│   └── LoadingScreen.tsx            # Main timing state orchestrator component
└── README.md                        # This file
```

---

## Components
1. **`LoadingScreen.tsx`**: Renders the complete layout. Drives the 6.5s absolute timing sequence using React timeouts and coordinates text fades and scaling.

---

## SVG Inventory
- `01-coe-logo.svg`: Stylized geometric letter vectors for "COE".
- `02-center-of-excellence.svg`: uppercase tracked wordmark for "CENTER OF EXCELLENCE".
- `03-sahyadri-college.svg`: Institution name text.
- `04-divider-line.svg`: Gold horizontal geometric divider line.
- `05-background-glow.svg`: White/amber center radial gradient light.
- `06-particles.svg`: Coordinate list of scattered background nodes.
- `07-radial-gradient.svg`: Dynamic vignette mask to frame the view.

---

## Animation Inventory
- **Scene 1 (0–1.5s)**: Vignette, center glow, and floating particles fade in and drift.
- **Scene 2 (1.5–3s)**: Letter drawing keyframes animate stroke-dashoffset on the COE logo, ending with a 5% scale pulse and white glow expansion.
- **Scene 3 (3–4s)**: Logo translates upward by 60px while "CENTER OF EXCELLENCE" subtitle slides up and fades in below.
- **Scene 4 (4–5s)**: Divider line scales horizontally from center; Sahyadri subtitle fades in below.
- **Scene 5 (5–6s)**: Visual composition is held, drift drift cycle drifts background nodes, and center glow pulse expands.
- **Scene 6 (6–6.5s)**: The screen fades out to absolute black.

---

## Dependencies
- `framer-motion`: For fluid container transitions and exits.
- `react`: Standard hooks (`useState`, `useEffect`).

---

## Future Improvements
- Cache loaded assets so subsequent page reloads skip the full loading sequence.

---

## Changelog
- **2026-07-06**: Designed and implemented the complete cinematic loading sequence and assets.
