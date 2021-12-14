import { sumList } from "../utils.ts";

function isOpening(char: string) {
  return /\(|\[|{|</.test(char);
}

function isClosing(char: string) {
  return /\)|\]|}|>/.test(char);
}

function openingCompanion(char: string) {
  if (char === ")") return "(";
  if (char === "]") return "[";
  if (char === "}") return "{";
  return "<";
}

function closingCompanion(char: string) {
  if (char === "(") return ")";
  if (char === "[") return "]";
  if (char === "{") return "}";
  return ">";
}

function errorScoreFor(char: string) {
  if (char === ")") return 3;
  if (char === "]") return 57;
  if (char === "}") return 1197;
  return 25137;
}

function missingScoreFor(char: string) {
  if (char === ")") return 1;
  if (char === "]") return 2;
  if (char === "}") return 3;
  return 4;
}

function isCorruptLine(line: string[]) {
  const closing = [];

  for (const char of line) {
    if (isOpening(char)) {
      closing.push(closingCompanion(char));
    } else if (isClosing(char)) {
      if (closing[closing.length - 1] === char) {
        closing.pop();
      } else {
        return char;
      }
    }
  }
}

function completeInvalidLine(line: string[]) {
  const opening = [];

  for (const char of line) {
    if (isOpening(char)) {
      opening.push(char);
    } else if (isClosing(char)) {
      if (opening[opening.length - 1] === openingCompanion(char)) {
        opening.pop();
      }
    }
  }

  return opening
    .map((char) => closingCompanion(char))
    .reverse();
}

export function ex1(input: string[]) {
  const invalidScores = input
    .map((line) => line.split(""))
    .map((line) => isCorruptLine(line))
    .filter(Boolean)
    .map((char) => errorScoreFor(char!));

  return sumList(invalidScores);
}

export function ex2(input: string[]) {
  const incompleteScores = input
    .map((line) => line.split(""))
    .filter((line) => !isCorruptLine(line))
    .map((line) => completeInvalidLine(line))
    .map((line) =>
      line.reduce((score: number, char: string) => {
        score = (score * 5) + missingScoreFor(char);
        return score;
      }, 0)
    ).sort((a, b) => a - b);

  return incompleteScores[Math.floor(incompleteScores.length / 2)];
}
