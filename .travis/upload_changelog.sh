#!/bin/sh
# Credit: https://gist.github.com/willprice/e07efd73fb7f13f917ea

commit_changelog() {
    # Stage the modified files in docs
    git add -f CHANGELOG.md
    # Create a new commit with a custom build message
    # with "[skip ci]" to avoid a build loop
    # and Travis build number for reference
    git commit -m "Regenerate changelog: build $TRAVIS_BUILD_NUMBER [skip ci]"
}

upload_files() {
    # Remove existing "origin"
    git remote rm origin
    # Add new "origin" with access token in the git URL for authentication
    git remote add origin https://codemastermick:${GH_TOKEN}@github.com/codemastermick/dicewerx.git >/dev/null 2>&1
    git push origin master --quiet
}

git checkout master
npm run version
commit_changelog

# Attempt to commit to git only if "git commit" succeeded
if [ $? -eq 0 ]; then
    echo "A new commit exists for CHANGELOG. Uploading to GitHub"
    upload_files
else
    echo "No changes in changelog file. Nothing to do"
fi
