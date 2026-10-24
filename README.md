# Saai Kumar Valves & Cocks storefront prototype

A responsive, no-build storefront for a plumbing and electrical wholesale shop. Open `index.html` in a browser or serve this folder from any static web server.

## Included

- Product catalog with category, brand and text filters
- Quote list with adjustable quantities, persisted in local storage
- Quote enquiry form for name, mobile, email, delivery pincode, area and notes
- Product-level WhatsApp enquiry links that include the product name and product URL
- Call, email and WhatsApp contact actions
- Sourced sample product details and images, with a source link on each catalog card

## Before launch

1. Update the shop name and contact values in `app.js` (`SHOP`) if they change.
2. Review every sample product, size, image and brand availability against the shop's live stock and approved supplier materials. Image URLs currently point to manufacturer or retailer-hosted assets; use assets the shop is authorized to publish and consider serving them from your own CDN.
3. Connect `submitQuote()` in `app.js` to the quote backend. It currently prepares a local demo confirmation only and does not send or store customer information on a server.

## Main files

- `index.html` — page structure and quote form
- `styles.css` — layout and responsive styling
- `app.js` — catalog data, filters, quote-list and contact interactions
