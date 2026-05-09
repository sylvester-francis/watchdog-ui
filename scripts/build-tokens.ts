import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { watchdogTokensToCSS } from '../src/lib/tokens/watchdog';

const HERE = dirname(fileURLToPath(import.meta.url));
const OUT = resolve(HERE, '../src/lib/styles/theme-watchdog.css');

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, watchdogTokensToCSS(), 'utf-8');

console.log(`wrote ${OUT}`);
