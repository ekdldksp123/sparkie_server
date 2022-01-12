import express, { Request, Response, NextFunction, Express } from 'express';
require("dotenv").config();

const app: Express = express();
const database = require('./database/mongoose');

app.use(express.json());

const router = require('../routes/route');
app.use("/", router);

database();

app.listen(4491, () => {
  console.log('Server listens on port 4491!');
});
