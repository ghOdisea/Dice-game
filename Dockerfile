FROM node:20.10

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

EXPOSE 3000

CMD ["node", "/app/dist/server/server.js"]
