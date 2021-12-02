export function ex1(input: string[]) {
  const position = { x: 0, y: 0 };

  input.forEach((command) => {
    const [direction, magnitude] = command.split(" ");
    const value = parseInt(magnitude, 10);

    if (direction === "forward") {
      position.x += value;
    } else if (direction === "down") {
      position.y += value;
    } else if (direction === "up") {
      position.y -= value;
    }
  });

  return position.x * position.y;
}

export function ex2(input: string[]) {
  const position = { x: 0, y: 0, aim: 0 };

  input.forEach((command) => {
    const [direction, magnitude] = command.split(" ");
    const value = parseInt(magnitude, 10);

    if (direction === "forward") {
      position.x += value;
      position.y += value * position.aim;
    } else if (direction === "down") {
      position.aim += value;
    } else if (direction === "up") {
      position.aim -= value;
    }
  });

  return position.x * position.y;
}
