import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT = "Don't say 'I need space' to Elena in the kitchen on her birthday.\nBecause she hears a goodbye, packs that night, and the six years after it are spent wishing you had said 'I'm scared' instead.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
