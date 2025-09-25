# Etapa 1: build
FROM node:22
WORKDIR /usr/src/app

COPY package.json package-lock.json ./
RUN npm install

ENV NODE_ENV=production

COPY . .
RUN npm run build

CMD ["sh", "-c", "npm run start"]
