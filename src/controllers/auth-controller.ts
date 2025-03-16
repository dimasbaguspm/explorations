import type { AuthControllerModel } from "../interfaces";
import type { Request, Response } from "express";

export default class AuthController implements AuthControllerModel {
  login(req: Request, res: Response) {
    res.send("Hello Dark World!");
  }

  register(req: Request, res: Response) {
    res.send("Hello Dark World!");
  }

  resetPassword(req: Request, res: Response) {
    res.send("Hello Dark World!");
  }
}
