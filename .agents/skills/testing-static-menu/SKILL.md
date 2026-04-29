# Hero Static Menu Testing

Use this skill when testing the Hero static frontend menu UI.

## Devin Secrets Needed

None. The app is static HTML/CSS/JS and does not require login, API keys, or backend credentials.

## Local Run

From the repo root, serve the static files with Python:

```bash
python3 -m http.server 4173 --directory /home/ubuntu/repos/Hero
```

Open the app in Chrome at `http://127.0.0.1:4173`.

## Static Checks

Run these before browser testing:

```bash
python3 - <<'PY'
from html.parser import HTMLParser
from pathlib import Path
HTMLParser().feed(Path('/home/ubuntu/repos/Hero/index.html').read_text())
print('index.html: html parsed')
PY
node --check /home/ubuntu/repos/Hero/script.js
```

## Browser Test Flow

Record browser testing when visual UI changes are involved. Verify:

1. Initial `ESP` screen loads with avatar sidebar, active purple `ESP` nav, `PLAYERS`, `WORLD`, `VISUALS`, `User: Player`, and `FPS: 144`.
2. Clicking `AIM-BOT` changes the active nav state and shows `GENERAL`, `TARGET`, `EXTRA`, selects, toggles, and sliders.
3. Clicking `CONFIG` changes the active nav state and shows the config list, action buttons, and `default.cfg` info.
4. Clicking `MISC` changes the active nav state and shows the six-card layout: `MAIN`, `VIEW`, `VISUALS`, `MOVEMENT`, `OTHER`, `WORLD`.
5. Drag at least one range slider and verify both the purple track fill and the numeric label update.

## Notes

- If Chrome fullscreen/maximize helpers like `wmctrl` are unavailable, use Chrome fullscreen (`F11`) before recording.
- The UI is intentionally a static visual mockup; do not attempt to test or add game/cheat functionality.
