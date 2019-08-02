export class Die {
  public sides: number;
  public result: number;
  constructor(sides: number) {
    this.sides = sides;
    this.result = this.roll();
  }
  public roll(): number {
    return Math.floor(Math.random() * this.sides + 1);
  }
}
