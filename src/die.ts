/**
 * A N sided die that is capable of producing a random number between 1 and N
 * @remarks
 * Has its number of sides set at creation and get rolled immediately.
 * Can be rerolled on demand
 */
export class Die {
  public sides: number;
  public result: number;
  constructor(sides: number) {
    this.sides = sides;
    this.result = this.roll();
  }
  /**
   * Rolls the die and returns the result
   * @remarks
   * Returns a random number between 1 and sides
   * @returns A random number between 1 and sides
   */
  public roll(): number {
    this.result = Math.floor(Math.random() * this.sides + 1);
    return this.result;
  }
}
