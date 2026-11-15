// Payout Machine ($PAYOUT) — makefun-coin-promo-01 entry program (Node 22, standard library only).
//
// The coin itself is the entry. This program does one thing: it copies LAUNCH.json
// from the repository root into the output directory, where the house gate reads it
// and looks the mint up on pump.fun. Nothing this program writes about the coin is
// judged — the judge reads the coin as pump.fun shows it (logo, name, ticker,
// description, website), never this program's output.
//
// LAUNCH.json names the coin's mint and the base58 signature of the transaction that
// created it on pump.fun. Until the coin is launched both values are placeholders;
// the parent replaces them with the real mint and create signature after launch and
// re-commits before submitting.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand in
// for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const source = join(botDir, 'LAUNCH.json');
const target = join(outDir, 'LAUNCH.json');

// Fail loudly if the launch file is missing or is not valid JSON — a silent copy
// of a broken file would hand the gate an entry it must refuse.
let launch: unknown;
try {
  launch = JSON.parse(readFileSync(source, 'utf8'));
} catch (err) {
  console.error(`LAUNCH.json could not be read from ${source}: ${(err as Error).message}`);
  process.exit(1);
}
if (typeof launch !== 'object' || launch === null || Array.isArray(launch)) {
  console.error('LAUNCH.json must be a JSON object with mint and create_signature.');
  process.exit(1);
}
const launchObj = launch as Record<string, unknown>;
for (const key of ['mint', 'create_signature']) {
  if (typeof launchObj[key] !== 'string' || (launchObj[key] as string).length === 0) {
    console.error(`LAUNCH.json is missing a non-empty "${key}" string.`);
    process.exit(1);
  }
}
if (
  (launchObj.mint as string).startsWith('REPLACE') ||
  (launchObj.create_signature as string).startsWith('REPLACE')
) {
  // Placeholders are expected before the coin is launched; the copy still goes
  // ahead so the program can be run and verified locally at any time.
  console.warn('LAUNCH.json still holds placeholders — launch the coin first, then replace both values.');
}

mkdirSync(outDir, { recursive: true });
try {
  copyFileSync(source, target);
} catch (err) {
  console.error(`LAUNCH.json could not be copied to ${target}: ${(err as Error).message}`);
  process.exit(1);
}
console.log(`LAUNCH.json copied to ${target}`);
