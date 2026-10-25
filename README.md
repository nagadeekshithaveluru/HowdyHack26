# Pinch Draw

Draw in the air. Pinch your thumb and index finger together in front of your webcam to draw on a canvas, and let go to stop.

Everything runs in your browser. Your video never leaves your computer.

**Try it:** https://samarthxmathur.github.io/HowdyHack26/

## How to use

1. Open the link above and click **Start**.
2. When your browser asks to use your camera, click **Allow**.
3. Hold your hand up so your thumb and index fingertips are visible in the camera view. A badge and frame at the top of the camera view show the pinch detector:
   - **Red:** no pinch (or a finger is out of frame).
   - **Green:** thumb and index fingertips are touching.
4. Pinch and hold green for about a third of a second. The screen splits into your camera (left) and a blank canvas (right).
5. Pinch to draw. The ring on the camera view marks the pinch point, and your drawing follows it on the canvas. Open your fingers to lift the pen.

Toolbar: pick a color, change the brush size, hide or show the camera, clear the canvas, or save your drawing as a PNG.

## Change color with sign language

Once the canvas is open, make a hand sign and hold it for about half a second to switch colors. The matching color and its sign diagram highlight in the toolbar, and the cursor ring changes color. You can also click a color. Making a sign never draws.

| Color | Sign | Color | Sign | Color | Sign |
| --- | --- | --- | --- | --- | --- |
| Red | R | Orange | O | Yellow | Y |
| Green | G | Blue | B | Purple | P |
| White | W | Gray | L | Black | K |

Green/gray and blue/black would both use G and B, so gray uses **L** and black uses **K** (blac**K**). Change them in the `COLORS` list in `pinch_draw.html`.

Sign notes: **R** is index and middle fingers crossed. **O** is all fingertips meeting the thumb. **G** is index and thumb pointing the same way, and **L** is index up with thumb out at a right angle. **K** is a V with the thumb touching the middle finger, pointing up, and **P** is the same shape pointing down. Keep your hand facing the camera. The diagrams in the toolbar are simplified drawings.

### Tips

- Use a well-lit room with your hand facing the camera.
- Keep both fingertips (thumb and index) inside the camera frame, or drawing stops. The rest of your hand can leave the frame.
- Both fingertips must be inside the ring for it to count as a pinch.
- Works best in desktop Chrome, Edge, or Safari with a webcam.

## Run it on your own computer

Install [Node.js](https://nodejs.org/), then run:

```bash
npm install
npm run dev
```

Open http://localhost:3000. The camera works on `localhost` or an HTTPS deployment.

## Deploy

Deploy this Next.js project to a Next.js host such as [Vercel](https://vercel.com/). Import the repository and use the default Next.js build settings.

## Settings you can tweak

At the top of the tracking section in `pinch_draw.html`:

| Setting | What it does |
| --- | --- |
| `PINCH_R` | Size of the ring. Larger is easier to pinch, smaller is stricter. |
| `PINCH_R_OFF` | How far apart your fingers can drift before the pen lifts. |
| `MARGIN` | How far inside the camera edge your fingertips must stay. |
| `SETTLE_FRAMES` | Frames to wait after a pinch starts before drawing. |
| `HOLD_FRAMES` | How long to hold a pinch to open the canvas. |

## Troubleshooting

- **No camera prompt:** use https or localhost, and check the site's camera permission in your browser.
- **Stays red:** bring your hand toward the middle of the frame, show both fingertips, and touch the fingertips together.
- **Won't draw:** fingers must be fully in frame and both fingertips inside the ring. Try raising `PINCH_R`.
- **Circle twitches in bright light:** avoid direct light or sun on your hand or behind you, face a soft light source, and keep the hand a bit away from the lens. You can also lower `SMOOTH` or raise `RELEASE_FRAMES` in `index.html` for a steadier pen.
- **Corners are hard to reach:** the hand model needs to see most of your hand. If your palm is out of frame, tracking can drop. Keep more of your hand in view when drawing in a corner, or sit a little further from the camera.
- **Slow to start:** the hand-tracking model downloads the first time. Later visits are faster.
- **Slow or choppy:** close other tabs, or change `delegate: "GPU"` to `"CPU"`.

## Credits

Hand tracking by [MediaPipe Hand Landmarker](https://ai.google.dev/edge/mediapipe/solutions/vision/hand_landmarker).

## License

MIT
