import express, { Request, Response, NextFunction, Express } from 'express';
import morgan from 'morgan';
import { init as initCommunity, deleteAllPosts } from '../services/communityService';

require("dotenv").config();

const app: Express = express();
const database = require('./database/mongoose');
const BASE_API_DIR = `/api/v1`;

const bodyParser = require('body-parser');

app.use(bodyParser.json()); //request body 읽기
app.use(bodyParser.urlencoded());
app.use(morgan('dev')); //path 접근시 로그
app.set('view-engine', 'ejs');

/** router 등록 */
const router = require('../routes/route');
app.use(`${BASE_API_DIR}`, router);

const communityRouter = require('../routes/communityRouter');
app.use(`/api/community`, communityRouter);

/** 서버 로딩시 몽고 디비 연동해놓기 */
database();

// grpc 랑 express 같이 사용되려나 하고 해봤는데 아직 방법 못찾음
// const server = new Server();
// server.bindAsync('50051', ServerCredentials.createInsecure(), () => {
//   server.start();
//   console.log('gRPC Server has been started!');
// });

app.listen(4491, async () => {
  console.log('Server listens on port 4491!');
  await deleteAllPosts().then(() => initCommunity()); //커뮤니티 데이터 insert
});
