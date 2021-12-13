import { sumList } from "../utils.ts";

function parseInput(input: string[]): string[][][] {
  return input.map((line: string) =>
    line
      .split(" | ")
      .map((value: string) =>
        value
          .split(" ")
          .map((value: string) =>
            value
              .split("")
              .sort()
              .join("")
          )
      )
  );
}

function detectNumberByLength(digit: string): number {
  switch (digit.length) {
    case 2:
      return 1;
    case 4:
      return 4;
    case 3:
      return 7;
    case 7:
      return 8;
    default:
      return NaN;
  }
}

export function detectSegmentPositions(signals: string[]) {
  const map: Record<string, string> = {};

  const one = signals.find((s) => s.length === 2)!.split("");
  const four = signals.find((s) => s.length === 4)!.split("");
  const seven = signals.find((s) => s.length === 3)!.split("");
  const eight = signals.find((s) => s.length === 7)!.split("");

  const [nine] = signals
    .filter((s) => s.length === 6)
    .map((s) => s.split(""))
    .filter((s) => four.every((c) => s.includes(c)));

  const [zero] = signals
    .filter((s) => s.length === 6)
    .map((s) => s.split(""))
    .filter((s) => !nine.every((c) => s.includes(c)))
    .filter((s) => seven.every((c) => s.includes(c)));

  const [six] = signals
    .filter((s) => s.length === 6)
    .map((s) => s.split(""))
    .filter((s) => !zero.every((c) => s.includes(c)))
    .filter((s) => !nine.every((c) => s.includes(c)));

  map["a"] = seven.filter((v) => !one.includes(v))[0];
  map["c"] = eight.filter((v) => !six.includes(v))[0];
  map["d"] = eight.filter((v) => !zero.includes(v))[0];
  map["e"] = eight.filter((v) => !nine.includes(v))[0];
  map["g"] =
    eight.filter((v) => !([...four, map["a"], map["e"]].includes(v)))[0];
  map["b"] =
    eight.filter((v) =>
      !([...seven, map["d"], map["e"], map["g"]].includes(v))
    )[0];
  map["f"] = eight.filter((v) => !Object.values(map).includes(v))[0];

  return map;
}

export function normaliseSignals(
  signals: string[],
  segmentMap: Record<string, string>,
) {
  return signals.map((signal) =>
    signal.split("")
      .map((s) => Object.keys(segmentMap).find((key) => segmentMap[key] === s))
      .sort()
      .join("")
  );
}

function signalToDigit(signal: string): number | void {
  switch (signal) {
    case "abcefg":
      return 0;
    case "cf":
      return 1;
    case "acdeg":
      return 2;
    case "acdfg":
      return 3;
    case "bcdf":
      return 4;
    case "abdfg":
      return 5;
    case "abdefg":
      return 6;
    case "acf":
      return 7;
    case "abcdefg":
      return 8;
    case "abcdfg":
      return 9;
    default:
  }
}

export function ex1(input: string[]) {
  const lines = parseInput(input);

  return lines.map(([, digits]) => {
    return digits
      .map((digit: string) => {
        switch (digit.length) {
          case 2:
            return 1;
          case 4:
            return 4;
          case 3:
            return 7;
          case 7:
            return 8;
          default:
            return NaN;
        }
      })
      .filter((value: number) => Number.isFinite(value));
  }).flat().length;
}

export function ex2(input: string[]) {
  console.log("...");
  const lines = parseInput(input);
  const results = lines
    .map(([signals, digits]) => {
      const segmentMap = detectSegmentPositions(signals);
      const normalisedSignals = normaliseSignals(digits, segmentMap);
      const digit = normalisedSignals
        .map((signal: string) => signalToDigit(signal))
        .join("");

      return parseInt(digit, 10);
    })
    .flat()
    .filter((value: number) => Number.isFinite(value));

  return sumList(results);
}
