export async function readLines(path: string) {
  const input = await Deno.readTextFile(path);

  return input
    .trim()
    .split("\n");
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
