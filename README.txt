TALLYSPRIG V8.3.5 — OPTIONAL ACTIVITY-ENERGY JOURNAL

Cumulative update on V8.3.4. All previous food, workout, Workout Bank, insights, and backup features retained.

- Fitness > Overview > Activity energy journal: optional manual estimates (date, kcal and source/activity), with edit and delete.
- Appearance and Fitness both include an independent setting to show an activity-energy summary on Today (OFF by default); works in Default, Classic and Simple, under the chart or summary cards.
- The activity display is separated from food logging and does NOT calculate calories remaining or a food allowance. Activity data do not modify macro/chart calculations.
- Workout storage and EVERYTHING JSON backup/restore (Replace and Merge) now include all activity records; backups from V8.3.4 and earlier remain supported.
- New Privacy Policy draft 2.0 requires acknowledgment. No accounts or server sync.

DEPLOY: Back up your current Tallysprig using EVERYTHING JSON, unzip, upload all files to repository root, commit, refresh online, check Current build: V8.3.5. Do not clear browser storage or uninstall the PWA. Test on the actual device.

TALLYSPRIG V8.3.5 — FOOD FAVORITES ALIGNMENT & LOUDER FITNESS SOUNDS

Cumulative update from V8.3.3. All previous Tallysprig features are included.

- On the Food Library screen, favorite stars and + buttons now share a centered action row, using matching round tap targets. They stay aligned for varying food-name and serving lengths, including on Android phones.
- Fitness personal-best and rest-timer chimes have about twice the prior signal amplitude. Existing independent opt-in sound toggles still apply. Final volume depends on the device/media volume and browser permissions; sounds are not guaranteed when the phone is locked or the app is backgrounded.
- No local data storage schema changes. Full JSON backup and restore fixes from V8.3.3 are retained.
- The app shell cache has a new version so deployed updates can be detected.

V8.3.3 BACKUP FIX (STILL INCLUDED)

Cumulative update from V8.3.2. Includes all previous Tallysprig features.

Settings > EVERYTHING backup · JSON:
- Backs up every meal on every date, custom foods and favorites, calorie references, all display preferences, Health Mode profile and macro references, workouts (draft/planned/complete), Workout Bank templates, custom and favorite exercises, fitness sound preferences, logging streaks, and cached barcode product records.
- Validates JSON before triggering download; file name begins tallysprig-EVERYTHING-backup-.
- Restore defaults to REPLACE to put back settings, health profile, all workouts and Bank templates. MERGE preserves existing settings and adds missing records INCLUDING Bank workouts. For a fresh install, MERGE also imports settings from the backup.
- Older V1 backups remain accepted. Missing sections in old backups no longer clear fitness or health on REPLACE.
- CSV is explicitly labeled MEALS ONLY and does not contain workouts, settings, Bank, or health profile.
- Legal acknowledgement and short-lived API rate-limiter counters intentionally remain device-specific and are not exported.
- Updated privacy draft to version 1.9 for inclusion of barcode cache and improved restore description; users must reacknowledge.

DEPLOY: Download a current full JSON backup first; extract this ZIP and upload ALL files to your existing GitHub Pages repository root, replacing matching files. Commit, reopen while online and confirm Current build: V8.3.5. Do not uninstall or clear data. Never upload personal JSON backups into the public repository.
