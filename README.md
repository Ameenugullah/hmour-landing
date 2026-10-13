# H'MOUR — The Scent Experience

Luxury landing page for the H'MOUR perfume brand.
React 18 + Vite + Tailwind CSS. Cormorant Garamond only.

## Run it

```bash
npm install
npm run dev      # local dev on http://localhost:5173
npm run build    # production build -> dist/
```

## Structure

```
src/
  assets/            brand images (logo untouched + navbar crop)
  components/        one file per section, top-to-bottom page order
  hooks/useReveal.js single IntersectionObserver for all .reveal elements
```

## Notes

- Navbar layout follows the provided reference screenshot (logo left,
  centered links, search/bag/Discover on the right, solid on scroll).
- `logo-mark.png` is a background-removed crop of the original logo card
  for navbar/footer use. The original `logo.jpeg` is untouched and shown
  in full inside the Brand Story section.
- Newsletter form is front-end only for now — see the TODO in
  `Newsletter.jsx` for the PocketBase hookup point.
- Animations: scroll reveals via IntersectionObserver, slow drift on the
  hero gallery, hover underlines/zooms. `prefers-reduced-motion` disables all.
# hmour-landing
