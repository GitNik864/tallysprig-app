TALLYSPRIG V7.3 — WORKOUT LOGGER CONTROLS
=========================================
GitHub Pages replacement package, built on V7.2 + Health Mode 6.1.

WHAT'S NEW
- Discard an unfinished/draft workout directly from the Fitness overview or its editor; you no longer need to finish the session before deleting it. Confirmation is required.
- Mark sets complete even if planned and actual reps/weight are blank. Missing numbers remain unrecorded; the app does not turn blank values into zeroes. A workout can be finished when at least one set is marked complete.
- Add an editable comment to each set in a pop-up (up to 800 characters). Edit or clear it later. Comments appear in workout details and JSON backups.
- Set an optional exercise-wide rest duration in seconds. Individual sets can inherit that default or override it; entering 0 explicitly indicates no rest. A per-set Start rest/Stop rest countdown is available. The timer does not send push notifications and is not guaranteed to continue through closing the app; saved rest preferences do persist.
- Removing an individual set now requests confirmation.
- Copying workouts preserves planned rest settings but clears actual performance, completion, and set comments.
- Workout histories, existing V7.2 data, and earlier workout backup formats remain compatible.
- Fixed a backup restore issue with REPLACE mode discovered during testing.

RETAINED
All features from V7.2 + Health Mode 6.1, including food journal, barcode scanning, macro chart, health mode, theme, exercise library, workout history, offline PWA shell, and full JSON backups.

DEPLOY TO GITHUB PAGES
1. In your existing app, use Settings > Download full backup and store the JSON file privately.
2. Download and extract the ZIP; upload its CONTENTS (not the ZIP or an enclosing folder) to the ROOT of your existing tallysprig-app GitHub repository, overwriting matching paths.
3. Commit the changes, e.g. "Update Tallysprig to V7.3".
4. Allow GitHub Pages to deploy. Reopen your installed app while online to fetch the new shell. Do not uninstall it or clear site data.
5. The Privacy Policy has been updated from v1.2 to v1.3 to mention set comments and rest preferences. Users will be asked to re-acknowledge it. Medical Disclaimer remains v1.3.
6. Test: start and discard an unfinished workout; complete a set with blanks; add/edit a set comment; set rest defaults and overrides; copy a workout; reopen the app and verify autosaved notes/rest; export/restore full backup.

NOTES
- All workout records and preferences remain browser-local unless you choose to export them.
- Individual rest timers work while this app page is open. They are optional and not training advice.
- The Privacy Policy remains a prototype draft; it still needs a verified operator and privacy contact and suitable review before public launch.
