import {Router} from "express";
import {getPosts, addCommentOnPost, updateNumberOfLikes} from '../controllers/communityController';

const router: Router = require('express').Router();

/** 모든 게시글 조회 */
router.get('/', getPosts);

/** 게시글 수정 */
router.patch('/post/comment', addCommentOnPost);

router.patch('/post/edit/:postId/:likes', updateNumberOfLikes);

module.exports = router;