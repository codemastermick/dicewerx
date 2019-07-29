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
export function sum(numbers: Die[]): number {
  let total = 0;
  for (let i = 1; i < numbers.length; i++) {
    total += numbers[i].roll();
  }
  return total;
}
