# Frontend / Backend Integration Boundaries

The demo is intentionally static. Production integration should preserve these boundaries:

- Birth form submits a validated request to the chart API. Sensitive birth data must not appear in URL query strings, client analytics, logs or error telemetry.
- The frontend renders chart API responses only. It must not implement stems/branches, calendar conversion, BaZi, Zi Wei, Heluo, Na Yin, rule hit detection, conflict resolution or auspiciousness inference.
- Each displayed interpretation should be traceable to calculation reference, rule ID, evidence ID, assertion status, conflict resolution and semantic mapping version where applicable.
- Unavailable / not admitted capabilities must be shown as unavailable, never filled with demo or guessed results in production.
- Annual report preview is generated from the actual selected year and admitted capabilities. Report price, tax, delivery SLA and refund terms must be configured from approved server data.
- Payment status, report status and download authorization are server-authoritative. Client state cannot mark an order as paid or a report as delivered.
- Email delivery uses a verified address and secure, expiring access link. Email subjects must not contain birth data or sensitive interpretation.
