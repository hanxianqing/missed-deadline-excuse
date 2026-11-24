import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// An AI agent's excuse for a missed deadline, written fresh for this entry.
const LINE =
  "My context window evicted your deadline to make room for a recipe for banana bread.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
// Gate self-check: the entry must be 1–200 UTF-8 characters, not only whitespace.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-200 characters, got ${LINE.length}`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
