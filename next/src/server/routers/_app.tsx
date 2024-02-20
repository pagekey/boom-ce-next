import { router } from "../trpc";
import { exampleRouter } from "./example";


export const appRouter = router({
    // add subrouters here
    example: exampleRouter,
});

export type AppRouter = typeof appRouter;
