import type { Router } from 'express'

export interface RoutesModel {
  routes: () => Router
}
