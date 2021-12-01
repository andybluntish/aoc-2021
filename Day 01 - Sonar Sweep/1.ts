#!/usr/bin/env deno run --allow-read=./input.txt

import { readNumberLines } from "../utils.ts";
import { ex1 as fn } from "./lib.ts";

console.log(fn(await readNumberLines("./input.txt")));
