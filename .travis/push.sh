#!/bin/sh

setup_git() {
    git config --global user.name "Travis CI"
    git config --global user.email "codemastermick@gmail.com"
}

commit_website_files() {
    git add ./docs/
    git commit --message "chore: regenerate docs build:$TRAVIS_BUILD_NUMBER [ci skip]"
}

upload_files() {
    git remote add origin https://${GH_TOKEN}@github.com/codemastermick/dicewerx.git >/dev/null 2>&1
    git push --quiet --set-upstream origin master
}

setup_git
commit_website_files
upload_files