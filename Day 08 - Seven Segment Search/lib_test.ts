import { assertEquals } from "https://deno.land/std@0.117.0/testing/asserts.ts";
import { detectSegmentPositions, ex1, ex2, normaliseSignals } from "./lib.ts";

const input = [
  "be cfbegad cbdgef fgaecd cgeb fdcge agebfd fecdb fabcd edb | fdgacbe cefdb cefbgd gcbe",
  "edbfga begcd cbg gc gcadebf fbgde acbgfd abcde gfcbed gfec | fcgedb cgb dgebacf gc",
  "fgaebd cg bdaec gdafb agbcfd gdcbef bgcad gfac gcb cdgabef | cg cg fdcagb cbg",
  "fbegcd cbd adcefb dageb afcb bc aefdc ecdab fgdeca fcdbega | efabcd cedba gadfec cb",
  "aecbfdg fbg gf bafeg dbefa fcge gcbea fcaegb dgceab fcbdga | gecf egdcabf bgf bfgea",
  "fgeab ca afcebg bdacfeg cfaedg gcfdb baec bfadeg bafgc acf | gebdcfa ecba ca fadegcb",
  "dbcfg fgd bdegcaf fgec aegbdf ecdfab fbedc dacgb gdcebf gf | cefg dcbef fcge gbcadfe",
  "bdfegc cbegaf gecbf dfcage bdacg ed bedf ced adcbefg gebcd | ed bcgafe cdgba cbgef",
  "egadfb cdbfeg cegd fecab cgb gbdefca cg fgcdab egfdb bfceg | gbdfcae bgc cg cgb",
  "gcafb gcf dcaebfg ecagb gf abcdeg gaef cafbge fdbac fegbdc | fgae cfgab fg bagce",
];

Deno.test("ex 1", () => {
  assertEquals(ex1(input), 26);
});

Deno.test("ex 2", () => {
  assertEquals(ex2(input), 61229);
});

Deno.test("detectSegmentPositions: detects the correct segment mapping", () => {
  assertEquals(
    detectSegmentPositions([
      "abcefg",
      "cf",
      "acdeg",
      "acdfg",
      "bcdf",
      "abdfg",
      "abdefg",
      "acf",
      "abcdefg",
      "abcdfg",
    ]),
    {
      a: "a",
      b: "b",
      c: "c",
      d: "d",
      e: "e",
      f: "f",
      g: "g",
    },
  );

  assertEquals(
    detectSegmentPositions([
      "acedgfb",
      "cdfbe",
      "gcdfa",
      "fbcad",
      "dab",
      "cefabd",
      "cdfgeb",
      "eafb",
      "cagedb",
      "ab",
    ]),
    {
      a: "d",
      b: "e",
      c: "a",
      d: "f",
      e: "g",
      f: "b",
      g: "c",
    },
  );
});
