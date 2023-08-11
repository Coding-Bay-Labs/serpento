import { classRouter } from "./routers/classes";
import { createTRPCRouter } from "@/server/api/trpc";
import { spellsRouter } from "./routers/spells";
import { itemsRouter } from "./routers/items";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  classes: classRouter,
  spells: spellsRouter,
  items: itemsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
