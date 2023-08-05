import { createServerSideHelpers } from "@trpc/react-query/server";
import { appRouter } from "@/server/api/root";
import superjson from "superjson";
import { createInnerTRPCContext } from "./trpc";

export const trpcHelper = createServerSideHelpers({
  router: appRouter,
  ctx: createInnerTRPCContext({}),
  transformer: superjson,
});
