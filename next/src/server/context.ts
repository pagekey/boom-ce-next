import * as trpcNext from '@trpc/server/adapters/next';


export async function createContext({
    req, res,
}: trpcNext.CreateNextContextOptions) {
    if (req.method == 'OPTIONS') {
        return res.status(200).json({ message: 'OPTIONS OK' });
    }
    // Get the user context info from token / whatever

    return {
        // context info here
    };
}

export type Context = Awaited<ReturnType<typeof createContext>>;
