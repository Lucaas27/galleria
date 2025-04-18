import { pgTableCreator, timestamp } from "drizzle-orm/pg-core";

/**
 * This setup uses pgTableCreator for use in multi-project schema. Use the same
 * database instance for multiple projects.
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator(name => `galleria_${name}`);

export const timestamps = {
  createdAt: timestamp({ withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp({ withTimezone: true }).$onUpdate(() => new Date()),
};
