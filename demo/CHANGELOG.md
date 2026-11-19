# Changelog

## 0.6.0 — Polish, full i18n & interaction fixes

- Completed EN / Simplified / Traditional coverage for dynamic content: pillar details, palace descriptions, hexagram and line text, five-element labels, cycle labels, at-a-glance values and report cover copy. Fixed mixed simplified/traditional strings in the zh locales.
- Year selection now stays in sync between the chart workspace, report preview and order summary; the report-language selector updates the order summary immediately.
- Added hash-based view routing: browser back/forward moves between journey steps, deep links such as `#workspace` open directly, and focus moves to the active view heading.
- Fixed the Ji Ji annual hexagram line rendering (lines are stored bottom-to-top) and made the annual hexagram code follow the selected year.
- Custom IANA time-zone input is validated via `Intl`; the sex field is enforced in submit validation; birth-form prefill logic deduplicated.
- Accessibility: `aria-pressed` / `aria-selected` / `aria-expanded` states on chart selectors and toggles, `role="alert"` on the checkout error, larger touch targets for year/icon/motion controls, and a consent-checkbox fallback for browsers without `:has()`.
- Performance & typography: web fonts load through preconnect + `<link>` instead of a render-blocking CSS `@import`; added CJK font fallbacks and Chinese-specific heading/eyebrow metrics; added an SVG favicon.
- Original Hetu and logo SVG masters remain byte-identical; the static validation suite passes (214 UI keys checked in three locales).
- Hero Hetu artwork is now text-free: removed the center 河圖/HETU label and the bottom caption line; the motion control is a compact icon-only circular button with a localized screen-reader label.
- UI polish: scroll-in reveal for landing sections, view/panel fade transitions, detail-panel refresh animation on selection; richer card hover states (tradition cards lift with symbol zoom, pillar cards gain a gold top rule when active, selected palaces gain a gold corner dot), plus micro-interactions on buttons, cycle chips, scope rows and summary cards. All motion respects `prefers-reduced-motion` and content remains visible without JavaScript.

## 0.5.0 — Product A web direction

- Replaced the Product B NFC / daily-use flow with Product A's independent website journey.
- Added editorial landing page, tradition overview and methodology page.
- Added birth-data form with date, local birth time, time accuracy, sex for traditional rules, birthplace and IANA time zone handling.
- Added free chart workspace with BaZi, Zi Wei twelve-palace and Heluo Pre-Heaven / Later-Heaven / annual views.
- Added interactive pillar, palace, hexagram-line and year selection controls.
- Added selected-year annual report preview around five stable life dimensions.
- Added email and order review flow with no live payment, no configured price and no email delivery.
- Added EN / Simplified Chinese / Traditional Chinese interface strings.
- Added slow, controllable Hetu rotation. Motion is applied only to the original SVG image element and respects reduced-motion preferences.
- Preserved the original Hetu and LIORIN logo SVG files byte-for-byte.
