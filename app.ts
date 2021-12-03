import express, { Request, Response, NextFunction, Express } from "express";
import writePost from "./lib/writePost";
import getPost from "./lib/getPost";

const API_DIR = `/api/v1/post`;
const app: Express = express();

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  console.log(req);
  res.send("Hello World!");
});

/**
 *  GET /api/v1/post
 */
app.get(API_DIR, getPost);

/**
 *  POST /api/v1/post
 */
app.post(API_DIR, writePost);

app.listen("4491", () => {
  console.log("Server listens on port 4491!");
});
