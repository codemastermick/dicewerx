#!/bin/sh

echo "Configuring git"
git config --global user.name "$GH_TOKEN"
git config --global user.email "travis@travis-ci.org"

echo "Logged in as:"
git config --global user.name

git add ./docs/
git commit -m "chore: regenerate docs build:$TRAVIS_BUILD_NUMBER [ci skip]"

# Remove existing "origin"
git remote rm origin
# Add new "origin" with access token in the git URL for authentication
git remote add origin https://codemastermick:${GH_TOKEN}@github.com/codemastermick/dicewerx.git >/dev/null 2>&1
git push origin master --quiet

echo "Documentation publishing complete"
