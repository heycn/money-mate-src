#!/usr/bin/env bash
function set_env {
  name=$1
  hint=$2
  [[ ! -z "${!name}" ]] && return
  while [ -z "${!name}" ]; do
    [[ ! -z "$hint" ]] && echo "> 请输入 $name: $hint" || echo "> 请输入 $name:"
    read $name
  done
  if [ ! -s ./.env ]; then
    echo "export $name=\"${!name}\"" > ./.env
  else
    sed -i "1s/^/export $name=\"${!name}\"\n/" ./.env
  fi

  echo "${name} 已保存至 ./.env 。如果需要修改，请自行编辑 ./.env"
}

touch ./.env && source ./.env
set_env user "GitHub 用户名"
set_env repo "GitHub 仓库名"

rm -rf dist
npm run build -- --base "/$repo"
cd dist
git init
git add .
git commit -m "deploy"
git branch -M master
git remote add origin git@github.com:$user/$repo.git
git push -f origin master:master
git open
cd -

# rm -rf dist
# pnpm run build --base=/money-mate-preview/
# cd dist
# git init
# git add .
# git commit -m deploy
# git remote add origin git@github.com:heycn/money-mate-preview.git
# git branch -M master
# git push -f origin master:master
# cd -
# echo ""
# echo -e "\033[34mhttps://heycn.github.io/money-mate-preview/\033[0m"
# echo ""
