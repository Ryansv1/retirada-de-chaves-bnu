# Etapa 1: build
FROM node:22-alpine
WORKDIR /usr/src/app

ENV NODE_ENV=production

COPY package.json yarn.lock ./
RUN yarn install

COPY . .
RUN yarn build

CMD ["sh", "-c", "npm run start"]
