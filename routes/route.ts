import { Request, Response, NextFunction ,Router} from "express";
import writePost from '../controllers/writePost';
import getPost from '../controllers/getPost';
import getUser from '../controllers/getUser';
import registUser from '../controllers/registerUser';
import getCharger from '../controllers/getCharger';
import registerUser from '../controllers/registerUser';

const router: Router = require('express').Router();

router.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send("Hi I'm router");
});
/**
 *  GET /api/v1/user
 *  유저 읽기
 */
router.get(`/user`, getUser);

 /**
  *  POST /api/v1/user
  *  유저 읽기
  */
router.post(`/user`, registerUser);
 
 
 /**
  *  GET /api/v1/post
  *  글 읽기
  */
router.get(`/post`, getPost);
 
 /**
  *  POST /api/v1/post
  *  글 쓰기
  */
router.post(`/post`, writePost);
 
 /**
  * GET /api/v1/register
  * 사용자 정보 보기
  */
router.get(`/register`, getUser);
 
 /**
  * POST /api/v1/register
  * 사용자 등록
  */
router.post(`/register`, registUser);
 
 /**
  * GET /api/v1/getCharger
  * 충전소 정보 보기
  */
router.get(`/getChargerInfo`, getCharger);

module.exports = router;