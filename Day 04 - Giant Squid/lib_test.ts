import { assertEquals } from "https://deno.land/std@0.116.0/testing/asserts.ts";
import { _checkRow, _rotateBoard, ex1, ex2 } from "./lib.ts";

const input = [
  `7,4,9,5,11,17,23,2,0,14,21,24,10,16,13,6,15,25,12,22,18,20,8,19,3,26,1`,
  `22 13 17 11  0
    8  2 23  4 24
   21  9 14 16  7
    6 10  3 18  5
    1 12 20 15 19`,
  `3 15  0  2 22
   9 18 13 17  5
  19  8  7 25 23
  20 11 10 24  4
  14 21 16 12  6`,
  `14 21 17 24  4
   10 16 15  9 19
   18  8 23 26 20
   22 11 13  6  5
   2  0 12  3  7`,
];

Deno.test("ex 1", () => {
  assertEquals(ex1(input), 4512);
});

Deno.test("ex 2", () => {
  assertEquals(ex2(input), 1924);
});

Deno.test("_rotateBoard: rotates a 2D array", () => {
  const input = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ];

  const expected = [
    [1, 5, 9],
    [2, 6, 10],
    [3, 7, 11],
    [4, 8, 12],
  ];

  assertEquals(_rotateBoard(input), expected);
});

Deno.test("_checkRow: returns a winning board row", () => {
  const input = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ];
  const draw = [9, 3, 6, 8, 45, 0, 7, 12, 5];
  const expected = [5, 6, 7, 8];

  assertEquals(_checkRow(input, draw), expected);
});
