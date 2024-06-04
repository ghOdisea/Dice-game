FROM node:latest

WORKDIR /app

COPY package*.json .

RUN npm install

RUN npm run build

EXPOSE 3000

COPY . .

CMD npm run dev