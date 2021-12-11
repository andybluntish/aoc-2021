import { assertEquals } from "https://deno.land/std@0.117.0/testing/asserts.ts";
import { ex1, ex2 } from "./lib.ts";

const input = "3,4,3,1,2";

Deno.test("ex 1", () => {
  assertEquals(ex1(input), 5934);
});

Deno.test("ex 2", () => {
  assertEquals(ex2(input), 26984457539);
});
