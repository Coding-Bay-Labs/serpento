import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { getHygraphClasses } from "../hygraph/classes";

export const classRouter = createTRPCRouter({
  getAll: publicProcedure.query(async () => {
    return await getHygraphClasses();
  }),
});
