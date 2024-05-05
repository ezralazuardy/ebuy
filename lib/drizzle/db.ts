import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";
import * as schema from "@/lib/drizzle/schema";
import "@/lib/drizzle/env-config";

export const db = drizzle(sql, { schema });
