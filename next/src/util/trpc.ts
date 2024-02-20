import { httpBatchLink } from '@trpc/client';
import { createTRPCNext } from '@trpc/next';
import type { AppRouter } from '@/server/routers/_app';import { getBaseUrl } from './baseUrl';


export const trpc = createTRPCNext<AppRouter>({
    config(opts) {
        return {
            links: [
                httpBatchLink({
                    url: `${getBaseUrl()}/api/trpc`,

                    async headers() {
                        let headers = {};
                        // auth token stuff here
                        return headers;
                    },
                })
            ]
        }
    },
    ssr: false,
});
