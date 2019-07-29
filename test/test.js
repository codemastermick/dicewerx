'use strict';
var expect = require('chai').expect;
var index = require('../dist/index.js');

const expression="4d6-L*100";

describe('simple validation test', () => {
  it('should return greater than 0', () => {
    var result = index.evaluate(expression);
    expect(result).to.be.above(0);
  });
  it('should return a set of dice', () => {
    var result = index.forgeDiceFromExpression(expression);
    const length=Number(index.getDice(expression).split("d")[0]);
    expect(result.length).to.equal(length);
  });
});