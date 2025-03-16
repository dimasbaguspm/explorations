import type { Express } from 'express'

import express from 'express'

import { cors } from './cors'
import { ArbitaryRoutes, ProtectedRoutes, PublicRoutes } from './routes'

export default class Server {
  private server: Express = express()

  private publicRoutes = new PublicRoutes()
  private protectedRoutes = new ProtectedRoutes()
  private arbitaryRoutes = new ArbitaryRoutes()

  public up(port: number) {
    this.server.use(cors)

    this.server.use(express.json())
    this.server.use(express.urlencoded({ extended: true }))
    this.server.use(express.raw({ type: 'application/json' }))

    this.server.use(this.publicRoutes.routes())
    this.server.use(this.protectedRoutes.routes())
    this.server.use(this.arbitaryRoutes.routes())

    this.server.listen(port, () => {
      console.log(`Server is listening on port ${port}`)
    })
  }
}
