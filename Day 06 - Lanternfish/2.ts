#!/usr/bin/env deno run --allow-read=./input.txt

import { readFile as read } from "../utils.ts";
import { ex2 as fn } from "./lib.ts";

console.log(fn(await read("./input.txt")));
