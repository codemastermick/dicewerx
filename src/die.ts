export class Die {
  public sides: number;
  constructor(sides: number) {
    this.sides = sides;
  }
  public roll(): number {
    return Math.floor(Math.random() * this.sides + 1);
  }
}
