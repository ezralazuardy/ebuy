import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";
import * as schema from "@/libraries/drizzle/schema";
import "@/libraries/drizzle/env-config";

export const database = drizzle(sql, { schema });
