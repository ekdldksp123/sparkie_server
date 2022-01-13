import {Router} from "express";
import {getPosts, editPost} from '../controllers/communityController';

const router: Router = require('express').Router();

router.get('*', () => {console.log('community router')});

/** 모든 게시글 조회 */
router.get('/', getPosts);

/** 게시글 수정 */
router.get('/post/edit/:postId', editPost);

module.exports = router;