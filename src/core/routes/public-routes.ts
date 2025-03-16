import type { RoutesModel } from '../../interfaces'
import type { Router } from 'express'

import express from 'express'

import { AuthController } from '../../controllers'

export default class PublicRoutes implements RoutesModel {
  private router: Router = express.Router()
  private authController = new AuthController()

  private authRoutes() {
    this.router.get('/login', this.authController.login)
    this.router.post('/register', this.authController.register)
    this.router.post('/reset-password', this.authController.resetPassword)
    return this.router
  }

  public routes() {
    this.router.use('/auth', this.authRoutes())

    return this.router
  }
}
