import type { RoutesModel } from "../../interfaces";
import type { Request, Response, Router } from "express";

import express from "express";

export default class ProtectedRoutes implements RoutesModel {
  private router: Router = express.Router();

  public routes() {
    this.router.get("/", (_: Request, res: Response) => {
      res.send("Hello Dark World!");
    });

    return this.router;
  }
}
