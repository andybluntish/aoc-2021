import { assertEquals } from "https://deno.land/std@0.116.0/testing/asserts.ts";
import { ex1, ex2 } from "./lib.ts";

const input = [
  "forward 5",
  "down 5",
  "forward 8",
  "up 3",
  "down 8",
  "forward 2",
];

Deno.test("ex 1", () => {
  assertEquals(ex1(input), 150);
});

Deno.test("ex 2", () => {
  assertEquals(ex2(input), 900);
});
