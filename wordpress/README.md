# Install into WordPress + Divi

This is a homepage concept for the same platform family as FishChair: WordPress + Divi, compatible with an installed WooCommerce catalog. It does not replace the theme or configure WooCommerce.

## Recommended: bundled shortcode plugin

1. On a staging WordPress site, upload `wood-carving-decor-home.zip` using Plugins → Add New → Upload Plugin, then activate it.
2. Create a page using Divi. Choose the Blank Page template so the concept’s own navigation and footer are not duplicated.
3. Add a regular section, a single-column row, and a Text module. In its Text/HTML editing view, enter `[wood_carving_decor_home]`.
4. Set section and row padding to zero. Set the row width and max-width to 100%. Remove module margins and padding.
5. Preview the page. Keep the shortcode in the page content so the plugin detects it and loads its scoped stylesheet and footer JavaScript. Do not place it only in a Theme Builder global template without adapting the enqueue condition.

## Alternative: Code Module

Use `divi-code-module.html` in one full-width Divi Code Module with the same zero-padding settings. Upload the optimized JPEGs and replace all `assets/` prefixes, including those in `srcset`, with the absolute WordPress media directory URL. Requires a WordPress role allowed to save script tags. Do not use the shortcode plugin and Code Module together on one page.

All visual selectors are scoped to `#wcd`; no build tooling or frontend framework is required by WordPress. Content is editable in the supplied HTML; this is not a native Divi section JSON import and individual elements are not Divi visual modules.

## WooCommerce handoff

Collection cards currently open accessible design previews; all other destinations are real homepage anchors. After approved WooCommerce categories exist, replace each preview card’s href with its actual category permalink and remove its `data-design` and `data-image` attributes to allow normal navigation. Use verified term permalinks rather than guessing slugs. Replace the collection-preview notice when commerce is ready. No cart, checkout, account, prices, or commerce settings are changed by this package.

Confirm real contact details before replacing the preview contact notice with a live inquiry destination. Verify wood species, finishes, sizes, installation guidance, manufacturing statements, customization, pricing, and shipping before publication. The logo is reproduced as supplied; its microtype is not independent confirmation of manufacturing claims.

No WordPress instance or admin access was supplied. Validate the installed result in the actual Divi version, cache/minification setup, and WooCommerce environment before launch. A local browser preview cannot establish theme compatibility by itself.

Complete `docs/website-launch-checklist.md` before publication. This local preview intentionally uses noindex and has no invented production domain or production social URLs.
