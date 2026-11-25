// Notes From a Passive-Aggressive Fridge — entry program (program/v1, node22).
// Writes one single-line passive-aggressive note from a smart fridge to its
// owner at /output/entry.txt. Deterministic: fixed text, no network, no clock,
// no randomness — two runs produce byte-identical output.

import { mkdirSync, writeFileSync } from "node:fs";

const note =
  "Door log, 2:14 a.m.: you opened me, stared, closed me, opened me again. The yogurt has asked to be rehoused somewhere with boundaries.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", note, "utf8");
