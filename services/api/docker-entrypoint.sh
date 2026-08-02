#!/bin/sh

set -e

echo "Applying Prisma migrations..."

cd /app/packages/database

npx prisma migrate deploy

echo "Starting API..."

cd /app/services/api

exec npm run dev