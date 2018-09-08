#!/bin/bash
source /etc/profile

touch /update.log
cd /app
echo "`date`: 开始拉取更新" >> /update.log

git pull -u origin master
npm config set registry "https://registry.npm.taobao.org/"
npm install
npm run build

echo "`date`: 更新完成" >> /update.log
