# A Web Design & Motion Rules

## Visual direction

Premium editorial + cultural research interface. Preserve the accepted ivory / ink / muted gold palette, serif display typography, modern sans-serif body typography, restrained borders and generous whitespace.

## Hetu master asset protection

- `assets/hetu-master.svg` is a read-only master asset.
- Do not edit SVG paths, node positions, stroke widths, fill colors, viewBox, grouping or proportions.
- The rotating effect must be applied to the outer HTML image element only.
- Current motion is a slow continuous 108-second rotation; hover modestly increases the speed.
- A user control pauses/resumes motion.
- `prefers-reduced-motion: reduce` disables rotation. All chart meaning remains available without animation.
- Do not use rotation to encode calculated directions, changing lines or chart state. It is decorative motion only.

## Interaction principles

- Every interactive element has visible hover, focus and selected states.
- Primary controls have at least 44px touch height in production layouts.
- No critical information is communicated by animation or color alone.
- Chart selections are UI state only; they must not calculate or infer metaphysical results in the browser.
- Year switching is a request boundary in production, not a client-side fortune inference.
- The Zi Wei layout uses a 12-palace desktop grid; mobile uses readable palace tiles and an adjacent detail panel.
- Heluo supports three tabs and line-level selection. The original Hetu artwork remains a separate visual motif.

## Responsive intent

Desktop-first chart workspace at 1280px+, tablet layout around 800px, and single-column mobile at 560px and below. Production must be tested at 375px, 768px and 1280px.
