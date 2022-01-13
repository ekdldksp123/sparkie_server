import express, { Request, Response, NextFunction, Express } from 'express';
import { appendFileSync } from 'fs';
import morgan from 'morgan';
import { init as initCommunity, deleteAllPosts } from '../services/communityService';

require("dotenv").config();

const app: Express = express();
const database = require('./database/mongoose');
const BASE_API_DIR = `/api/v1`;

app.use(express.json()); //request body 읽기
app.use(morgan('dev')); //path 접근시 로그
app.set('view-engine', 'ejs');

/** router 등록 */
const router = require('../routes/route');
app.use(`${BASE_API_DIR}`, router);

const communityRouter = require('../routes/communityRouter');
app.use(`/community`, communityRouter);

/** 서버 로딩시 몽고 디비 연동해놓기 */
database();

app.listen(4491, async () => {
  console.log('Server listens on port 4491!');
  await deleteAllPosts().then(() => initCommunity()); //커뮤니티 데이터 insert
});
