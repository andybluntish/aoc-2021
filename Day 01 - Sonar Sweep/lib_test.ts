import { assertEquals } from "https://deno.land/std@0.117.0/testing/asserts.ts";
import { ex1, ex2 } from "./lib.ts";

const input = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];

Deno.test("ex 1", () => {
  assertEquals(ex1(input), 7);
});

Deno.test("ex 2", () => {
  assertEquals(ex2(input), 5);
});
