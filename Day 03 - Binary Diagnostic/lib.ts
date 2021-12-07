type BitCountKey = "0" | "1";
type BitCount = Record<BitCountKey, number>;

function countBitsAtPosition(input: string[], position: number): BitCount {
  const result: BitCount = { "0": 0, "1": 0 };

  return input
    .map((line) => line[position])
    .reduce((total, bit) => {
      const key = bit as BitCountKey;
      total[key]++;

      return total;
    }, result);
}

function sortObjectKeysByValue(bitCount: BitCount): BitCountKey[] {
  return Object.keys(bitCount)
    .map((key) => key as BitCountKey)
    .sort((a, b) => bitCount[a] - bitCount[b]);
}

function filterRows(
  rows: string[],
  comparison: (value: string, count: BitCount) => boolean,
  position = 0,
): string {
  const count = countBitsAtPosition(rows, position);
  rows = rows.filter((value: string) => comparison(value[position], count));

  if (rows.length === 1) {
    return rows[0];
  } else {
    return filterRows(rows, comparison, position + 1);
  }
}

export function ex1(input: string[]) {
  const [epsilon, gamma] = input[0].split("").map((_, position) => {
    return sortObjectKeysByValue(countBitsAtPosition(input, position));
  }).reduce((total, value) => {
    total[0] += value[0];
    total[1] += value[1];
    return total;
  }, ["", ""]);

  return parseInt(epsilon, 2) * parseInt(gamma, 2);
}

export function ex2(input: string[]) {
  const o2 = filterRows(input, (value: string, count: BitCount) => {
    const target = count["0"] > count["1"] ? "0" : "1";

    return value === target;
  });

  const co2 = filterRows(input, (value: string, count: BitCount) => {
    const target = count["1"] < count["0"] ? "1" : "0";

    return value === target;
  });

  return parseInt(o2, 2) * parseInt(co2, 2);
}
