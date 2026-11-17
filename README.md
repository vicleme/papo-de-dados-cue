# Papo de Dados Cue

[Leia em português](README.pt-BR.md)

A mobile-first "who speaks next" board for a podcast or live presentation. Every phone in the same room shows the same screen: who spoke before, who speaks now, the next three speakers, and a short topic for each turn. The background takes the color of the current speaker. When someone finishes their part, they tap **Advance** on their own phone and every device updates.

The bundled script is the 18-minute episode "Papo de Dados: Economia da inferência" (70 turns, 6 speakers).

## Run locally

```bash
npm install
npx netlify dev     # http://localhost:8888, full sync across devices on your network
npx serve public    # static only: falls back to local mode (tabs of the same browser)
```

## Deploy

1. Push this repository to GitHub.
2. In Netlify: **Add new site > Import from Git**. No build command; publish directory `public` and functions directory `netlify/functions` are already set in `netlify.toml`.
3. Share the site URL. Everyone opens it, types the same room code, and picks their own name.

## How it works

- `public/data/script.json` holds speakers (name, color), blocks and turns (`[speaker, topic]`).
- `public/js/core/state.js` is the pure state machine, shared by the browser and the function. `advance` and `back` carry the index the sender was looking at, so a double tap or two people tapping at once never skips a speaker.
- `netlify/functions/room.mjs` stores one small record per room in Netlify Blobs. Phones poll it once per second (`204` when nothing changed).
- `public/js/sync/` contains the adapters (`http`, `local`) behind one small interface, so another backend can be plugged in.
- `public/js/ui/` renders the join screen and the stage; all texts are in `ui/strings.js`.

## Customize

Edit `public/data/script.json`: change names, colors (`#rrggbb`), topics or add blocks. Avoid the same speaker in consecutive turns, otherwise it takes two taps.

## Slides

A turn can carry a third item, the slide number to bring up when that turn starts: `["lucas", "Topic", 2]` (a fourth text item adds a note). Slide names live in the top-level `slides` list. The stage shows a `▶ Slide N` tag on those turns (previous, current and next) and, on the current turn, which slide is on air.

## Side panel (full lines)

The **Falas** button in the header switches between two modes, saved per device (it is not synced between phones):

- **Hidden** (default): the screen looks exactly as before.
- **Visible**: the screen is split in half. The usual board on one side; on the other, the full text of the previous turn, the current one (highlighted) and the next two. On narrow portrait screens the halves stack top and bottom.

The text lives in `public/data/falas.md`: a `## Block name` (same as in `script.json`) and, for each turn, a `### Speaker | topic` followed by the text, in script order. Turns without text show the topic with a notice. If an entry's speaker does not match the script, it is ignored, so someone else's lines never show up.

## Limits

The room code works as a shared password: anyone who knows it can control the room. Updates reach other phones in about one second. The UI is in Portuguese only.
