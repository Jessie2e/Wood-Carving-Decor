# Design, asset selection, and verification

## Reference

Inspected the correct public FishChair homepage in the browser on November 6, 2026: lakehouse/dock hero with green fish chairs. Its DOM identifies Divi v5.13.1, WordPress asset paths, Divi Pixel, and WooCommerce styles. The navigation collapses to a menu on narrower screens. It uses expressive serif headings, a large photographic hero, a contrasting primary shopping action, an organic curved transition, alternating product/editorial sections, a clear collection hierarchy, repeated shopping invitations, and FAQs. The wood-carving concept adapts the clarity, image-led storytelling, and curved framing using quieter ivory/teal colors and architectural typography. No private source was accessed or copied.

## Asset inventory

Source: `/Users/home/dropbox-woodcarving-assets/`. Originals preserved. `asset-files.json` records the focused ornamental asset inventory; `inventory.html` provides a local visual contact sheet. The larger source collection also contains finials, statuary, religious reliefs, propellers, size diagrams, PSD originals, and a separate Island Post Cap brandmark. Those are not used to position this ornamental carving homepage.

| Selected source | Appearance / use |
|---|---|
| WoodCarvingDecor brandmark PNG | Actual lion emblem and navy wordmark; header |
| appliques-baroque-front01.webp | Detailed symmetrical acanthus scroll on blue; hero and appliqué collection |
| appliques-baroque-rightperspective01.webp | Alternate angled view; retained detail candidate |
| appliques-lionshead-front01.png | Lion face relief and surrounding foliage; collection |
| wood-carved-lion-corbel-01.webp | Sculptural lion-head corbel on blue; collection |
| capital-flowingleaves-front01.webp | Leafy classical capital on blue; collection |
| appliques-baroque-installed02.webp | Cream fireplace with ornamental detail; editorial application |
| appliques-swan-front01.webp | Ornamental swan composition; final invitation |

The supplied imagery already uses rich blue product backgrounds. Selected copies are resized to 600/1200px JPEG variants with responsive srcset; logo is 320px. Existing WebP and original selected copies remain in the working asset folder, while WordPress/dist packages contain only optimized assets actually used. No generated or stock imagery was added. No genuine before/after pairing or independent brand history document was found in the reviewed inventory.

## Validation

- Browser checked widths 320, 375, 768, 1024, 1440, 1920: document width matches viewport, with no horizontal overflow.
- Reviewed phone hero, tablet footer/FAQ, desktop hero, and asset compositions visually.
- Tested mobile menu open, navigation selection and close; collection preview open and close; FAQ expansion.
- All internal anchor targets exist. Loaded content images resolve. The dialog image receives its src when a card opens.
- JavaScript syntax check passed with `node --check script.js`.
- Production preview assets packaged into `dist/`; WordPress plugin ZIP and Divi Code Module alternative included.
- No Lighthouse score is claimed. No actual WordPress instance was supplied, so PHP execution, Divi theme conflicts, cache plugins, and WooCommerce integration require staging verification.

## Pending before launch

No publication authorized or performed. Preview is noindex. Confirm product facts, contact details, ordering paths, client-approved copy, final domain, and commerce categories. The social sharing launch checklist is retained; production OG image/absolute metadata, final-domain crawler/MIME checks, and debugger verification remain pending until the domain and design are approved. No production URL has been invented.
