#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init

git config --global user.email "arthur.panazolo@acad.pucrs.br"
git config --global user.name "Arthur Panazolo"

git add -A
git commit -m 'deploy'



# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:nothingnothings/VueDex.git master:gh-pages

cd -