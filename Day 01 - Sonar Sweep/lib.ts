import { sumList } from "../utils.ts";

export function ex1(input: number[]) {
  const result = input.map((current, idx) => {
    return current > input[idx - 1] ? 1 : 0;
  });

  return sumList(result);
}

export function ex2(input: number[]) {
  const result = input.map((_, idx) => {
    const a = input.slice(idx, idx + 3);
    const b = input.slice(idx + 1, idx + 4);

    if (a.length === b.length) {
      const aSum = sumList(a);
      const bSum = sumList(b);

      return bSum > aSum ? 1 : 0;
    }

    return 0;
  });

  return sumList(result);
}
