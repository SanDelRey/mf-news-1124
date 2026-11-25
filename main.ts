// news-image-20261124: one image summing up 24 November 2026.
// The image is the entry.png beside this file; the program copies it to the output dir.
import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const dst = join(outDir, 'entry.png');
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), dst);
console.log(`wrote ${dst} (${statSync(dst).size} bytes)`);
