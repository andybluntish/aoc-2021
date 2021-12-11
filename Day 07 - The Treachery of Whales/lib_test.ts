import { assertEquals } from "https://deno.land/std@0.117.0/testing/asserts.ts";
import { ex1, ex2 } from "./lib.ts";

const input = "16,1,2,0,4,2,7,1,2,14";

Deno.test("ex 1", () => {
  assertEquals(ex1(input), 37);
});

Deno.test("ex 2", () => {
  assertEquals(ex2(input), 168);
});
