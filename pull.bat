echo Pulling from %2
@echo off
git add .
git commit -m %1
git pull origin %2