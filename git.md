# if you can't sync due to merge confilcs:
```
m * -r
rm .trigger-rebuild
rm -rf .git
git init .
git remote add -t \* -f origin https://github.com/wilsonthewolf/meepbot
```
then:
```
git checkout master
```
# to update:
```
git pull origin master
```
