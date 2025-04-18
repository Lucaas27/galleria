// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { createTable, timestamps } from "@/server/db/schema/tables.helpers";
import { index } from "drizzle-orm/pg-core";

export const images = createTable(
  "images",
  d => ({
    id: d.uuid().notNull().primaryKey().defaultRandom(),
    name: d.varchar({ length: 256 }).notNull(),
    url: d.varchar({ length: 1024 }).notNull(),
    ...timestamps,
  }),
  t => [index("name_idx").on(t.name)],
);
