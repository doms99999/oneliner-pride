// One Line of Earned Pride — a quiet, earned moment of pride.
// The program writes the line to /output/entry.txt (1-240 chars, UTF-8).
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "He washed dishes for six years without a word, and tonight the chef put his name on the menu — misspelled, but there.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
