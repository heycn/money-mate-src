#!/usr/bin/env bash
rm -rf dist
pnpm run build --base=/money-mate-preview/
cd dist
git init
git add .
git commit -m deploy
git branch -M master
git remote add origin git@github.com:heycn/money-mate-preview.git
git push -f origin master:master
cd -
echo ""
echo -e "\033[34mhttps://heycn.github.io/money-mate-preview/\033[0m"
echo ""
