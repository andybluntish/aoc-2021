#!/usr/bin/env deno run --allow-read=./input.txt

import { readChunks } from "../utils.ts";
import { ex1 as fn } from "./lib.ts";

console.log(fn(await readChunks("./input.txt")));
