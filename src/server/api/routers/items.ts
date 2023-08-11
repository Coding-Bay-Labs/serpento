import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { getHygraphItems } from "../hygraph/items";
import { z } from "zod";

export const itemsRouter = createTRPCRouter({
  search: publicProcedure
    .input(z.object({ searchTerm: z.string() }))
    .query(async (ctx) => {
      return await getHygraphItems({
        where: { name_contains: ctx.input.searchTerm },
      });
    }),
});
