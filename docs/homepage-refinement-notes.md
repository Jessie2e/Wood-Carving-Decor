# Homepage refinement notes — local review

## What changed

- The original single-image hero slideshow and its framing, transitions, and controls are retained. It now features five linked products: Baroque Appliqué, Rabbit Statue, Fire Flame Finial, Lion Head Corbel, and Flowing Leaves Capital.
- The collection introduction has more space between its heading and descriptive copy. Its copy sits beneath the heading on narrow screens.
- The existing living room asset with carved fireplace corbels now bridges “Designed to Complement Your Vision” and “The Right Design. The Right Proportion.” No new image was generated.
- The Proportion Finder reads sizes, image paths, and scene placements from `proportion-guide.js`. The original lion corbel scene and size choices are retained.

## Extending the Proportion Finder

Add a category object to `window.WCD_PROPORTION_GUIDES` in `proportion-guide.js`. Supply a straight-on room image, a transparent front-facing product image, the available heights, a verified reference height, and placement coordinates in scene percentages. The component builds the category selector when a second category exists, and creates its size buttons and overlays from the configuration. No separate component is needed for each category.

For trustworthy scale, first photograph or render each product and room scene from the same straight-on viewpoint. Record a known physical measurement in the scene (for example mantel height or opening width), then calculate the product's reference pixel height from its actual dimensions. The present lion composition uses the supplied scene and its existing, visually calibrated placement values. It is an illustrative comparison, not a measurement tool; the two placements use different reference pixel heights. Confirm product dimensions and installation clearance before ordering.

## Assets and decisions still needed

- For each new category: a straight-on room scene with a known physical reference dimension; a transparent, straight-on product cutout; verified size options and actual dimensions; and approved placement points.
- Confirm whether each additional category should show one or two pieces, and whether the client wants a shared neutral scene or category-specific interiors.
- The current living room scene is an existing supplied asset and carries the site's existing disclosure that some images are supplemented using AI. Confirm client approval for this placement before publication.

## Local verification

At desktop, tablet, and phone widths, the homepage had no horizontal document overflow. The five hero slides loaded and their manual controls selected one image at a time on desktop and mobile. Mobile navigation opened. The existing lion corbel size controls updated both overlays and the status text at 10 and 16 inches. The Baroque hero link opened its matching catalog detail page. The living room scene loaded at tablet width. No browser console errors were observed. Shop page structure was left unchanged.

Publication checks, including the retained website launch checklist and final-domain social metadata verification, remain for the later launch pass. No commit, push, or deployment was made.
