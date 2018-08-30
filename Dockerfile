FROM node:slim

WORKDIR /app
COPY . /app

RUN    if [ ! -d "/app/build" ]; then echo '未检测到build文件夹，请先build项目文件' \
    && exit 1; fi;

RUN  npm config set registry "https://registry.npm.taobao.org/" \
    && npm install --prod

EXPOSE 8080

CMD    node scripts/prod-server.js