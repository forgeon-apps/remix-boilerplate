// app/routes/status.tsx
import type { LoaderFunctionArgs } from "@vercel/remix";
import { json } from "@vercel/remix";

export const loader = async (_args: LoaderFunctionArgs) => {
  const startedAt = process.env.BOOT_TIME
    ? new Date(process.env.BOOT_TIME)
    : null;

  const now = new Date();

  return json({
    name: "remix-playground",
    runtime: "node",
    status: "online",
    version: "1.0.0",
    description:
      "Simple Remix playground used to test health checks and routing on Forgeon.",
    timestamp: now.toISOString(),
    uptime_seconds: startedAt
      ? Math.max(0, Math.round((now.getTime() - startedAt.getTime()) / 1000))
      : null,
    endpoints: {
      root: "/",
      info: "/info",
      about: "/about",
      framework: "/framework",
      edge_example: "/edge",
    },
  });
};

// No default export = no HTML page, only JSON response
