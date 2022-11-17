FROM node:18.2.0-alpine3.15

WORKDIR /app

COPY package*.json .

RUN npm i

COPY . .

CMD ["npm", "run", "dev"]