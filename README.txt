TALLYSPRIG V3.2 — NUTRITION DATA TRANSPARENCY

WHAT'S NEW IN V3.1
- Displays an accuracy disclaimer every time a scanned food is reviewed.
- Clearly names Open Food Facts as the source and links to the specific product page.
- Shows "Information incomplete" when calories or any macro value is missing.
- Marks missing nutrient fields, keeps them blank, and requires a value before logging.
- Marks saved scanned foods as originally sourced from Open Food Facts.
- All V3 scanning, favorites, offline PWA, food editing and history features are retained.

EXISTING V3 FEATURES
- Scan EAN/UPC grocery barcodes with a phone camera.
- Scan a barcode from a saved image, or manually enter 8–14 numeric digits.
- Look up packaged-food nutrition using the Open Food Facts v3 API.
- Verify or edit values and serving amounts before logging.
- Optional "Save in My Foods" for convenient future use.
- A 30-day, 50-product local lookup cache for revisits. New products require internet.
- Original V2.2 UI, favorites, custom foods, food editing, energy reference, confirmation prompts, and CSV import/export remain.
- Your existing food log remains in the SAME browser's localStorage key (dayplate_v1). Do not clear browser site data.

PUBLISH AN UPDATE TO YOUR EXISTING GITHUB PAGES SITE
1. FIRST, export your current food log as CSV (Foods → Export CSV) as a backup.
2. Open your existing GitHub repository, tallysprig-app, and select Add file → Upload files.
3. Upload the CONTENTS of this ZIP, not the ZIP itself. Keep index.html, sw.js, manifest.webmanifest and icons folder at the repository root.
4. Confirm the replacement of index.html and sw.js and commit the changes.
5. GitHub Pages deploys from main / (root). Wait for completion under Actions; then refresh your installed Tallysprig app while online.
6. If the old interface persists, fully close and reopen it, or reload online. The service-worker cache version was incremented to V3.1.
7. Check an existing food entry remains before testing scanning. You should NOT uninstall the PWA or clear site data to update it.
8. Open Foods → Scan barcode. Test a known packaged barcode while connected to the internet, confirm its data, then log a serving.

TESTING & COMPATIBILITY
- A live barcode scan requests camera permission. Most browsers require HTTPS (GitHub Pages supplies it).
- Camera scanning/photo reading lazily loads Apache-2.0 licensed html5-qrcode v2.3.8 from jsDelivr on first use. If this cannot load, manually enter the barcode. Manual barcode lookup does not need the library.
- Data retrieval requires an internet connection for uncached products, and Open Food Facts can return missing/out-of-date data or temporary API errors. A local product cache reduces repeat requests.
- The original food journal and its offline shell still open without internet.
- If scanning cannot start, check permission and use the manual fallback.
- Product data is stored locally in the journal; it is not uploaded to GitHub.

OPEN FOOD FACTS LICENSE AND ATTRIBUTION
- Product facts are provided by Open Food Facts community contributors, https://world.openfoodfacts.org/ .
- Database license: Open Database License 1.0 (ODbL), https://opendatacommons.org/licenses/odbl/1-0/ .
- Individual database contents and any reuse, combination, or derivative databases are subject to applicable Open Food Facts terms and share-alike requirements; confirm compliance prior to public/commercial expansion.
- We deliberately do not copy product photos in V3 because product images have their own CC BY-SA terms.
- API documentation: https://openfoodfacts.github.io/openfoodfacts-server/api/ .
- IMPORTANT PRODUCTION NOTE: Open Food Facts requests an identifying custom User-Agent. Browsers don't let JavaScript reliably override that header. The prototype performs direct browser-side GET requests; for sustained public deployment, coordinate a compliant browser-client solution with Open Food Facts or use a controlled serverless proxy that identifies Tallysprig properly and enforces rate limits.
- API rate limits and data completeness are controlled by Open Food Facts, not Tallysprig. Do not bulk-fetch or scrape their API.

BARCODE SCANNER DEPENDENCY
- html5-qrcode v2.3.8 by mebjas and contributors, Apache License 2.0, https://github.com/mebjas/html5-qrcode .
- It is fetched by the browser from https://cdn.jsdelivr.net/npm/html5-qrcode@2.3.8/html5-qrcode.min.js when scan camera/photo is requested.
- No scanner library code has been copied or bundled with these project files.

PRIVACY
- No account, analytics, advertising, or proprietary server in Tallysprig.
- Barcode/product lookup sends the queried barcode to Open Food Facts; the optional scanner library is loaded from jsDelivr on demand.
- Food logs are kept in the browser's localStorage and can be deleted by clearing browser app/site data. Regular CSV exports are recommended until robust full backup/restore is available.

The Tallysprig name and code are not represented as trademark-cleared; verify before formal public launch.


V3.2 — RATE-LIMIT SAFEGUARDS
- Open Food Facts publishes a 15 product-read requests/minute limit per public IP address. It is NOT 15 new foods per day.
- The scanner displays a short explanation of this limit.
- Tallysprig automatically queues uncached lookups after its own conservative threshold of 12 requests in a rolling 60-second window on this device. The countdown updates until the request is automatically sent, unless the scan dialog is closed.
- Previously cached barcodes are retrieved instantly without consuming another network request.
- Local pacing carries across refreshes when browser storage is available. It cannot monitor other devices sharing your public IP address.
- HTTP 429 or 503 responses trigger a 60-second browser-side cooldown; the message explains what happened.
- This release does not change saved foods, food logs, scanned-product cache format, or barcode scanner library.
- The Open Food Facts API asks clients to identify via a custom User-Agent. Browser-based requests cannot set this header directly; full API identification compliance will require an approved approach or small backend before public scaling.

Read the provider's current limits at: https://openfoodfacts.github.io/openfoodfacts-server/api/
