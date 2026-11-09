# Paper Airplanes — Schematic (round 1 draft)

**Track:** A. Family play (simple, graphic, few words). The printed sheet is the product.
**Status:** Draft. Nothing built. Waiting on answers in `convo/convo v0.1.md`.
**Platform:** plain HTML/CSS/JS, no build, GitHub Pages (inside Felix-Maze, like Learning to Draw and Learning Kangaroo). **No database.**
**Conversation:** `convo/convo v0.1.md`

## Purpose

Teach Felix to fold a good plane by himself, with precision. The sheet is the paper you fold: the lines are printed exactly where the creases go, numbered in order, so following them step by step turns the sheet into the plane. Flying it is the reward; folding carefully is the lesson.

## The idea in one picture

```
 FRONT (printed side up)                     BACK
 ┌──────────────────────────┐               ┌──────────────────────────┐
 │ Paper Airplanes #PA-01   │               │ lines for the steps you  │
 │        ┊ 1 (in)          │               │ do after turning over    │
 │  ╲  2  ┊  2  ╱           │               │                          │
 │   ╲ ↷  ┊  ↶ ╱  dashed = in│              │  ─·─·─ = out (mountain)   │
 │    ╲   ┊   ╱             │               │                          │
 │     ╲  ┊  ╱  3 …         │               │                          │
 │ ruler: |----1 in----|    │               │ step pictures, tiny      │
 └──────────────────────────┘               └──────────────────────────┘
```

## The sheet (proposal, to confirm)

- US Letter 8.5 × 11 in, printed **at 100%**, two-sided. Drawing units 1/100 inch, same as the other sub-projects.
- **Valley fold (fold toward you, "in")**: dashed line. **Mountain fold (fold away, "out")**: dash-dot line (the origami standard), so a solid line can stay for the paper's edge and cut lines. *(Your idea was solid = out; see question 3.)*
- Every fold line has its **step number** at one end, a **curved arrow** showing which way the paper moves, and a small **"in" / "out"** label.
- **Order:** step numbers 1, 2, 3 … Lines for steps done with the printed side up go on the front; after "turn it over", the next lines are on the back, lined up through the paper.
- **Scale check:** a 1-inch (and 2-cm) ruler bar on each sheet. If it measures wrong, the print was scaled.
- **Margins:** most home printers can't print the outer ~¼ inch. Lines stop short of the edge; folds are still lined up from corners and edges.
- A small **step strip** (tiny pictures of the paper after each step) runs along one edge, so you can check you're on track.
- Header "Paper Airplanes #PA-01 · The Dart", footer with the plane's name and where the design comes from.

## Planes to start (proposal: classics, traditional designs first)

| # | Plane | Why | Difficulty |
|---|---|---|---|
| 1 | Classic Dart | The one everyone learns: fast and straight | ● |
| 2 | Wide-wing Glider | Floats slowly; teaches big wings = more lift | ● |
| 3 | Square Glider (flat-nose) | Very few folds; tough nose | ● |
| 4 | Arrow / Bulldog Dart | Blunt nose, sturdier dart | ●● |
| 5 | Nose-lock plane | A small flap locks the folds shut; good long glides | ●● |
| 6 | Stunt / loop plane | Flaps bent up make it loop | ●● |
| 7 | Hoop (ring-wing) glider | Not a plane shape at all, but it flies | ●● |
| 8 | Canard | Small wing in front; teaches balance | ●●● |

Named designs by people still living (for example the record-setting "Suzanne") are left out unless you say otherwise (question 7).

## Pages (proposal)

| Page | What it does |
|---|---|
| `index.html` | The planes as cards (picture of the folded plane, difficulty, approved ✅ or not yet) |
| `plane.html?code=PA-01` | Front and back of the fold sheet, 🖨️ Print (100%, two-sided), step-by-step pictures on screen, its flight record |
| `pack.html` | Print several planes; a 🧪 alignment test sheet first (do the front and back line up on your printer?) |
| `flights.html` | The test log: every fold-and-fly test, best distance, time in the air, notes, approve ✅ |
| `research/` | How planes fly (lift, drag, weight, thrust; balance point; trim), in plain words with pictures |

## Testing and approval (no database)

- Each plane gets a test card: who folded it, how long it took, 3–5 throws (distance, time aloft, straight / curved / loop), notes, and a tweak to try.
- Tests are typed on `flights.html`, saved on the device, then **downloaded as a file** and committed (`data/flights.js`). The repo is the record.
- A plane is ✅ **approved** when it has been folded from the printed sheet and flies well at least 3 times, with no confusing step.

## Numbering

`PA-<nn>`: 01, 02 … in the order they're added. Retire, don't delete: a replaced sheet keeps its number as `retired`.

## Later (only if wanted)

- A simple on-screen flight simulator: throw a plane, see the glide path, move the balance point. Research first; the folding sheets come first.

## Rules

- No database, no accounts.
- True to scale: the ruler check must pass on paper before a plane is approved.
- Felix's first name only.
