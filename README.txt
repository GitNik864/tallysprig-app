TALLYSPRIG V2.1 — INSTALLABLE WEB APP

This package contains the same V2.1 app and adds installability, offline loading after first visit, and CSV log import for moving from a downloaded file to a hosted HTTPS site.

IMPORTANT: Opening index.html from the ZIP or Android Files app will not fix ERR_FILE_NOT_FOUND. You MUST upload the site files to a stable HTTPS web host first.

RECOMMENDED: GITHUB PAGES (personal project, not commercial SaaS)
1. Sign in to github.com and create a PUBLIC repository, e.g., tallysprig-app.
2. Add every webapp file to the repository root: index.html, manifest.webmanifest, sw.js, icons/icon-192.png, icons/icon-512.png, and .nojekyll. Do NOT upload any personal CSV food logs.
3. Go to repository Settings > Pages > Deploy from a branch > main > /(root) > Save.
4. Once published, open the HTTPS site in Chrome on Android. Choose browser menu > Install app or Add to home screen.
5. Open it at least once online to cache resources; afterwards it should launch offline.
6. Your entries are stored locally in that browser/app, NOT in the GitHub repository.

TO MOVE YOUR PREVIOUS FOOD LOG:
1. Open the OLD V2.1 file from your Android Files app (rather than reopening a stale browser tab).
2. In V2.1 go to Foods > Export CSV and save that file.
3. On the NEW hosted Tallysprig site go to Foods > Import CSV.
4. Choose the exported CSV. Review the confirmation: it REPLACES existing entries on the new site.
5. Previous custom foods and favorites are NOT included in the old CSV and must be recreated.

LEGAL & PRIVACY:
- The new PWA uses standard browser web APIs and does not bypass Android file permissions.
- The site files contain no private food logs. DO NOT upload CSV files or private data.
- Data is saved using your browser's localStorage, which may be cleared by browser/system settings.
- A publicly reachable website is not a secret/private website even if the logs stay locally saved.
- GitHub Pages is appropriate for a personal/noncommercial prototype, subject to current GitHub terms.
- App brand name/trademark availability has not been formally cleared.
