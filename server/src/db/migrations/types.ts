export interface Migration {
  /** Unique, increasing integer. Never renumber a migration that has shipped. */
  version: number;
  name: string;
  /** One or more SQL statements, run inside a single transaction. */
  sql: string;
}
