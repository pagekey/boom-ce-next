# Boom CE: Next.js

## Getting Started

1. Install `node v16.18.1`.

2. Install deps so that they are mounted into the dev container: `npm i`

3. Run: `docker-compose up`

4. Get a shell into the web container and migrate the DB:

    ```bash
    docker-compose exec web sh
    npx prisma migrate dev --name init
    ```

4. Visit `localhost:3000` and start coding.

## Live-Reload for Native

1. Run this to get Android live reloading.

```bash
ionic cap run android -l --external
```

## Deploying Client(s)

1. Export static site to web. Results are in `out/`.

```bash
npm run export
```

2. Sync mobile app code.

```bash
npx cap sync
```

3. Run Android.

```bash
export CAPACITOR_ANDROID_STUDIO_PATH=/opt/android-studio/bin/studio.sh
npx cap open android
```

4. Run iOS.

```bash
npx cap open ios
```

## Deploying Server

```bash
docker-compose build
docker-compose push
```
