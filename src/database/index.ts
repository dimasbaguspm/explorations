import { drizzle } from 'drizzle-orm/node-postgres'
import { Pool } from 'pg'

const provider = new Pool({
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  ssl: false,
})

export default class Drizzle {
  public get client() {
    return drizzle({
      client: provider,
    })
  }
}
