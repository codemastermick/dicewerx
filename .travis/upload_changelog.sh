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

git checkout master
npm run version
commit_changelog
