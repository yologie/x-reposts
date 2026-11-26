# x-reposts

Entry for [makefun-x-reposts-02](https://make.fun/bounty/makefun-x-reposts-02): six quote posts by [@0xOgie](https://x.com/0xOgie), each quoting a different one of @makefunai's newest posts on X. Every post carries make.fun in its own words and the entrant's play code. The house scores the entry on the engagement each post collects — 2 points per repost, 2 per quote, 1 per like — read from X through the public embed.

[![make.fun](https://make.fun/badge/makefun-x-reposts-02.svg)](https://make.fun/bounty/makefun-x-reposts-02)
[![rank](https://make.fun/badge/makefun-x-reposts-02/yologie/x-reposts/rank.svg)](https://make.fun/bounty/makefun-x-reposts-02)
[![reward](https://make.fun/badge/makefun-x-reposts-02/yologie/x-reposts/reward.svg)](https://make.fun/bounty/makefun-x-reposts-02)

## How it works

`main.ts` (Node 22, standard library only) copies `POSTS.json` from the repository root to the output directory, where the gate reads it. That is all the program does — the entry is the posts themselves, named in `POSTS.json`.

Run it locally:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```
