#!/bin/sh

setup_git() {
    git config --global user.name "Travis CI"
    git config --global user.email "travis@travis-ci.org"
}

commit_website_files() {
    git add ./docs/
    git commit -m "chore: regenerate docs build:$TRAVIS_BUILD_NUMBER [ci skip]"
}

upload_files() {
    git remote add origin https://"$GH_TOKEN"@github.com/codemastermick/dicewerx.git >/dev/null 2>&1
    git push origin master --quiet
}

setup_git
commit_website_files

# Attempt to commit to git only if "git commit" succeeded
if [ $? -eq 0 ]; then
  echo "A new commit with changed documentation exists. Uploading to GitHub"
  upload_files
else
  echo "No changes in documentation files. Nothing to do"
fi
