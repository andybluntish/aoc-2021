import { range } from "../utils.ts";

export function parseInput(input: string) {
  return input
    .split(",")
    .map((value: string) => parseInt(value, 10))
    .sort((
      a: number,
      b: number,
    ) => a - b);
}

export function ex1(input: string) {
  const positions = parseInput(input);
  const median = positions[Math.round(positions.length / 2)];

  return positions.reduce((total, position) => {
    return total + Math.abs(position - median);
  }, 0);
}

export function ex2(input: string) {
  const positions = parseInput(input);
  const allPositions = range(positions[0], positions[positions.length - 1]);
  const data: Record<string, number> = {};

  for (const position of positions) {
    for (const target of allPositions) {
      const distance = Math.abs(target - position);
      data[target] = (data[target] || 0) + distance * (distance + 1) / 2;
    }
  }

  return Math.min(...Object.values(data));
}
