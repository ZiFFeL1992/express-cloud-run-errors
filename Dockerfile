FROM node:lts-alpine

WORKDIR /app

COPY . /app

ENTRYPOINT exec node index.js
