# dicewerx

npm package for handling standard dice notation

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/2c829abdda8747998a01d520f9ed7b0e)](https://app.codacy.com/app/codemastermick/dicewerx?utm_source=github.com&utm_medium=referral&utm_content=codemastermick/dicewerx&utm_campaign=Badge_Grade_Dashboard)
[![npm (tag)](https://img.shields.io/npm/v/dicewerx/latest)](https://www.npmjs.com/package/dicewerx)
[![npm (tag)](https://img.shields.io/npm/v/dicewerx/beta)](https://www.npmjs.com/package/dicewerx)
[![GitHub](https://img.shields.io/github/license/codemastermick/dicewerx)](https://github.com/codemastermick/dicewerx/blob/master/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/codemastermick/dicewerx)](https://github.com/codemastermick/dicewerx/issues)

[![Build Status](https://travis-ci.org/codemastermick/dicewerx.svg?branch=master)](https://travis-ci.org/codemastermick/dicewerx)
[![Greenkeeper badge](https://badges.greenkeeper.io/codemastermick/dicewerx.svg)](https://greenkeeper.io/)

A standard dice notation parser and evaluator. Can handle standard dice notation expressions and returns the results of the expression as a number.

## Examples

```bash 
evaluate("1d20") # Rolls one d20
evaluate("4d6-L") # Rolls 4 d6 and drops the lowest result
evaluate("4d4*10") # Rolls 4 d4 and multiples the result by 10
evaluate("4d6-L+50") # Rolls 4 d6, drops the lowest, then adds 50 to the result
evaluate("1d20!") # Rolls 1 d20, rolling again on a 20
evaluate("4d6!-5") # Rolls 4 d6, rolling again on a 6 then subtracting 5 from the result
```

## Getting Started

See the getting started guide [here](https://github.com/codemastermick/dicewerx/wiki#getting-started).

## Roadmap

* Nested expression support (multiple expressions in one expression)

## Documentation

Current documentation is available [here](https://codemastermick.github.io/dicewerx/index.html).

