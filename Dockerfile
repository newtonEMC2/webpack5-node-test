# FROM node:15-alpine3.10
FROM node:15

RUN adduser ge

RUN mkdir -p /home/ge/app/node_modules && chown -R ge:ge /home/ge/app

WORKDIR /home/ge/app

COPY package*.json ./

USER ge

COPY --chown=ge:ge . .

RUN npm install

RUN npm install pm2@4.5.6

# EXPOSE 3002

CMD ["npm", "start" ]