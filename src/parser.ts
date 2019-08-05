import { dropHighest, dropLowest, sum } from "./operations";
import { forge } from "./diceforge";
import { Die } from "./die";

export const toRollReg = new RegExp("(\\dd\\d+!?)"); // searches for #d#, optionally ending with !
export const xReg = new RegExp("(-[HL])");           // searches for -H or -L
export const opReg = new RegExp("([+-/*]\\d\\w+)");  // searches for +#, -#, *# and /#

function getMatch(regex: RegExp, expression: string): string {
  if (regex.test(expression)) {
    return regex.exec(expression)![0];
  } else {
    return "null"
  }
}

/**
 * Returns a string representation of dice to be rolled
 * @remarks
 * Expects to see an expression like 4d6 or 1d20.
 * Will throw an error on bad input
 * @param expression - The string to parse for a dice expression
 * @returns A string representation of dice to be rolled
 */
export function getDice(expression: string): string {
  if (toRollReg.test(expression)) {
    // check right away if the regex would return a match
    return toRollReg.exec(expression)![0]; // return the first regex match for XdY(!)
  } else {
    // since we got no matches, throw an error because we cannot proceed
    throw new Error("Could not parse dice expression: " + expression);
  }
}

/**
 * Returns a string representation of die to be drop
 * @param expression - The string to parse for a drop expression
 * @returns A string representation of dice to be dropped
 */
export function getDrop(expression: string): string {
  return getMatch(xReg, expression);
}

/**
 * Returns a string representation of a dice operator
 * @param expression - The string to parse for a operator expression
 * @returns A string representation of operator to apply
 */
export function getOperator(expression: string): string {
  return getMatch(opReg, expression);
}

function processDrop(expression: string, results: Die[]) {
  const ex = getDrop(expression).replace("-", "- ").split(" ");
  switch (ex[1]) // check what the remaining character is
  {
    case "H": // if the character was an H
      results = dropHighest(results); // drop the highest die
      break;
    case "L": // if the character was an L
      results = dropLowest(results); // drop the lowest die
      break;
    default:
      throw new Error("Unrecognized drop symbol :" + ex[0]); // error: illegal drop symbol
  }
  return results;
}

function processOperator(expression: string, total: number) {
  const oX = getOperator(expression) // replace each symbol with itself plus a space so we can split on spaces
    .replace("+", "+ ")
    .replace("-", "- ")
    .replace("*", "* ")
    .replace("/", "/ ")
    .split(" ");
  switch (oX[0]) { // switch on the left side of the operation and do the math with the right
    case "+":
      return total + Number(oX[1]);
    case "-":
      return total - Number(oX[1]);
    case "*":
      return total * Number(oX[1]);
    case "/":
      return total / Number(oX[1]);
    default:
      return -1;
  }
}

/**
 * Evaluates standard dice notation and returns the result of the rolls
 * @param expression - The dice notation string to parse
 * @returns The result of the parsed die roll.
 */
export function evaluate(expression: string): number {
  let results = forge(expression); // create some dice to start with
  const dropInvoked = getDrop(expression) !== "null"; // check if a drop operator has been set
  const operandInvoked = getOperator(expression) !== "null"; // check if an operation has been set
  if (dropInvoked) { // if a drop was requested
    results = processDrop(expression, results); // handle it now
  }
  let total = sum(results); // tally up the dice
  if (operandInvoked) { // if an operation was requested
    total = processOperator(expression, total); // process it now
  }
  return total; // return the result now that all operators have been applied
}