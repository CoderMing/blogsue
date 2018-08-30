FROM node:slim

WORKDIR /app
COPY . /app

RUN    npm config set registry "https://registry.npm.taobao.org/" \
    && npm install \
    && npm run build:hash

EXPOSE 8080

CMD    node scripts/prod-server.js