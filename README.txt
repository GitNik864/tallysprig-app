TALLYSPRIG V8.3.3 — COMPLETE JSON BACKUP / RESTORE FIX

Cumulative update from V8.3.2. Includes all previous Tallysprig features.

Settings > EVERYTHING backup · JSON:
- Backs up every meal on every date, custom foods and favorites, calorie references, all display preferences, Health Mode profile and macro references, workouts (draft/planned/complete), Workout Bank templates, custom and favorite exercises, fitness sound preferences, logging streaks, and cached barcode product records.
- Validates JSON before triggering download; file name begins tallysprig-EVERYTHING-backup-.
- Restore defaults to REPLACE to put back settings, health profile, all workouts and Bank templates. MERGE preserves existing settings and adds missing records INCLUDING Bank workouts. For a fresh install, MERGE also imports settings from the backup.
- Older V1 backups remain accepted. Missing sections in old backups no longer clear fitness or health on REPLACE.
- CSV is explicitly labeled MEALS ONLY and does not contain workouts, settings, Bank, or health profile.
- Legal acknowledgement and short-lived API rate-limiter counters intentionally remain device-specific and are not exported.
- Updated privacy draft to version 1.9 for inclusion of barcode cache and improved restore description; users must reacknowledge.

DEPLOY: Download a current full JSON backup first; extract this ZIP and upload ALL files to your existing GitHub Pages repository root, replacing matching files. Commit, reopen while online and confirm Current build: V8.3.3. Do not uninstall or clear data. Never upload personal JSON backups into the public repository.
