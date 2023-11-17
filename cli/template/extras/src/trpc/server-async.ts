import { headers } from "next/headers";

import { appRouter } from "~/server/api/root";
import { createInnerTRPCContext } from "~/server/api/trpc";

export const api = appRouter.createCaller(
  await createInnerTRPCContext({ headers: headers() })
);
