import { NextFunction, Request, Response } from "express";

export interface dataI {
  message: string;
  status: number;
  data?: any;
}

export type expressFunctionT = (
  req: Request,
  res: Response<dataI>,
  next?: NextFunction
) => void;
