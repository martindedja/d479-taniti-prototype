# Taniti Tourism Prototype (WGU D479, Task 1)

This is a low-fidelity coded prototype for the WGU D479 User Experience Design
Task 1 project: a redesign of the Taniti tourism website. Taniti is a small
tropical island whose government wants a redesigned site that fixes outdated
navigation, splits content across clear pages, and works well on mobile.

The prototype is intentionally simple, grayscale, and wireframe-style. It
focuses on layout, navigation, and information architecture rather than
visual polish, so it is easy to explain during the assessment.

## Running Locally

Requirements: Node.js (18+ recommended) and npm.

```bash
npm install
npm run dev
```

This starts a local dev server (Vite will print the URL, typically
`http://localhost:5173`).

## Building

```bash
npm run build
```

This produces a production build in the `dist/` folder, which is what gets
deployed (e.g., to Vercel). You can preview the production build locally with:

```bash
npm run preview
```

## Page Structure

- **Home (`/`)** — hero introduction, featured attractions (Beaches,
  Rainforest, Volcano), and planning cards linking to Lodging, Dining, and
  Transportation.
- **Things to Do (`/things-to-do`)** — card grid of all activities; each card
  links to its Attraction Detail page.
- **Attraction Detail (`/things-to-do/:slug`)** — detail page used for every
  activity, with the Volcano as the primary worked example described in the
  assignment. Includes a description, what to expect, location/planning
  details, a booking-information button, and related attractions.
- **Lodging (`/lodging`)** — hostel, family-owned hotels, bed & breakfasts,
  and the four-star resort, with a booking-information button.
- **Dining (`/dining`)** — local fish & rice, American-style, and Pan-Asian
  restaurant categories.
- **Transportation (`/transportation`)** — split into "Getting to Taniti"
  (air, cruise ship) and "Getting Around Taniti" (public bus, private bus,
  taxi, rental car, bike, walking).
- **Visitor Information (`/visitor-information`)** — currency, language,
  healthcare, safety, electrical outlets, alcohol rules, and national
  holidays.

Primary navigation (Home | Things to Do | Lodging | Dining | Transportation |
Visitor Information) is consistent across every page via the shared
`Header` component, and collapses into a simple mobile menu on small screens.

## Tech

- React + Vite
- React Router for client-side routing
- Plain CSS (no UI/styling libraries)
- No backend, database, or authentication — this is a front-end prototype only
