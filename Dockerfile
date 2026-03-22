FROM node:24.13-alpine AS base

RUN addgroup --system --gid 1001 nodejs && \
  adduser --system --uid 1001 nextjs

FROM base AS deps

ARG COOLIFY_RESOURCE_UUID

RUN apk add --no-cache libc6-compat
WORKDIR /app

RUN corepack enable && \
  pnpm config set store-dir /root/.pnpm-store

COPY package.json pnpm-lock.yaml ./
RUN --mount=type=cache,id=${COOLIFY_RESOURCE_UUID}-/root/local/share/pnpm/store/v3,target=/root/.pnpm-store \
  pnpm i --frozen-lockfile

FROM base AS builder

ARG COOLIFY_RESOURCE_UUID

WORKDIR /app

COPY --from=deps --chown=nextjs:nodejs /app/node_modules ./node_modules

COPY --chown=nextjs:nodejs . .

ENV NEXT_TELEMETRY_DISABLED=1

RUN --mount=type=cache,id=${COOLIFY_RESOURCE_UUID}-next/cache,target=/app/.next/cache,uid=1001,gid=1001 \
  --mount=type=cache,id=${COOLIFY_RESOURCE_UUID}-node_modules/cache,target=/app/node_modules/.cache,uid=1001,gid=1001 \
  corepack enable pnpm && pnpm run build

FROM nginx:alpine AS runner

RUN apk add --no-cache curl

COPY --from=builder --chown=nginx:nginx /app/out /usr/share/nginx/html

RUN echo 'server { listen 80; root /usr/share/nginx/html; index index.html; location / { try_files $uri $uri/ $uri.html =404; } }' > /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
