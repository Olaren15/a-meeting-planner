import { Database } from "@/server/database/types";
import SQLite from "better-sqlite3";
import * as fs from "fs";
import { Kysely, SqliteDialect } from "kysely";

const sqlite = new SQLite(getDatabasePath());
const migration = fs.readFileSync("db/init.sql", "utf-8");
sqlite.exec(migration);

const dialect = new SqliteDialect({
    database: sqlite,
});

export const db = new Kysely<Database>({
    dialect,
});

function getDatabasePath(): string {
    return process.env.SQLITE_PATH || ":memory:";
}
