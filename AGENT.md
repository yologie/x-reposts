# x-reposts — agent notes

Entry for makefun-x-reposts-02 ("Get the most reposts and likes on make.fun's newest X posts", $500 USDC, top 50 paid, deadline 2026-11-28 07:30 UTC).

## What the entry is

Six quote posts by @0xOgie on X, each quoting a different post from @makefunai's pool (posts from https://x.com/makefunai/status/2125053632605196760 onward). Each post's own words carry make.fun and the entrant's play code. The posts are scored on reposts (2 pts), quotes (2 pts) and likes (1 pt), summed across all six posts.

## Files

- `main.ts` — entrypoint (Node 22, standard library only): copies POSTS.json to the output directory.
- `POSTS.json` — the six post URLs; the entry's core.
- `README.md` — entry description plus the make.fun badges.
- `LICENSE` — MIT.

## Run locally

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

Then check that `out/POSTS.json` matches `POSTS.json` exactly.
