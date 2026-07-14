# Entertainment Hub — Frontend

Next.js (App Router) frontend for the Entertainment Hub, built to talk to the
`entertainment-backend` server from before.

## Setup

```bash
npm install
cp .env.local.example .env.local   # fill in Firebase + backend URL
npm run dev
```

Requires `NEXT_PUBLIC_API_BASE_URL` pointing at your running `entertainment-backend`
(default `http://localhost:5000`), plus your Firebase web app config (from Firebase Console → Project Settings → General → Your apps).

## Design system — "Ticket Stub Arcade"

Each of the 10 engines is presented as a torn-ticket-stub card — you "redeem" a
ticket to run that engine on your photo, echoing an arcade/ride-ticket feel that
matches the "Entertainment Hub" concept.

- **Colors:** Black `#0A0F0D` (background), Paper `#F3F8F2` (cards), Emerald Green
  `#22D57A` (primary actions), Chilli Red `#E63946` (kept only for errors/alerts —
  never used decoratively, since red must stay distinct for accessibility), Light
  Green `#86EFAC` (positive/Judge scores), Acid Lime `#C6FF3D` (Flirty/variety accent)
- **Type:** Bebas Neue (headlines), Work Sans (body), JetBrains Mono (scores/labels)
- **Signature element:** `.ticket-perforation` in `globals.css` — a dashed tear-line
  with circular notches punched into each card, like a real ticket stub

## Pages

```
/login                             → Sign in (email/password + Google) — professional, minimal
/register                          → Sign up — professional, minimal
/dashboard                         → Main dashboard home — professional layout, playful copy touches,
                                      per-user stats (Overall Score, Generations, Engines Tried, Plan),
                                      recent activity, CTA into the Entertainment Hub
/entertainment                     → Hub grid: photo uploader + 10 engine ticket cards
/entertainment/[engine]            → Runs that engine, shows result, Share + Generate Again
/entertainment/dashboard           → Entertainment-specific stats (Overall Entertainment Score, usage)
```

Auth pages deliberately stay serious/professional — no jokes at signup, since that's
where trust matters most. `/dashboard` carries the personality: randomized playful
greeting line, witty empty-state copy, while all real numbers (scores, counts) are
displayed cleanly and are never sacrificed for humor.

`lib/auth.js` has `signUpWithEmail`, `signInWithEmail`, `signInWithGoogle`, `signOut`,
`getCurrentUser` — thin wrappers over Firebase Auth used by both auth pages and the
dashboard's route guard.

## Components

| Component | Purpose |
|---|---|
| `EngineCard` | Ticket-stub card for the hub grid |
| `PhotoUploader` | Uploads a photo to the backend (`/api/photos/upload`), stores `photoId` in `sessionStorage` |
| `ResultCard` | Generic renderer — reads `data/engines.js` field mappings, so it works for any engine without engine-specific code |
| `ScoreBadge` | Small pill for numeric scores (used inside AI Judge's nested `scores` object) |
| `ShareButton` | Web Share API with clipboard fallback |
| `GenerateAgainButton` | Re-calls the same engine on the same photo |

## How a new engine gets added

1. Add its prompt to the backend's `entertainment.prompts.js`
2. Add one entry to `data/engines.js` here (id, label, tagline, accent, icon, fields)

No other frontend code changes needed — the engine page and result renderer are
fully data-driven from that file.

## Note on the photo upload endpoint

`PhotoUploader` assumes a `POST /api/photos/upload` (multipart form-data) endpoint
that returns `{ id, cloudinary_url }`. That route lives in the main backend (not the
Entertainment-only backend built earlier) — add it there per the original
`backend-spec.md` Cloudinary section if it's not built yet.
