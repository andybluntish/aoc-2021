import { sumList } from "../utils.ts";

export function parseInput(input: string) {
  const values = input.split(",");
  const data: Record<number, number> = {};

  for (let i = 0; i <= 8; i++) {
    data[i] = values.filter((f) => f === `${i}`).length;
  }

  return data;
}

function countFishies(input: string, days: number) {
  const fishies = parseInput(input);

  for (let day = 0; day < days; day++) {
    const resetting = fishies[0];

    for (let i = 0; i < 8; i++) {
      fishies[i] = fishies[i + 1];
    }

    fishies[6] += resetting;
    fishies[8] = resetting;
  }

  return sumList(Object.values(fishies));
}

export function ex1(input: string) {
  return countFishies(input, 80);
}

export function ex2(input: string) {
  return countFishies(input, 256);
}
