# Etapa 1: build
FROM node:22 AS builder
WORKDIR /usr/src/app

# Habilita corepack e pnpm
RUN corepack enable

COPY package.json pnpm-lock.yaml ./
RUN pnpm install

COPY . .
RUN pnpm run build

# Etapa 2: produção
FROM node:22 AS runner
WORKDIR /usr/src/app

RUN corepack enable

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --prod

COPY --from=builder /usr/src/app/dist ./dist

CMD ["sh", "-c", "npm run db:deploy && npm run db:seed && npm run start"]
