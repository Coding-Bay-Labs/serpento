import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { getHygraphSpells } from "../hygraph/spells";
import { z } from "zod";

export const spellsRouter = createTRPCRouter({
  search: publicProcedure
    .input(z.object({ searchTerm: z.string() }))
    .query(async (ctx) => {
      const spells = await getHygraphSpells();
      return spells.filter(({ name }) => name.includes(ctx.input.searchTerm));
    }),
});
