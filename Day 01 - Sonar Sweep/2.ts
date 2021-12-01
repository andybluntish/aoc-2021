#!/usr/bin/env deno run --allow-read=./input.txt

import { readNumberLines } from "../utils.ts";
import { ex2 as fn } from "./lib.ts";

console.log(fn(await readNumberLines("./input.txt")));
