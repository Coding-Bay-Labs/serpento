import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { getHygraphSpells } from "../hygraph/spells";
import { z } from "zod";

export const spellsRouter = createTRPCRouter({
  search: publicProcedure
    .input(z.object({ searchTerm: z.string() }))
    .query(async (ctx) => {
      return await getHygraphSpells({
        where: { name_contains: ctx.input.searchTerm },
      });
    }),
});
