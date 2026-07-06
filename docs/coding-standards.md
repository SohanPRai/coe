# Coding Standards - CoE Demo Website

## Core Technologies
- **React**: React 19 (Functional components, Hooks, concurrent rendering features).
- **TypeScript**: Strict Type Check Mode enabled.
- **Tailwind CSS**: Tailwind CSS v4 (native `@tailwindcss/vite` integration).
- **Animations**: Framer Motion & CSS-in-JS transitions.

---

## TypeScript Guidelines
1. **Explicit Types**: Always declare types for component props, hook returns, and data structures. Avoid implicit `any`.
2. **Interfaces over Types**: Prefer `interface` for components and objects that might be extended, and `type` for unions/aliases.
3. **Strict Checks**: Keep `strict` set to `true` in `tsconfig.json`. Ensure all null/undefined values are handled explicitly.

---

## React Component Architecture
1. **Functional Structure**: Use functional components defined with standard syntax:
   ```tsx
   interface ButtonProps {
     label: string;
     onClick: () => void;
   }
   
   export const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
     return (
       <button onClick={onClick} className="...">
         {label}
       </button>
     );
   };
   ```
2. **Prop Destructuring**: Always destructure props in the component signature.
3. **No File Bloat**: Keep components small and focused. If a subcomponent exceeds 150 lines or is used multiple times, extract it to a standalone file.
4. **Hooks Rules**: Keep hooks at the top level of the functional components. Implement custom hooks in `src/shared/hooks/` for shared states/effects.

---

## Tailwind CSS & Styling Guidelines
1. **Utility-First**: Style layout and standard elements using Tailwind classes directly.
2. **Custom CSS Files**: Put complex drawings, specialized animations (e.g. stroke drawing), and page-level variables in the page's `styles/` or `animations/` folder. Import these CSS files locally in the main page component.
3. **Aesthetics over Presets**: Ensure gradients, box shadows, and glows feel customized and premium rather than default.

---

## Accessibility (a11y) & SEO Standards
1. **Semantic HTML**: Use proper HTML5 elements: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<aside>`.
2. **Heading Order**: A single `<h1>` tag per page representing the page title, with descending hierarchy (`<h2>` to `<h6>`).
3. **ARIA Roles & Attributes**: Use `aria-label`, `aria-describedby`, and correct roles for interactive components that are not standard HTML elements.
4. **Keyboard Navigation**: Ensure all custom buttons, modal dialogs, and interactive widgets are focusable (`tabIndex={0}`) and triggerable by Space/Enter keys.
