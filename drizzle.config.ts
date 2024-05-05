import { defineConfig } from "drizzle-kit";
import "@/lib/drizzle/env-config";

export default defineConfig({
  schema: "./lib/drizzle/schema.ts",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.POSTGRES_URL!,
  },
});
