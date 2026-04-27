# Laser Puzzle

This folder contains the generated static web package for `simulations/laser/laser_sim.py`.

## Files

- `index.html`
- `styles.css`
- `app.js`

## How to play

- Move the pointer to aim the laser pulse.
- Click inside the arena to move the emitter.
- Keep the emitter outside the green safety circles around each target.
- Use mirror reflections to hit the green targets.
- Avoid the moving red drones because hitting one loses the round.
- The safety circles grow and the beam pulse slows down as the level increases.
- Clear the board before the timer reaches zero.

## Publish

1. Copy the contents of this folder into the repo root or publish directory used by your static hosting setup.
2. Commit and push the files.
3. Open the published URL. The export uses only relative paths, so no extra build step is required.

## Regenerate locally

Run this from the project root:

```powershell
.\build_web.bat laser
```

## Notes

- Static export with relative asset paths.
- No Python runtime or package install required after export.
- Ready to copy into a GitHub Pages repository or any static host.
