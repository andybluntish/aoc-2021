import { productList, sumList, uniqueBy } from "../utils.ts";

interface Point {
  x: number;
  y: number;
  value: number;
}

function findLowPoints(input: number[][]) {
  const lowPoints: Point[] = [];

  for (let y = 0, height = input.length; y < height; y++) {
    for (let x = 0, width = input[y].length; x < width; x++) {
      const value = input[y][x];
      const lowerAdjacentPoints = [
        input[y - 1] && input[y - 1][x],
        input[y][x + 1],
        input[y + 1] && input[y + 1][x],
        input[y][x - 1],
      ].filter((other?: number) => Number.isFinite(other) && other! <= value);

      if (lowerAdjacentPoints.length === 0) {
        lowPoints.push({ x, y, value });
      }
    }
  }

  return lowPoints;
}

function findBasinSize(input: number[][], point: Point) {
  const basinPoints: Point[] = [point];

  for (let i = 0; i < basinPoints.length; i++) {
    const { x, y, value } = basinPoints[i];
    [[0, -1], [1, 0], [0, 1], [-1, 0]].forEach(([deltaX, deltaY]: number[]) => {
      const otherX = x + deltaX;
      const otherY = y + deltaY;
      if (
        otherX < 0 ||
        otherX > input[0].length - 1 ||
        otherY < 0 ||
        otherY > input.length - 1
      ) {
        return;
      }

      const otherValue = input[otherY][otherX];
      if (!Number.isFinite(otherValue) || otherValue === 9) {
        return;
      }

      if (otherValue && otherValue > value) {
        basinPoints.push({ x: x + deltaX, y: y + deltaY, value: otherValue });
      }
    });
  }

  return uniqueBy(basinPoints, ({ x, y }: Point) => `${x}x${y}`).length;
}

export function ex1(input: number[][]) {
  const lowPoints = findLowPoints(input);
  const riskLevels = lowPoints.map(({ value }) => value + 1);

  return sumList(riskLevels);
}

export function ex2(input: number[][]) {
  const lowPoints = findLowPoints(input);

  const basinSizes: number[] = lowPoints.map((point) =>
    findBasinSize(input, point)
  );

  return productList(
    basinSizes.sort((a: number, b: number) => b - a).slice(0, 3),
  );
}
