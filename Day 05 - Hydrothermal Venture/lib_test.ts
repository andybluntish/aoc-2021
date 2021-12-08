import { assertEquals } from "https://deno.land/std@0.116.0/testing/asserts.ts";
import { ex1, ex2, expandLine, parseInput } from "./lib.ts";

const input = [
  "0,9 -> 5,9",
  "8,0 -> 0,8",
  "9,4 -> 3,4",
  "2,2 -> 2,1",
  "7,0 -> 7,4",
  "6,4 -> 2,0",
  "0,9 -> 2,9",
  "3,4 -> 1,4",
  "0,0 -> 8,8",
  "5,5 -> 8,2",
];

Deno.test("ex 1", () => {
  assertEquals(ex1(input), 5);
});

Deno.test("ex 2", () => {
  assertEquals(ex2(input), 12);
});

Deno.test("parseInput: returns a 2D array of points", () => {
  const input = [
    "955,125 -> 151,929",
    "830,251 -> 526,555",
    "182,185 -> 13,16",
  ];

  const expected = [
    [[955, 125], [151, 929]],
    [[830, 251], [526, 555]],
    [[182, 185], [13, 16]],
  ];

  assertEquals(parseInput(input), expected);
});

Deno.test("expandLine: returns expanded points list for sloped line", () => {
  assertEquals(expandLine([[1, 1], [3, 3]]), ["1,1", "2,2", "3,3"]);
  assertEquals(expandLine([[9, 7], [7, 9]]), ["9,7", "8,8", "7,9"]);
});

Deno.test("expandLine: returns empty list for sloped line when diagonal is false", () => {
  assertEquals(expandLine([[1, 1], [3, 3]], false), []);
  assertEquals(expandLine([[9, 7], [7, 9]], false), []);
});

Deno.test("expandLine: returns expanded points list for a horizontal line", () => {
  const input = [[4, 5], [8, 5]];
  const expected = ["4,5", "5,5", "6,5", "7,5", "8,5"];

  assertEquals(expandLine(input), expected);
});

Deno.test("expandLine: returns expanded points list for a vertical line", () => {
  const input = [[8, 9], [8, 19]];
  const expected = [
    "8,9",
    "8,10",
    "8,11",
    "8,12",
    "8,13",
    "8,14",
    "8,15",
    "8,16",
    "8,17",
    "8,18",
    "8,19",
  ];

  assertEquals(expandLine(input), expected);
});
