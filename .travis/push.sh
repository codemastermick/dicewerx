#!/bin/sh

git remote rm origin
git remote add origin https://codemastermick:${GH_TOKEN}@github.com/codemastermick/dicewerx.git >/dev/null 2>&1
git push origin master --quiet
