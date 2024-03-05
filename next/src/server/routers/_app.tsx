import { router } from "../trpc";
import { userRouter } from "./user";


export const appRouter = router({
    // add subrouters here
    user: userRouter,
});

export type AppRouter = typeof appRouter;
