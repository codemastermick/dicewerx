"use strict";
var expect = require('chai').expect;
var index = require('../dist/index.js');

describe("roll tests", () => {
  it("4d6-L*100 should return a number within range of 300 and 1800", () => {
    var result = index.evaluate("4d6-L*100");
    expect(result)
      .to.be.above(299)
      .and.to.be.below(1801);
  });
  it("4d6-L should return a number 3 and 18", () => {
    var result = index.evaluate("4d6-L");
    expect(result)
      .to.be.above(2)
      .and.to.be.below(19);
  });
});

describe("forge tests", () => {
  it("should return a set of dice", () => {
    var dice = index.forge("4d6");
    expect(dice).not.to.be.undefined;
  });
  it("should not return dice on bad expression", () => {
    expect(index.evaluate("4e6")).to.be.NaN;
  });
  it("4d6 should return 4 dice", () => {
    var dice = index.forge("4d6");
    expect(dice.length).to.be.equal(4);
  });
});

describe("drop tests", () => {
  it("4d6-L should be between 3 and 18", () => {
    var result = index.evaluate("4d6-L");
    expect(result).to.be.greaterThan(2).and.to.be.lessThan(19);
  });
  it("4d6-H should be between 3 and 18", () => {
    var result = index.evaluate("4d6-H");
    expect(result).to.be.greaterThan(2).and.to.be.lessThan(19);
  });
});

describe("min/max tests", () => {
  it("min(2d6) should return 2", () => {
    var dice = index.forge("2d6");
    var result = index.rollMin(dice);
    expect(result).to.be.equal(2);
  });
  it("max(2d6) should return 12", () => {
    var dice = index.forge("2d6");
    var result = index.rollMax(dice);
    expect(result).to.be.equal(12);
  });
});

describe("operator tests", () => {
  it("addition test", () => {
    var result = index.evaluate("1d1+1");
    expect(result).to.be.greaterThan(0).and.to.be.lessThan(3);
  });
  it("subtraction test", () => {
    var result = index.evaluate("2d1-1");
    expect(result).to.be.greaterThan(0).and.to.be.lessThan(3);
  });
  it("multiplication test", () => {
    var result = index.evaluate("2d1*2");
    expect(result).to.be.greaterThan(1).and.to.be.lessThan(3);
  });
  it("division test", () => {
    var result = index.evaluate("2d1/1");
    expect(result).to.be.greaterThan(0).and.to.be.lessThan(3);
  });
});
