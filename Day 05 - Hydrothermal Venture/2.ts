#!/usr/bin/env deno run --allow-read=./input.txt

import { readLines } from "../utils.ts";
import { ex2 as fn } from "./lib.ts";

console.log(fn(await readLines("./input.txt")));
