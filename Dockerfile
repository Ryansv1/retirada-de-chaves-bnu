# Etapa 1: build
FROM node:22-alpine
WORKDIR /usr/src/app

ENV NODE_ENV=production

COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build

CMD ["sh", "-c", "npm run start"]
