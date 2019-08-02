import { Die } from "./die";

export function dropLowest(numbers: Die[]): Die[] {
  const dice = [];
  numbers.sort();
  for (let i = 1; i < numbers.length; i++) {
    dice[i - 1] = numbers[i];
  }
  return dice;
}

export function dropHighest(numbers: Die[]): Die[] {
  const dice = [];
  numbers.sort();
  numbers.reverse();
  for (let i = 1; i < numbers.length; i++) {
    dice[i - 1] = numbers[i];
  }
  return dice;
}

export function sum(numbers: Die[], isExplosive: boolean): number {
  let total = 0;
  for (const die of numbers) {
    let result = die.roll();
    total += result;
    if (isExplosive) {
      while (result === die.sides) {
        result = die.roll();
        total += result;
      }
    }
  }
  return total;
}

export function add(dieA: Die, dieB: Die): Die[] {
  const dice = [];
  dice[0] = dieA;
  dice[1] = dieB;
  return dice;
}

export function rollMax(dice: Die[]): number {
  let total = 0;
  for (const die of dice) {
    total += die.sides;
  }
  return total;
}

export function rollMin(dice: Die[]): number {
  let total = 0;
  for (const die of dice) {
    total += 1;
  }
  return total;
}
