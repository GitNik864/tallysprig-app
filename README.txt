TALLYSPRIG V7.2 — FITNESS PLANNING + RESULTS (WITH HEALTH MODE 6.1)
===================================================================
Complete GitHub Pages update package based on the latest V7 + Health Mode 6.1 files.

NEW IN V7.2
1. Fitness navigation icon is a monochrome outlined dumbbell, matching the other tab icons.
2. Copy any workout to a different date (from Fitness History, Recent or workout editor). The copied session is PLANNED, not completed; the exercise list and planned sets/weights/reps are copied, but actual logged results and completion flags are reset. Your original record is never changed.
3. Planned vs. actual per set: enter a target weight and reps, then enter the actual weight and reps performed. Mark a set complete once actual reps are entered. View sets completed / sets planned, recorded reps / planned reps, and sets reaching both planned load and reps.
4. Planned workouts can be started later from Fitness Overview or History. Unfinished sessions still autosave. Full JSON backup/restore includes planned workouts and per-set target/actual data.
5. Existing V7 workout sets are migrated locally: original weight/reps become targets, and completed rows also keep their previous actual data. Previously saved workouts and V7 JSON backups remain compatible.

RETAINED
All nutrition logging, barcode scanner, cached products, rate controls, macro charts, Health Mode 6.1 suggestions, privacy agreement, custom exercises, light/dark themes, and complete backup functions.

DEPLOY
1. In your current Tallysprig app, download a FULL JSON backup and store it privately.
2. Extract this ZIP, upload its contents to your existing GitHub repository root (overwrite matching files), then commit.
3. Wait for GitHub Pages deployment. Open installed app while online to refresh the offline cache. Do not uninstall or clear site data.
4. Test copying a session, editing planned and actual reps, opening it after a restart, and exporting/restoring a backup.

NOTE
Privacy Policy v1.2 and Medical Disclaimer v1.3 are unchanged because workout logs were already covered. No new remote service is involved; records stay on-device unless exported.
