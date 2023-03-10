# Base stage
# ---------------------------------------
FROM node:18-bullseye-slim AS base

# This get shared across later stages
WORKDIR /node
RUN chown node:node /node
USER node

# Development stage
# ---------------------------------------
FROM base AS development

USER root
RUN \
  apt-get -yq update && \
  apt-get -yq install curl 
USER node
RUN echo 'alias ll="ls -als"' >> ~/.profile

ENV NODE_ENV=development
ENV NEXT_TELEMETRY_DISABLED 1
ENV SERVER_PORT=3000
EXPOSE $SERVER_PORT 9229

COPY --chown=node:node package*.json ./
RUN \
  npm i

# WORKDIR /node/app

CMD ["npm", "run", "dev"]

# Test stage
# ---------------------------------------
FROM base AS test

ENV NODE_ENV=development
ENV SERVER_PORT=3000
COPY --chown=node:node package*.json ./

RUN \
  npm ci

COPY --chown=node:node ./src ./src
COPY --chown=node:node ./jest.*.js .
COPY --chown=node:node ./tsconfig.json .

RUN \
  npm run test:ci

# Production stage
# ---------------------------------------
FROM base as preproduction

ENV NODE_ENV=development
ENV SERVER_PORT=3000

COPY --chown=node:node package*.json ./

RUN \
  npm ci

COPY --chown=node:node ./src ./src
COPY --chown=node:node ./tsconfig.json .
COPY --chown=node:node ./tailwind.config.js .
COPY --chown=node:node ./postcss.config.js .
COPY --chown=node:node ./next.config.js .

RUN \
  npm run build


ENV NODE_ENV=production
RUN \
  npm ci --no-optional --production 
# ---------------------------------------
FROM gcr.io/distroless/nodejs:18 as production

WORKDIR /node

ENV NODE_ENV=production
ENV SERVER_PORT=3000

COPY --from=preproduction /node/node_modules ./node_modules
COPY --from=preproduction /node/.next ./.next

EXPOSE $SERVER_PORT

CMD ["./node_modules/next/dist/bin/next", "start"]
