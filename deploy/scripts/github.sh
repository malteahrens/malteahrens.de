#!/usr/bin/env bash
set -o errexit #abort if any command fails

#if no user identity is already set in the current git environment, use this:
git config --global user.email "you@example.com"
git config --global user.name "Your Name"

#repository to deploy to. must be readable and writable.
repo=https://malteahrens:${GH_TOKEN}@github.com/malteahrens/vita

# clear and re-create the out directory
#rm -rf release || exit 0;
#mkdir release;

git remote set-url origin $repo
git status
git add release
git commit -m "Android release for SDK 22 [ci skip]"
git push