import { procedure, router } from "../trpc";


export const exampleRouter = router({
    index: procedure.query(async (opts) => {
        console.log('hello from the server side.')
        return 'Hello world';
    }),
});
