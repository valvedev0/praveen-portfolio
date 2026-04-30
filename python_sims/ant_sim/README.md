# Ant Simulation

This folder contains the generated static web package for `simulations/ant/ant_sim.py`.

## Files

- `index.html`
- `styles.css`
- `app.js`

## How to play

- Ants automatically navigate toward their assigned colored targets.
- Click in the arena to add new targets dynamically.
- Press R to reset the entire simulation.
- Press P to pause/resume the simulation.
- Press T to toggle ant path visualization.
- Watch the diagnostics panel to track arrival statistics.
- Ants use seek, wander, and obstacle-avoidance behaviors.

## Publish

1. Copy the contents of this folder into the repo root or publish directory used by your static hosting setup.
2. Commit and push the files.
3. Open the published URL. The export uses only relative paths, so no extra build step is required.

## Regenerate locally

Run this from the project root:

```powershell
.\build_web.bat ant
```

## Notes

- Real-time pathfinding with autonomous behaviors.
- Interactive target placement and simulation control.
- Detailed performance and diagnostic telemetry.
- Static HTML/JS export ready for any web host.
