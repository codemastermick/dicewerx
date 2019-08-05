import { Die } from "./die";

function assembleNumbers(numbers: Die[]): Die[] {
  const newArray: Die[] = [];
  for (let i = 1; i < numbers.length; i++) {
    // start from one so we miss the lowest number
    newArray[i - 1] = numbers[i]; // add the die to the temp array
  }
  return newArray;
}

/**
 * Drops the highest die in the set
 * @remarks
 * Works on any number of dice in a array, even of varying sides
 * @param numbers - A set of dice
 * @returns The same set without the highest result that was rolled
 */
export function dropLowest(numbers: Die[]): Die[] {
  numbers.sort(); // put the array in numerical order
  return assembleNumbers(numbers); // return the array with the lowest element missing
}

/**
 * Drops the lowest die in the set
 * @remarks
 * Works on any number of dice in a array, even of varying sides
 * @param numbers - A set of dice
 * @returns The same set without the lowest result that was rolled
 */
export function dropHighest(numbers: Die[]): Die[] {
  numbers.sort(); // put the array in numerical order
  numbers.reverse(); // now reverse it so high numbers come first
  return assembleNumbers(numbers); // return the array with the highest element missing
}

/**
 * Rolls the dice and returns the actual result
 * @remarks
 * Works on any number of dice in a array, even of varying sides
 * @param numbers - A set of dice
 * @returns The result for the set of dice
 */
export function sum(numbers: Die[]): number {
  let total = 0;
  for (const die of numbers) {
    total += die.result;
  }
  return total;
}

/**
 * Rolls the dice and returns the maximum result
 * @remarks
 * Works on any number of dice in a array, even of varying sides
 * @param numbers - A set of dice
 * @returns The highest possible result for the set of dice
 */
export function rollMax(dice: Die[]): number {
  let total = 0;
  for (const die of dice) {
    total += die.sides;
  }
  return total;
}

/**
 * Rolls the dice and returns the minimum result
 * @remarks
 * Works on any number of dice in a array, even of varying sides
 * @param numbers - A set of dice
 * @returns The lowest possible result for the set of dice
 */
export function rollMin(dice: Die[]): number {
  let total = 0;
  for (const die of dice) {
    total += 1;
  }
  return total;
}
