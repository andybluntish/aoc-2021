import { EOL } from "https://deno.land/std@0.117.0/fs/mod.ts";
import { distinct } from "https://deno.land/std@0.117.0/collections/mod.ts";

export async function readFile(path: string) {
  const input = await Deno.readTextFile(path);

  return input.trim();
}

export async function readLines(path: string, separator = `${EOL}`) {
  const input = await readFile(path);

  return input
    .split(separator)
    .map((l) => l.trim());
}

export async function readChunks(path: string) {
  return await readLines(path, `${EOL}${EOL}`);
}

export async function readNumberLines(path: string) {
  const input = await readLines(path);

  return input.map((line) => parseInt(line, 10));
}

export function sum(a: number, b: number) {
  return a + b;
}

export function sumList(list: number[]) {
  return list.reduce(sum, 0);
}

export function unique<T>(list: T[]): T[] {
  return distinct(list);
}

export function range(start: number, end: number): number[] {
  const length = Math.abs(end - start) + 1;

  return Array.from({ length }, (_, i) => {
    if (end < start) return start - i;
    return start + i;
  });
}
