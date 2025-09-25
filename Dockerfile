# Etapa 1: build
FROM node:22
WORKDIR /usr/src/app

COPY package.json yarn.lock ./
RUN yarn install

COPY . .
RUN yarn build
ENV NODE_ENV=production

CMD ["sh", "-c", "npm run start"]
