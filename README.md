# Pinch Draw

Pinch Draw is a browser-based, hand-tracking drawing app built with Next.js and MediaPipe. It uses the webcam to detect fingertip pinch gestures and turns them into drawing input, with a playful underwater theme and gamified sketch prompts.

The app code is driven by the single-page interface in `index.html`, while the Next.js app serves that page through `/pinch_draw.html` in `src/app/index.html/route.ts`.

Run it on https://samarthxmathur.github.io/HowdyHack26.

## What the app does

- Lets you draw in the air using pinch gestures with your thumb and index finger
- Starts in a title screen and mode picker
- Includes a Solo Quick Draw mode for sketching by yourself
- Includes a Double Drawdown mode where two players draw the same prompt and vote on the winner
- Uses MediaPipe Hand Landmarker to track hand position and gesture state
- Lets you switch colors via hand signs and lock the selected color
- Supports brush-size changes, bubble-paint effects, clearing the canvas, and saving drawings as PNG files

## How to use

1. Open the app in a browser.
2. Click Start, then choose a mode.
3. Allow webcam access when prompted.
4. Position your hand in front of the camera so the thumb and index fingertips are visible.
5. Pinch with your thumb and index finger to begin drawing.
6. Release the pinch to stop drawing.
7. Use the on-screen toolbar or hand-sign gestures to choose a color, adjust brush size, clear the page, or save the canvas.

## Hand-sign color controls

Once the canvas is active, the app looks for simple gestures to switch colors. The exact gesture mapping is defined in the front-end logic in `index.html` and is designed to match the visual color cues in the UI.

## Run locally

Install dependencies and start the app:

```bash
npm install
npm run dev
```

Then open:

```text
http://localhost:3000
```

This project expects webcam access, so it works best on `localhost` or on an HTTPS deployment.

## Project structure

- `index.html` — main UI, drawing logic, hand-tracking integration, and game flow
- `src/app/page.tsx` — redirects the homepage to the drawing page
- `src/app/index.html/route.ts` — serves the browser app HTML from the project root
- `next.config.ts` — Next.js config for the page route

## Browser requirements

- Webcam-enabled browser
- Desktop Chrome, Edge, or Safari are the best fit
- Works best with good lighting and a visible hand in frame

## Notes

This is a browser-only prototype: the camera feed is handled locally in the browser, and the app does not send the webcam stream to a backend service.
