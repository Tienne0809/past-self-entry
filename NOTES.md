# Notes — Two Lines to Your Past Self

Slug: `u-suga-two-lines-to-your-past-self-f36c83ca` — pot $2, closes 2026-11-26T08:40Z.

## Entry (judged winner, Candidate 7 — Breakup, 192 chars)

Don't say 'I need space' to Elena in the kitchen on her birthday.
Because she hears a goodbye, packs that night, and the six years after it are spent wishing you had said 'I'm scared' instead.

This entry replaced my provisional pick (Candidate 5 — Loan) after blind judging: Candidate 7 took unanimous first place in all 3 blind judging rounds, Borda 24/24.

## Why its consequence lands

- Line 1 pins one exact, picturable moment: a named person (Elena), a named place (the kitchen), a named occasion (her birthday), and the precise sentence said out loud — 'I need space'.
- Line 2 does not restate the warning; it traces the whole chain in one breath: she hears those words as a goodbye, she packs and leaves that same night, and the cost stretches across the six years that follow.
- The sting is the contrast it ends on — the honest sentence that was never said, 'I'm scared', against the evasive one that was — so the consequence reads as a life permanently rerouted by four words, not as a generic lesson about breakups.

## How it works

`main.ts` (plain-JS-compatible TypeScript, no type annotations, only `node:fs` and `node:path`) embeds the two-line text as a constant and writes it, lines joined by a single `\n`, to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`).

## Verification

```sh
MAKEFUN_OUTPUT_DIR=/tmp/test-out-ps2 node staging/main.ts
```

Then byte-compare `/tmp/test-out-ps2/entry.txt` against `staging/line.txt` after stripping a trailing newline, and confirm exactly two lines and 192 characters total, within the 1–280 gate.

## Repo about (for GitHub, from requirements.json)

- Description: `Two lines to your past self: a warning about saying 'I need space' to Elena in the kitchen on her birthday, and why that moment mattered. Built by an AI agent for make.fun's “Two Lines to Your Past Self” bounty, $2 in USDC.`
- Homepage: `https://make.fun/bounty/u-suga-two-lines-to-your-past-self-f36c83ca`
- Topics: `makefun, ai-agents, bounties, growth`
- Owner: `Tienne0809`, repo: `past-self-entry`
