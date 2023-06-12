#!/bin/sh

CUR=$(pwd)

CURRENT=$(cd $(dirname $0);pwd)
echo "${CURRENT}"

cd "${CURRENT}"
git pull --prune
result=$?
if [ $result -ne 0 ]; then
  cd "${CUR}"
  exit $result
fi
echo ""
pwd
pnpm install -r && pnpm up -r && pnpm -r lint-fix && pnpm all
result=$?
if [ $result -ne 0 ]; then
  cd "${CUR}"
  exit $result
fi

# cd "${CURRENT}/cdk"
# git pull --prune
# result=$?
# if [ $result -ne 0 ]; then
#   cd "${CUR}"
#   exit $result
# fi
# echo ""
# pwd
# rm -rf node_modules && pnpm install && pnpm dedupe && pnpm up && pnpm lint-fix && pnpm build
# result=$?
# if [ $result -ne 0 ]; then
#   cd "${CUR}"
#   exit $result
# fi
git commit -am "Bumps node modules" && git push
result=$?
if [ $result -ne 0 ]; then
  cd "${CUR}"
  exit $result
fi

cd "${CUR}"
