TALLYSPRIG I2 — SIMPLE MODE (BUILT ON I1 / V7.7)

NEW: Simple Mode in Settings & Data. Disabled by default. Switch it on to get larger tap targets and collapsible settings, workout sections, exercise sets, history actions, and meals. Clicking an arrow expands details. Every prior food, Health Mode, Workout Bank, sound, workout and rest timer feature is preserved. It uses the existing preferences storage key and is included in full backups.

DEPLOY: Make a full JSON backup from the working app before updating. Upload the CONTENTS of this ZIP to the repository ROOT and replace matching files (index.html, sw.js, etc.). Do not clear browser storage. The service worker has a new cache identifier.

TALLYSPRIG I1 — HEALTH PROFILE UNIT IMPROVEMENTS (V7.7 BASE)
=================================================================
- Health Mode supports Metric (cm, kg) or US (ft + in, lb) entry.
- Height/weight entry accepts at most one decimal place (feet are whole).
- Switching units converts the current unsaved height/weight values.
- Height and weight are still stored in cm/kg, preserving previous estimates
  and compatibility with earlier V7.7 journal / fitness records and backups.
- Unit choice is saved in the health profile and included in full JSON backups.
- Privacy Policy v1.6 describes the new unit-choice preference.
- All V7.7 features including Workout Bank, personal-best animation + optional
  chime, rest timer + optional chime, cardio, exercise reordering, etc. remain.
- Before uploading: Settings -> download a FULL JSON backup.
- Upload the EXTRACTED FILES to the root of your existing GitHub repository.
- DO NOT delete app data or uninstall the existing Android PWA.
- After deployment reopen while online, re-acknowledge the updated Privacy
  Policy, and test metric / US editing and saved profile persistence.

TALLYSPRIG V7.6 — WORKOUT BANK + PERSONAL BESTS
================================================
Complete GitHub Pages site. Install by replacing the files at the ROOT of your
existing tallysprig-app repository; keep the icons/ subfolder intact.

WHAT'S NEW
- Fitness → Workout Bank: save a workout as a reusable template, even with zero
  sets completed. Bank templates are not counted as completed sessions.
- From a draft with no completed sets, "Save to Workout Bank" saves the plan
  and removes that unfinished draft after confirmation. Completed sessions are
  left intact when you save a template from them.
- Workout Bank lets you Use today, Schedule for a date, Edit, or Delete.
- Saving a template keeps exercise order, planned weight/reps or time/miles,
  and rest settings. Actual results and set comments do not transfer.
- Personal-best feedback: a brief celebration when an ACTUAL completed working
  set exceeds an earlier completed record for that exercise (weight, reps, or
  cardio distance). No comparison against planned values, no first-entry
  celebrations, and no repeated animation for the same metric/set.
- Fitness overview has an optional personal-best celebration switch.
- Previous nutrition and workout features, offline behavior, and backups remain.

DEPLOY
1. In the current app, Settings → Download full backup. Store privately.
2. Extract this ZIP (do not upload the ZIP itself).
3. GitHub → tallysprig-app → Add file → Upload files.
4. Upload the extracted contents to the repository ROOT and replace matching files.
5. Commit "Update Tallysprig to V7.6". Wait for Pages deployment.
6. Open the installed app online once. Do not uninstall or clear local site data.
7. Read and accept Privacy Policy v1.5 if prompted; test bank and celebrations.

NOTE: This is a browser-local prototype. Every browser/device uses separate
storage. Export full backups regularly, especially before updates. Legal policy
text remains a draft pending verified operator contact and legal review.


V7.7 SOUND OPTIONS
- Fitness > Overview now has two independent OFF-by-default sound toggles.
- Personal-best sound accompanies the existing animation only when both toggles are enabled.
- Rest-time sound plays when a running rest timer ends; manual Stop does not play a cue.
- Both sounds are synthesized locally via Web Audio; no audio downloads or extra dependencies.
- Test sound buttons are provided. The Android browser/OS may delay or suppress sound while backgrounded, locked, or muted.
- All V7.6 features and storage keys are retained. The updated cache name forces a fresh deployment.
