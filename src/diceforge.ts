import { Die } from "./die";

export function forgeDiceFromExpression(expression: string): Die[] {
  const dX = expression.split("d");
  const toRoll = Number.parseInt(dX[0], undefined);
  const sides = Number.parseInt(dX[1], undefined);
  const dice = [];
  for (let i = 0; i < toRoll; i++) {
    const die = new Die(sides);
    dice[i] = die;
  }
  return dice;
}
