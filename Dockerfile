# Etapa 1: build
FROM node:22-slim AS builder
WORKDIR /usr/src/app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .
RUN yarn build

# Etapa 2: runtime (somente o necessário)
FROM node:22-slim AS runner
WORKDIR /usr/src/app

ENV NODE_ENV=production

# Copia apenas dependências de runtime
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/dist ./dist
COPY package.json ./

CMD ["yarn", "start"]
