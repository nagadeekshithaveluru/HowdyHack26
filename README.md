# Pinch Draw

Draw in the air. Pinch your thumb and index finger together in front of your webcam to draw on a canvas, and let go to stop.

Everything runs in your browser. Your video never leaves your computer.

**Try it:** https://samarthxmathur.github.io/HowdyHack26/

## How to use

1. Open the link above and click **Start**.
2. When your browser asks to use your camera, click **Allow**.
3. Hold your hand up so your thumb and index finger are fully visible in the camera view. A badge and frame at the top of the camera view show the pinch detector:
   - **Red:** no pinch (or a finger is out of frame).
   - **Green:** thumb and index fingertips are touching.
4. Pinch and hold green for about a third of a second. The screen splits into your camera (left) and a blank canvas (right).
5. Pinch to draw. The ring on the camera view marks the pinch point, and your drawing follows it on the canvas. Open your fingers to lift the pen.

Toolbar: pick a color, change the brush size, hide or show the camera, clear the canvas, or save your drawing as a PNG.

### Tips

- Use a well-lit room with your hand facing the camera.
- Keep both your thumb and index finger inside the camera frame, or drawing stops.
- Both fingertips must be inside the ring for it to count as a pinch.
- Works best in desktop Chrome, Edge, or Safari with a webcam.

## Run it on your own computer

The camera only works on `https://` or `localhost`, so don't just double-click the file.

```bash
git clone https://github.com/YOUR-USERNAME/pinch-draw.git
cd pinch-draw
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Publish your own copy on GitHub Pages

1. Create a new **public** repository named `pinch-draw` on github.com.
2. Add `index.html` and `README.md`, either by dragging them onto the repo page ("Add file → Upload files") or from the command line:

   ```bash
   git init
   git add index.html README.md
   git commit -m "Pinch Draw"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/pinch-draw.git
   git push -u origin main
   ```

3. Go to **Settings → Pages**. Under "Build and deployment", set Source to **Deploy from a branch**, choose **main** and **/ (root)**, then **Save**.
4. After about a minute your app is live at `https://YOUR-USERNAME.github.io/pinch-draw/`.

## Settings you can tweak

At the top of the tracking section in `index.html`:

| Setting | What it does |
| --- | --- |
| `PINCH_R` | Size of the ring. Larger is easier to pinch, smaller is stricter. |
| `PINCH_R_OFF` | How far apart your fingers can drift before the pen lifts. |
| `MARGIN` | How far inside the camera edge your fingers must stay. |
| `SETTLE_FRAMES` | Frames to wait after a pinch starts before drawing. |
| `HOLD_FRAMES` | How long to hold a pinch to open the canvas. |

## Troubleshooting

- **No camera prompt:** use https or localhost, and check the site's camera permission in your browser.
- **Stays red:** bring your hand toward the middle of the frame, show your whole thumb and index finger, and touch the fingertips together.
- **Won't draw:** fingers must be fully in frame and both fingertips inside the ring. Try raising `PINCH_R`.
- **Slow to start:** the hand-tracking model downloads the first time. Later visits are faster.
- **Slow or choppy:** close other tabs, or change `delegate: "GPU"` to `"CPU"`.

## Credits

Hand tracking by [MediaPipe Hand Landmarker](https://ai.google.dev/edge/mediapipe/solutions/vision/hand_landmarker).

## License

MIT
