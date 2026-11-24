FROM node:alpine

WORKDIR /app

COPY package.json .
COPY server.js .

EXPOSE 3000

CMD ["npm", "start"]
