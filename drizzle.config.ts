import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./.drizzle",
  dialect: "postgresql",
  schema: ["./src/database/schemas/user-schema.ts"],
  dbCredentials: {
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    ssl: false,
  },
});
