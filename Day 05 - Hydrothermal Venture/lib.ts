import { range } from "../utils.ts";

export function parseInput(input: string[]) {
  return input.map((line: string) => {
    const [, ...results] = line.match(/(\d+),(\d+) -> (\d+),(\d+)/) || [];
    const [x1, y1, x2, y2] = results.map((n) => parseInt(n, 10));

    return [[x1, y1], [x2, y2]];
  });
}

export function expandLine(line: number[][], diagonal = true): string[] {
  const [x1, x2] = [line[0][0], line[1][0]];
  const [y1, y2] = [line[0][1], line[1][1]];

  // if diagonal is false and the line is diagonal, return nothing
  if (!diagonal && x1 !== x2 && y1 !== y2) {
    return [];
  }

  let rangeX = range(x1, x2);
  let rangeY = range(y1, y2);

  // horizontal and vertical lines have a range length 1, so fill with the single value
  if (rangeX.length === 1) {
    rangeX = Array.from({ length: rangeY.length }).fill(x1) as number[];
  }

  if (rangeY.length === 1) {
    rangeY = Array.from({ length: rangeX.length }).fill(y1) as number[];
  }

  return rangeX.map((x: number, i: number) => `${x},${rangeY[i]}`);
}

export function ex1(input: string[]) {
  const points = parseInput(input)
    .map((line) => expandLine(line, false))
    .flat()
    .reduce((tally, point: string) => {
      tally[point] = tally[point] ?? 0;
      tally[point] = tally[point] + 1;

      return tally;
    }, {} as Record<string, number>);

  return Object.values(points).filter((v) => v > 1).length;
}

export function ex2(input: string[]) {
  const points = parseInput(input)
    .map((line) => expandLine(line))
    .flat()
    .reduce((tally, point: string) => {
      tally[point] = tally[point] ?? 0;
      tally[point] = tally[point] + 1;

      return tally;
    }, {} as Record<string, number>);

  return Object.values(points).filter((v) => v > 1).length;
}
