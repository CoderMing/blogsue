FROM node

WORKDIR /app
COPY . /app

ADD /scripts/crontab /etc/cron.d/cron
RUN chmod 0644 /etc/cron.d/cron

RUN apt-get update && apt-get -y install cron

RUN git remote remove origin \
    && git remote add origin https://github.com/coderming/blogsue.git

RUN chmod +x /app/scripts/update.sh

RUN npm config set registry "https://registry.npm.taobao.org/" \
    && npm install \
    && npm run build
    
EXPOSE 8080

CMD    node scripts/prod-server.js