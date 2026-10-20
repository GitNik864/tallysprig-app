Tallysprig V5 — GitHub Pages deployment

WHAT IS NEW
- Optional daily macro doughnut chart replaces the four Today dashboard cards. Its center shows recorded calories for the selected day.
- Settings & data > Appearance: enable/disable chart and select Light/Dark theme.
- Preferences persist locally and are included in new V5 JSON backups. Old V4 backups still work.
- All V4 features, mandatory agreement, legal documents, barcode scanner and offline app shell remain.

HOW TO UPDATE
1. In your existing app, go to Settings/Data and download a FULL JSON backup first. Keep it private.
2. Extract this ZIP.
3. In your existing GitHub repo, upload/replace these files at the ROOT: index.html, sw.js, manifest.webmanifest, privacy.html, medical.html, README.txt and icons/.
4. Commit to main and wait for GitHub Pages deployment.
5. Open the hosted app while online, then reopen if an older offline shell is still displayed. Do not uninstall or clear site data.
6. Go to Settings (bottom tab on mobile) to switch modes and enable the chart.
7. Test selected-day totals and both themes on your phone.

HOW THE DOUGHNUT WORKS
The chart represents protein/carbohydrate/fat contributions using 4/4/9 kcal per gram. The number in the center is the day's recorded calories, which may differ slightly from the 4/4/9 sum because nutrition labels and rounding can differ. Empty dates show an empty ring. This is a visual summary, not a calorie restriction or intake target.

Do not upload your personal food-log JSON/CSV backups to a public GitHub repository.
