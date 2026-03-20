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

FROM base AS runner

RUN apk add --no-cache curl

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
