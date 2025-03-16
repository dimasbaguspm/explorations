import type { NextFunction, Request, Response } from "express";

export interface ControllerModel {
  query: (req: Request, res: Response, next: NextFunction) => void;
  get: (req: Request, res: Response, next: NextFunction) => void;
  post: (req: Request, res: Response, next: NextFunction) => void;
  put: (req: Request, res: Response, next: NextFunction) => void;
  delete: (req: Request, res: Response, next: NextFunction) => void;
}

export interface AuthControllerModel {
  login: (req: Request, res: Response, next: NextFunction) => void;
  register: (req: Request, res: Response, next: NextFunction) => void;
  resetPassword: (req: Request, res: Response, next: NextFunction) => void;
}
