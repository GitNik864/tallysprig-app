Tallysprig V4 — GitHub Pages release
===================================

V4 keeps V3.2 features and adds:
- mandatory separate, unchecked Privacy Policy and Medical Disclaimer acknowledgements;
- consent record with policy versions and acceptance time saved locally;
- re-acknowledgment if a version changes, without erasing meals;
- dedicated offline-readable privacy.html and medical.html;
- Privacy & data view with complete JSON backup/restore (Merge or Replace), plus local deletion;
- existing CSV import/export is unchanged;
- versioned offline app-shell cache.

INSTALL: Extract this ZIP. Upload the FILES and the icons FOLDER directly into your existing
GitHub Pages repository main/(root), replacing matching files. Do not upload the ZIP itself.
Visit the website while online to install the new offline cache, then test on Android.
DO NOT uninstall the existing app or clear site data. Export CSV before you update.

CRITICAL: The privacy and medical documents are project drafts, not lawyer-reviewed policies.
Fill in an identifiable operator and real privacy contact before a broader public release;
verify actual third-party data practices; obtain legal review appropriate to user ages and launch regions.
The front-end acknowledgement record is in browser localStorage, not a server-verified signature.

DATA: The original journal storage key (dayplate_v1) is unchanged. Backup JSON includes meal
entries, custom foods, favorites, and energy reference, but not camera data, product cache, or
agreement acknowledgements. A restored backup requires a new acknowledgment on another device.

BACKUP SAFETY: Keep JSON files private (they contain food logs). Merge skips duplicate IDs;
Replace overwrites saved log/library/favorites/reference after confirmation.

For Open Food Facts rate limits/attribution, see on-screen scanner notice and links.
