#!/bin/sh
# Credit: https://gist.github.com/willprice/e07efd73fb7f13f917ea

commit_docs() {
    # Stage the modified files in docs
    git add -f docs/
    # Create a new commit with a custom build message
    # with "[skip ci]" to avoid a build loop
    # and Travis build number for reference
    git commit -m "Regnerate docs: build $TRAVIS_BUILD_NUMBER [skip ci]"
}

git checkout master
commit_docs
