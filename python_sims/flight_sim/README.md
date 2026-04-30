# Flight Simulation

This folder contains the generated static web package for `simulations/flight/flight_sim.py`.

## Files

- `index.html`
- `styles.css`
- `app.js`

## How to play

- Use W/↑ and S/↓ to increase or decrease throttle.
- Use A/← and D/→ to turn left or right.
- Press SPACE to toggle autopilot mode.
- Click in the arena to place a new waypoint (yellow square).
- In autopilot mode, the aircraft automatically navigates toward the waypoint.
- Monitor heading, speed, and throttle in the diagnostics panel.
- Bounce off boundaries at reduced velocity to stay in bounds.

## Publish

1. Copy the contents of this folder into the repo root or publish directory used by your static hosting setup.
2. Commit and push the files.
3. Open the published URL. The export uses only relative paths, so no extra build step is required.

## Regenerate locally

Run this from the project root:

```powershell
.\build_web.bat flight
```

## Notes

- Realistic flight physics with drag, acceleration, and max speed.
- Keyboard and mouse input for full flight control.
- Optional autonomous autopilot system for waypoint navigation.
- Real-time telemetry and performance diagnostics.
