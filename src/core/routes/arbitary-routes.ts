import type { RoutesModel } from '../../interfaces'
import type { Request, Response, Router } from 'express'

import express from 'express'

export default class ArbitaryRoutes implements RoutesModel {
  private router: Router = express.Router()

  public routes() {
    this.router.all('*', (_: Request, res: Response) => {
      res.status(404).send('Not Found BATR')
    })

    return this.router
  }
}
