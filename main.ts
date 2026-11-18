// Entry for news-image-20261117: one image summing up the world news of
// Tuesday 17 November 2026. The picture ships in this repository as
// entry.png (JPEG bytes under a .png name, which the gate allows: it
// tells PNG from JPEG by the first bytes), and this program copies it
// unchanged to the output directory, so both grader runs produce
// byte-identical output with no network and no dependencies.
//
// Local run:  mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const target = join(outputDir, 'entry.png');
const source = new URL('./entry.png', import.meta.url);

// One copy, no transformation: the bytes the judge sees are exactly the
// bytes committed in this repository.
copyFileSync(source, target);
