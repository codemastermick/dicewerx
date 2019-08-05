#!/bin/sh

setup_git() {
    git config --global user.name "Travis CI"
    git config --global user.email "travis@travis-ci.org"
}

commit_website_files() {
    git add ./docs/
    git commit --message "chore: regenerate docs build:$TRAVIS_BUILD_NUMBER [ci skip]"
}

upload_files() {
    git remote add origin https://${GH_TOKEN}@github.com/codemastermick/dicewerx.git git 
    git push --quiet --set-upstream origin master
}

setup_git
commit_website_files
upload_files