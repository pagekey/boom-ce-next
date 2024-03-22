import RouteResponse from "@/models/RouteResponse";
import { procedure, router } from "../trpc";
import { z } from 'zod';
import { User } from "@prisma/client";
import { TRPCError } from "@trpc/server";


export const userRouter = router({
    forgotPassword: procedure.input(z.object({
        email: z.string(),
    })).mutation(async (opts) => {
        // Design:
        //   Website: https://docs.boom.pagekey.io/architecture/user/index.html#forgot-password-route
        //   Source:  docs/architecture/user/index.md
        try {
            return {
                status: 'error',
                message: 'This route is not yet implemented.',
            } as RouteResponse;
        } catch(e) {
            return {
                status: 'error',
                message: 'An unknown error occurred.',
            } as RouteResponse;
        }
    }),
    getCurrentUser: procedure.query(async (opts) => {
        // Design:
        //   Website: https://docs.boom.pagekey.io/architecture/user/index.html#get-current-user-route
        //   Source:  docs/architecture/user/index.md
        try {
            throw new Error(); // uncomment to test what happens when not logged in
            return {
                loggedIn: true,
                user: {
                    id: 1,
                } as User,
            };
        } catch(e) {
            return {
                loggedIn: false,
                user: undefined,
            };
        }
    }),
    getLanguages: procedure.query(async (opts) => {
        // Design:
        //   Website: https://docs.boom.pagekey.io/architecture/user/index.html#get-languages-route
        //   Source:  docs/architecture/user/index.md
        try {
            return {
                status: 'error',
                message: 'This route is not yet implemented.',
            } as RouteResponse;
        } catch(e) {
            return {
                status: 'error',
                message: 'An unknown error occurred.',
            } as RouteResponse;
        }
    }),
    onboardUser: procedure.input(z.object({
        displayName: z.string(),
        nativeLanguageId: z.number(),
        targetLanguageId: z.number(),
    })).mutation(async (opts) => {
        // Design:
        //   Website: https://docs.boom.pagekey.io/architecture/user/index.html#onboard-user-route
        //   Source:  docs/architecture/user/index.md
        try {
            return {
                status: 'error',
                message: 'This route is not yet implemented.',
            } as RouteResponse;
        } catch(e) {
            return {
                status: 'error',
                message: 'An unknown error occurred.',
            } as RouteResponse;
        }
    }),
});
