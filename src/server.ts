import express, { Request, Response, NextFunction, Express } from 'express';
require("dotenv").config();

const BASE_API_DIR = `/api/v1`;
const app: Express = express();
const db = require('./database/mongoose');

app.use(express.json());

const router = require('../routes/route');
app.use("/", router);

app.listen(4491, () => {
  console.log('Server listens on port 4491!');
  console.log(db);
});
