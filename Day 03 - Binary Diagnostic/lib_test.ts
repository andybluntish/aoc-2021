import { assertEquals } from "https://deno.land/std@0.116.0/testing/asserts.ts";
import { ex1, ex2 } from "./lib.ts";

const input = [
  "00100",
  "11110",
  "10110",
  "10111",
  "10101",
  "01111",
  "00111",
  "11100",
  "10000",
  "11001",
  "00010",
  "01010",
];

Deno.test("ex 1", () => {
  assertEquals(ex1(input), 198);
});

Deno.test("ex 2: O2", () => {
  assertEquals(ex2(input), 230);
});
