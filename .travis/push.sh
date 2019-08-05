#!/bin/sh

setup_git() {
    git config --global user.name "Travis CI"
    git config --global user.email "travis@travis-ci.org"
}

commit_files() {
    git add ./docs/
    git commit -m "chore: regenerate docs build:$TRAVIS_BUILD_NUMBER [ci skip]"
}

upload_files() {
    # Remove existing "origin"
    git remote rm origin
    # Add new "origin" with access token in the git URL for authentication
    git remote add origin https://codemastermick:${GH_TOKEN}@github.com/codemastermick/dicewerx.git >/dev/null 2>&1
    git push origin master
}

setup_git
commit_files
upload_files
