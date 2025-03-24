# Build stage
FROM node:18.18-alpine3.18 AS builder

WORKDIR /build

# COptimise le cache
COPY package*.json ./
RUN npm ci --only=production

FROM node:18.18-alpine3.18

# Créer user non-root
RUN addgroup -S nodeapp && adduser -S nodeapp -G nodeapp
WORKDIR /app

# Copier les dépendances depuis le build stage
COPY --from=builder /build/node_modules ./node_modules

COPY --chown=nodeapp:nodeapp . .

# Port de l'api
EXPOSE 3000

# Utiliser l'user créer avant
USER nodeapp

CMD ["npm", "start"]