FROM node:22-alpine

WORKDIR /app

# Copy workspace
COPY package*.json ./
COPY apps ./apps
COPY services ./services
COPY packages ./packages

# Copy startup script
COPY services/api/docker-entrypoint.sh /usr/local/bin/

RUN chmod +x /usr/local/bin/docker-entrypoint.sh

# Install all workspace dependencies
RUN npm install

# Generate Prisma Client
RUN npx prisma generate --config packages/database/prisma.config.ts

# Build shared package
RUN npm --prefix packages/database run build

# Run API
WORKDIR /app/services/api

EXPOSE 3001

CMD ["docker-entrypoint.sh"]