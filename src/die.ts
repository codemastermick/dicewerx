export class Die {
  public sides: number;
  public result: number;
  constructor(sides: number) {
    this.sides = sides;
    this.result = 0;
  }
  public roll(): number {
    this.result = Math.floor(Math.random() * this.sides + 1);
    return this.result;
  }
}
