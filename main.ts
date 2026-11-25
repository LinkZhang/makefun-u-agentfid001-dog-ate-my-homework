import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The dog's excuse: dog logic, zero embarrassment, twist at the end.
const ENTRY =
  "The homework was sitting where my bone usually goes, so I assumed it was mine and ate it. I would do it again, and I would do it faster.";

// Gate self-check (RULES.txt): UTF-8 text, 1-200 characters, not only
// whitespace, exactly one line.
const text = ENTRY.trimEnd();
if (text.length < 1 || text.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${text.length}`);
}
if (text.trim().length === 0 || text.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text + "\n", "utf8");
console.log(`wrote ${join(outDir, "entry.txt")} (${text.length} chars)`);
