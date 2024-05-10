import { defineConfig } from "drizzle-kit";
import "@/libraries/drizzle/env-config";

export default defineConfig({
  schema: "./libraries/drizzle/schema.ts",
  out: "./libraries/drizzle/migrations",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.POSTGRES_URL!,
  },
});
