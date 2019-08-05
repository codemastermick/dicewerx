'use strict';
var expect = require('chai').expect;
var index = require('../dist/index.js');

describe('roll tests', () => {
  it('4d6-L*100 should return a number within range of 300 and 1800', () => {
    var result = index.evaluate("4d6-L*100");
    expect(result).to.be.above(299).and.to.be.below(1801);
  });
  it('4d6-L should return a number 3 and 18', () => {
    var result = index.evaluate("4d6-L");
    expect(result).to.be.above(2).and.to.be.below(19);
  });
});

describe('forge test',()=>{
  it('4d6 should return 4 dice', () => {
    var dice=index.forge("4d6");
    expect(dice.length).to.be.equal(4);
  });
});

describe('min/max tests',()=>{
  it('2d6 should return 2', () => {
    var dice=index.forge("2d6");
    var result = index.rollMin(dice);
    expect(result).to.be.equal(2);
  });
  it('2d6 should return 12', () => {
    var dice=index.forge("2d6");
    var result = index.rollMax(dice);
    expect(result).to.be.equal(12);
  });
});