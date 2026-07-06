# Project Architecture - CoE Demo Website

## Directory Structure Overview
This project uses a feature/page-based architecture. All core code resides in the `src/` directory, while overall documentation resides in the root `docs/` folder.

```text
src/
├── loading-page/
├── home-page/
├── about-page/
├── centers-page/
├── events-page/
├── gallery-page/
├── contact-page/
├── shared/
├── app/
├── assets/
└── main.tsx
```

### Self-Contained Feature Folders
Every page has its own folder containing a fixed structure, ensuring high isolation. No page features are allowed to leak across folders.
```text
page-name/
├── svg/         <- Local SVG files, numbered sequentially
├── prompts/     <- Markdown logs of generation prompts for the SVGs
├── animations/  <- Custom CSS or JavaScript animations specific to this page
├── components/  <- Sub-components only used on this page
├── styles/      <- Custom CSS specific to this page
├── images/      <- Raster images (png/jpg)
├── icons/       <- Custom UI icons for this page
├── fonts/       <- Custom typography used on this page
└── README.md    <- Page-level documentation and asset inventory
```

### Shared Layer (`src/shared/`)
Shared utilities, context providers, layout structures, and reusable UI components belong in `src/shared/`.
- **`src/shared/components/`**: General UI controls (Navbar, Footer, Button, Inputs, etc.)
- **`src/shared/hooks/`**: Universal React hooks.
- **`src/shared/context/`**: Global state providers (e.g., ThemeProvider).

### App Core (`src/app/`)
The bootstrapping and orchestration layer.
- **`src/app/App.tsx`**: The main entry component coordinating the active view/routing and rendering the root layouts.
- **`src/app/Router.tsx`**: Configuration of views and navigation states.

---

## Loading Sequence Architecture
1. **Initial Mounting**: The site boots to a absolute black viewport.
2. **Boot Stage (0-100%)**:
   - Soft glow rises.
   - SVG logo draws itself.
   - Texts fade in sequentially.
   - Minimalist progress counter drives from 0% to 100%.
3. **Transition**: Once progress reaches 100%, the loader unlocks, fading/translating out of view, exposing the `home-page` container.
