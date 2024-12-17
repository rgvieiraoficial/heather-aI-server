FROM node:20-slim

WORKDIR /usr/app

COPY package.json ./

COPY yarn.lock ./

RUN yarn

COPY . .

EXPOSE 3354

CMD ["yarn","start"]