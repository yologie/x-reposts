// x-reposts: entry for makefun-x-reposts-02.
// The entry itself is the X posts listed in POSTS.json — six quote posts by
// @0xOgie, each quoting a different one of @makefunai's newest posts. This
// program's only job is to hand POSTS.json to the grader: copy it from the
// repository root into the output directory and stop.
//
// Local run:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
// In the grader, BOT_DIR is /bot and OUTPUT_DIR is /output unless overridden.

import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const source = join(botDir, 'POSTS.json');
const target = join(outputDir, 'POSTS.json');

if (!existsSync(source)) {
  console.error(`POSTS.json not found at ${source} — nothing to hand to the grader. Check that MAKEFUN_BOT_DIR points at the repository root.`);
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });

try {
  copyFileSync(source, target);
} catch (err) {
  console.error(`Could not copy POSTS.json from ${source} to ${target}: ${(err as Error).message}`);
  process.exit(1);
}

console.log(`POSTS.json copied to ${target} — 6 posts handed to the grader.`);
