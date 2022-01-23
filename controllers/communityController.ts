import { Request, Response, NextFunction } from "express";
import { getAllPosts, updateLikes, addComment } from "../services/communityService";

export const getPosts = async (req:Request, res:Response) => {
    try {
        const posts = await getAllPosts();
        res.status(200).send({posts: posts});
    } catch (error: unknown) {
        if(error instanceof Error) res.status(400).send({error: error.message});
    }
}

export const updateNumberOfLikes = async (req:Request, res:Response) => {
    const {postId, likes} = req.params;
    try {
        await updateLikes(postId, Number.parseInt(likes))
            .then(() => res.status(200).send({result: 'Y'}));
    } catch (error: unknown) {
        if(error instanceof Error) res.status(400).send({error: error.message});
    }
}

export const addCommentOnPost = async (req:Request, res:Response) => {
    const { body : { post_id, writer, content }} = req;
    try {
        await addComment(post_id, writer, '', content)
            .then(() => res.status(200).send({result: 'Y'}));
    } catch (error: unknown) {
        if(error instanceof Error) res.status(400).send({error: error.message});
    }
}

