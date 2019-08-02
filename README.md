# dicewerx

npm package for handling standard dice notation

[![Build Status](https://travis-ci.org/codemastermick/dicewerx.svg?branch=master)](https://travis-ci.org/codemastermick/dicewerx)

A standard dice notation parser and evaluator. Can handle standard dice notation expressions and returns the results of the expression as a number.

## Examples

```
evaluate("1d20")      // Rolls one d20
evaluate("4d6-L")     // Rolls 4 d6 and drops the lowest result
evaluate("4d4*10")    // Rolls 4 d4 and multiples the result by 10
evaluate("4d6-L+50")  // Rolls 4 d6, drops the lowest, then adds 50 to the result
evaluate(1d20!)       // Rolls 1 d20, rolling again on a 20
evaluate(4d6!-5)       // Rolls 4 d6, rolling again on a 6 then subtracting 5 from the result
```
