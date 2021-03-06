import { Die } from "./die";

function testExpression(expression: string): boolean {
  return expression.includes("d");
}

/**
 * Create dice based on the input expression
 * @remarks
 * Handles explosive dice
 * @param expression - The string to parse for a dice expression
 * @returns An array of dice
 */
export function forgeDice(expression: string): Die[] {
  if (!testExpression(expression)) {
    throw new Error("Could not forge dice from expression: " + expression);
  }
  const dX = expression.split("d");                          // cut up the expression
  let toRoll = Math.abs(Number.parseInt(dX[0], undefined));  // use let so we can explode
  const sides = Math.abs(Number.parseInt(dX[1].replace("!", ""), undefined)); // sides per die
  const dice = [];                                           // used to hold the new dice
  for (let i = 0; i < toRoll; i++) {                         // iterate over the dice to create
    const die = new Die(sides);                              // create a new Die
    dice[i] = die;                                           // assign it to the array
    if (die.result === sides && dX[1].endsWith("!")) {       // if roll is explosive and max
      toRoll++;                                              // increment toRoll
      dice[toRoll] = new Die(sides);                         // add a new die to the end
    }
  }
  return dice;                                               // return the created dice array
}
