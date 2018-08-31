FROM node:slim

WORKDIR /app
COPY . /app

RUN    npm config set registry "https://registry.npm.taobao.org/" \
    && npm i \
    && npm run build \
    && rm -rf node_modules/ \
    && npm i --prod

EXPOSE 8080

CMD    node scripts/prod-server.js