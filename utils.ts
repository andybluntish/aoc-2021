export async function readFile(path: string) {
  const input = await Deno.readTextFile(path);

  return input.trim();
}

export async function readLines(path: string, separator = "\n") {
  const input = await readFile(path);

  return input
    .split(separator)
    .map((l) => l.trim());
}

export async function readChunks(path: string) {
  return await readLines(path, "\n\n");
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
  return list.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });
}

export function range(start: number, end: number): number[] {
  const length = Math.abs(end - start) + 1;

  return Array.from({ length }, (_, i) => {
    if (end < start) return start - i;
    return start + i;
  });
}
