FROM node:18.18.1
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT 80

# Install requirements
RUN apt-get update && apt-get install -y ca-certificates && update-ca-certificates git

WORKDIR /app

COPY . .

RUN chown -R node ./
USER node

RUN npm i

# Replace with latest tag
RUN git describe --tags --abbrev=0 | xargs -I {} sed -i "s/'non-git'/'{}'/g" src/lib/version.ts
# Replace version with Git short sha
# RUN git rev-parse --short HEAD | xargs -I {} sed -i "s/'non-git'/'{}'/g" src/lib/version.ts

RUN npx prisma generate
RUN npm run build
