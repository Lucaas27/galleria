import { env } from "@/env";
import { images } from "@/server/db/schema/images.sql";
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: env.DATABASE_URL,
  max: 20,
  connectionTimeoutMillis: 3000,
});

export const db = drizzle(pool, { schema: { images }, casing: "camelCase" });
export default db;
