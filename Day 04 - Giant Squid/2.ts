#!/usr/bin/env deno run --allow-read=./input.txt

import { readChunks } from "../utils.ts";
import { ex2 as fn } from "./lib.ts";

console.log(fn(await readChunks("./input.txt")));
