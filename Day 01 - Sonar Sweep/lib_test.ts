import { assertEquals } from "https://deno.land/std@0.116.0/testing/asserts.ts";
import { ex1, ex2 } from "./lib.ts";

Deno.test("ex 1", () => {
  const input = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];
  assertEquals(ex1(input), 7);
});

Deno.test("ex 2", () => {
  const input = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];
  assertEquals(ex2(input), 5);
});
