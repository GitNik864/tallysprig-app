TALLYSPRIG V8.1.2 — ANDROID DISPLAY/ICON UPDATE

Cumulative release based directly on V8.1.1 (and therefore V8.1, V8.0.1, I2.1, I2, I1 and V7.7).

What is fixed:
- Includes V8.1.1’s clearer Default Mode visuals, touch feedback and the effects preview in Settings > Display mode.
- Uses NEW ICON FILE PATHS in manifest.webmanifest, so Android/Chrome can detect icon changes. Existing installed app identity is unchanged (id, scope, start_url).
- Updates the build label to V8.1.2 and offline shell version.

How to install:
1. Open your previous Tallysprig and export a FULL JSON BACKUP. Keep the backup somewhere outside the app.
2. Extract this ZIP. Upload the full CONTENTS to the ROOT of your existing GitHub Pages repo (including new icons/ files). Replace index.html, manifest.webmanifest and sw.js, and commit. Do NOT place everything inside a subfolder.
3. Reopen Tallysprig while online after GitHub Pages publishes. Settings shows 'Current build: V8.1.2'.
4. To check Default Mode, open Settings > Display mode, select Default, then tap 'Try Default effects'. It also has visible colored accents throughout the app.
5. Android launcher icon updates are controlled by Chrome and Android and may require a 'Review app update' action or take time. The new manifest icon URLs signal a change, but no web developer can guarantee immediate replacement of an already-installed launcher icon.
6. Please do not clear website storage or uninstall until you have independently verified your full JSON backup. Browser local data is independent of GitHub repository files.

All nutrition, scanning, workout, cardio, Workout Bank, UI mode, local history, and full JSON backup features are retained.
