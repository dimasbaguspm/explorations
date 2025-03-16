import type { NextFunction, Request, Response } from 'express'

export const cors = (_: Request, response: Response, next: NextFunction) => {
  response.header('Access-Control-Allow-Origin', `${process.env.APP_DOMAIN}`)
  response.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  )
  next()
}
