import { Request, Response } from "express";

export default (req: Request, res: Response) => {
  res.send("포스트를 불러와씀!");
};