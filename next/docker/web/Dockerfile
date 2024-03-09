FROM node:18-alpine

WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT 80

RUN apk add git

COPY package.json .
COPY package-lock.json .
RUN npm install

COPY . .
# Replace with latest tag
RUN git describe --tags --abbrev=0 | xargs -I {} sed -i "s/'non-git'/'{}'/g" src/lib/version.ts
# Replace version with Git short sha
# RUN git rev-parse --short HEAD | xargs -I {} sed -i "s/'non-git'/'{}'/g" src/lib/version.ts

RUN npx prisma generate
RUN npm run build

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

RUN touch .env && chown nextjs:nodejs .env

USER nextjs

CMD /bin/sh -c "echo DB_URL=\"postgresql://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?schema=${DB_SCHEMA}\" >> .env && npm start"
