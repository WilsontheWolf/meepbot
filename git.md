# if you can't sync due to merge confilcs:

rm * -r

rm .trigger-rebuild

rm -rf .git

git init .

git remote add -t \* -f origin https://github.com/wilsonthewolf/meepbot

git checkout master

# to update:
git pull origin master
