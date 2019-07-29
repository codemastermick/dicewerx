import { dropHighest, dropLowest, sum } from "./operations";
import { forgeDiceFromExpression } from "./diceforge";

export const toRollReg = new RegExp("(\\dd\\d+)");
export const xReg = new RegExp("(-[HL])");
export const opReg = new RegExp("([+-/*]\\d\\w+)");

export function getDice(expression: string): string {
  if (toRollReg.test(expression)) {
    return toRollReg.exec(expression)![0];
  } else {
    throw new Error("Could not parse dice expression: " + expression);
  }
}
export function getDrop(expression: string): string {
  if (xReg.test(expression)) {
    return xReg.exec(expression)![0];
  } else {
    return "null";
  }
}
export function getOperator(expression: string): string {
  if (opReg.test(expression)) {
    return opReg.exec(expression)![0];
  } else {
    return "null";
  }
}
export function evaluate(expression: string): number {
  let results = forgeDiceFromExpression(expression);
  const dropInvoked = getDrop(expression) !== "null";
  const operandInvoked = getOperator(expression) !== "null";

  if (dropInvoked) {
    const xX = getDrop(expression).replace("-", "");
    switch (xX) {
      case "H":
        results = dropHighest(results);
        break;
      case "L":
        results = dropLowest(results);
        break;
      default:
        throw new Error("Unrecognized drop symbol");
    }
  }
  let total = sum(results);
  if (operandInvoked) {
    const op = opReg.exec(expression)![0];
    const oX = op
      .replace("+", "+ ")
      .replace("-", "- ")
      .replace("*", "* ")
      .replace("/", "/ ")
      .split(" ");
    switch (oX[0]) {
      case "+":
        total += Number(oX[1]);
        break;
      case "-":
        total -= Number(oX[1]);
        break;
      case "*":
        total *= Number(oX[1]);
        break;
      case "/":
        total /= Number(oX[1]);
        break;
    }
  }
  return total;
}
