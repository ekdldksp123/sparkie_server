import express, { Request, Response, NextFunction, Express } from 'express';
import writePost from './lib/api/post/writePost';
import getPost from './lib/api/post/getPost';
import getUser from './lib/api/user/getUser';
import registUser from './lib/api/user/registerUser';

const BASE_API_DIR = `/api/v1`;
const app: Express = express();
app.use(express.json());

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  console.log('??');
  res.send('Hello World!');
});

/**
 *  GET /api/v1/post
 *  글 읽기
 */
app.get(`${BASE_API_DIR}/post`, getPost);

/**
 *  POST /api/v1/post
 *  글 쓰기
 */
app.post(`${BASE_API_DIR}/post`, writePost);

/**
 * GET /api/v1/register
 * 사용자 정보 보기
 */
app.get(`${BASE_API_DIR}/register`, getUser);

/**
 * POST /api/v1/register
 * 사용자 등록
 */
app.post(`${BASE_API_DIR}/register`, registUser);

app.listen(4491, () => {
  console.log('Server listens on port 4491!');
});
