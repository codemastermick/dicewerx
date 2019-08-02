'use strict';
var expect = require('chai').expect;
var index = require('../dist/index.js');

const expression="4d6-L*100";

describe('simple validation test', () => {
  it('should return a number within range', () => {
    var result = index.evaluate(expression);
    expect(result).to.be.above(299).and.to.be.below(1801);
  });
  it('should return 2', () => {
    var dice=index.forge("2d6");
    var result = index.rollMin(dice);
    expect(result).to.be.equal(2);
  });
  it('should return 12', () => {
    var dice=index.forge("2d6");
    var result = index.rollMax(dice);
    expect(result).to.be.equal(12);
  });
});