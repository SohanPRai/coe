# Design System - CoE Demo Website

## Design Philosophy
The CoE (Center of Excellence) Demo Website represents a prestigious academic institution combined with cutting-edge engineering disciplines. The design system focuses on **Premium Dark Mode**, **Academic Gold Accents**, and **Cinematic Neon Glows**, incorporating glassmorphism and smooth micro-animations.

---

## Color Palette

### Base Surfaces
- **Obsidian Black**: `#030712` (Tailwind `gray-950`) - Main viewport background.
- **Deep Steel**: `#0f172a` (Tailwind `slate-900`) - Card background surfaces.
- **Glass Slate**: `rgba(15, 23, 42, 0.6)` - Glassmorphism backgrounds.

### Accents
- **Academic Gold**: `#eab308` (Tailwind `yellow-500`) - Represents excellence, quality, and Sahyadri's heritage.
- **Cyber Cyan**: `#06b6d4` (Tailwind `cyan-500`) - Represents technology, modern engineering, and future-forward focus.
- **Soft Glow**: `rgba(234, 179, 8, 0.15)` - Ambient radial light sources.

### Typography Colors
- **Primary Text**: `#f8fafc` (Tailwind `slate-50`) - Main body copy and headings.
- **Secondary Text**: `#94a3b8` (Tailwind `slate-400`) - Description texts and labels.
- **Disabled/Muted**: `#475569` (Tailwind `slate-600`) - Placeholders and lines.

---

## Typography

- **Headings (Logo/Titles)**: Sans-serif tracking-widest, uppercase, with high weight contrast (e.g., light text with bold highlights).
- **Body Text**: Clean system-ui or Inter-like sans-serif (`font-sans`).
- **Monospace (Logs/Counters)**: Standard monospaced fonts (`font-mono`) used for numeric indicators.

---

## Glassmorphism Guidelines
To maintain visual premium texture, surfaces should follow this specification:
- **Background**: `bg-slate-900/60`
- **Backdrop Blur**: `backdrop-blur-md`
- **Border**: `border border-white/10` or `border border-yellow-500/10`
- **Shadow**: `shadow-xl shadow-black/40`

---

## Animations
All page transitions and micro-interactions must run at 60fps:
- **Fades & Scales**: Transition durations between `300ms` and `800ms`.
- **Eases**: Custom cubic-bezier easing for premium responsiveness: `cubic-bezier(0.16, 1, 0.3, 1)` (out-expo).
- **SVG Strokes**: CSS stroke animations running at `1.5s` to `2.5s` using stroke-dashoffset.
