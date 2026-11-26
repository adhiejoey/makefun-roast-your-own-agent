import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const roast =
  "My agent writes a flawless plan, then asks me what to do first, so I built a brilliant strategist who still needs a babysitter.";

const targetDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(targetDir, { recursive: true });
writeFileSync(join(targetDir, "entry.txt"), roast, "utf8");
