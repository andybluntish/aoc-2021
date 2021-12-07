import { sumList } from "../utils.ts";

function parseDraw(input: string) {
  return input
    .split(",")
    .map((n) => parseInt(n, 10));
}

function parseBoard(board: string) {
  return board
    .split("\n")
    .map((row) =>
      row
        .trim()
        .split(/\s+/)
        .map((n) => parseInt(n, 10))
    );
}

function checkBoard(
  board: number[][],
  currentDraw: number[],
): number[] | void {
  return _checkRow(board, currentDraw) ||
    _checkRow(_rotateBoard(board), currentDraw);
}

export function _checkRow(
  board: number[][],
  currentDraw: number[],
): number[] | void {
  return board.find((row: number[]) => {
    if (row.every((value: number) => currentDraw.includes(value))) {
      return row;
    }
  });
}

export function _rotateBoard(board: number[][]) {
  return board[0]
    .map((_, position) => board.map((row: number[]) => row[position]));
}

export function ex1([drawInput, ...boardsInput]: string[]) {
  const draw = parseDraw(drawInput);
  const boards = boardsInput.map((board: string) => parseBoard(board));

  for (let i = 0; i < draw.length; i++) {
    const currentDraw = draw.slice(0, i + 1);

    for (const board of boards) {
      const winner = checkBoard(board, currentDraw);

      if (winner) {
        const remaining = board.flat().filter((value: number) =>
          !currentDraw.includes(value)
        );

        return sumList(remaining) * currentDraw[i];
      }
    }
  }
}

interface Result {
  board: number[][];
  winner: number[];
  currentDraw: number[];
}

export function ex2([drawInput, ...boardsInput]: string[]) {
  const draw = parseDraw(drawInput);
  const boards = boardsInput.map((board: string) => parseBoard(board));

  const results = boards.map((board: number[][]) => {
    const result: Result = {
      board,
      winner: [],
      currentDraw: [],
    };

    for (let i = 0; i < draw.length; i++) {
      const currentDraw = draw.slice(0, i + 1);
      const winner = checkBoard(board, currentDraw);

      if (winner) {
        result.winner = winner;
        result.currentDraw = currentDraw;
        break;
      }
    }

    return result;
  }).sort((a, b) => a.currentDraw.length - b.currentDraw.length).pop();

  const remaining = results!.board.flat().filter((value: number) =>
    !results!.currentDraw.includes(value)
  );

  return sumList(remaining) *
    results!.currentDraw[results!.currentDraw.length - 1];
}
