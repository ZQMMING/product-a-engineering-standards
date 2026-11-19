# LIORIN A — Web Product Demo

Version: `A-Web-Demo 0.6.0`  
Status: Interactive front-end prototype; not production-connected.

## Product boundary

This is **Product A**, the independent LIORIN website. It is not the NFC bracelet / daily guidance product B.

- No NFC activation, bracelet pairing, daily-touch flow or daily subscription dashboard.
- Free path: landing page → birth details → chart workspace.
- Chart workspace: BaZi / Four Pillars, Zi Wei Dou Shu / Twelve Palaces, Heluo / Pre-Heaven, Later-Heaven and annual hexagram views.
- Paid path: selected-year report preview → email and order details → order review state.
- Annual report is presented as a **one-time purchase for one selected year**, not automatic renewal.
- Annual report scope: concise birth/cycle context; independent BaZi, Blind School, Lu Ming, Zi Wei and Heluo readings; cross-system agreement, differences and unresolved points; five stable life dimensions.
- Email is the primary delivery channel. This prototype illustrates a secure-link delivery model; payment, report generation, identity verification and mail delivery are not connected.

## Run locally

```bash
python3 -m http.server 4173
```

Open `http://localhost:4173` from this folder.

## Important prototype limitations

- All chart values, palace stars, hexagrams, five-element bars and cycle labels are illustrative placeholders. They are not calculated from the entered birth data.
- The browser does not contain or reproduce the metaphysics engine.
- Birth details are only persisted to browser local storage if the user checks the explicit remember-on-this-device option.
- Checkout is a review-only simulation. No price is configured and no payment is taken.
- No email is sent and no PDF is generated.
- Production must render only API results backed by production-admitted engine capabilities, calculation references, rule IDs and evidence IDs.

## Original visual assets

`assets/hetu-master.svg` and `assets/liorin-logo-master.svg` are byte-identical copies of the uploaded master SVGs. The source SVG markup is not edited. The Hetu motion is applied to the `<img>` element through CSS `transform: rotate(...)`; the paths, nodes, colors, viewBox and proportions remain untouched. Motion can be paused and is disabled for `prefers-reduced-motion` users.

SHA-256:

- `hetu-master.svg`: `7bafbd74888912371660965896c81aa9e32e9475db545ffd1444c7d439e0bd28`
- `liorin-logo-master.svg`: `33b9c0dbababd0eabb16832da3c2936a94d0e8ebba53ecbfa70bde9bd68f8f4d`

## Validation

```bash
npm test
```

The static validation checks JavaScript syntax, required A-product journey elements, the absence of B/NFC product language in the application UI, and the integrity of the original SVG masters.
