FROM node:20-alpine3.20

WORKDIR /usr/app

COPY package.json ./

COPY yarn.lock ./

RUN yarn

COPY . .

RUN npx prisma generate

EXPOSE 3354

CMD ["yarn", "start"]