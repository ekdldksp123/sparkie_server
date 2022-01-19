import { Request, Response, NextFunction } from "express";
import { getAllPosts, updateLikes } from "../services/communityService";

export const getPosts = async (req:Request, res:Response) => {
    try {
        const posts = await getAllPosts();
        res.status(200).send({posts: posts});
    } catch (error: unknown) {
        if(error instanceof Error) res.status(400).send({error: error.message});
    }
}

export const modifyNumberOfLikes = async (req:Request, res:Response) => {
    try {
        await updateLikes(req.params.is, Number(req.params.number))
            .then(() => res.status(200).send({result: 'Y'}));
    } catch (error: unknown) {
        if(error instanceof Error) res.status(400).send({error: error.message});
    }
}

export const editPost = async (req:Request, res:Response) => {
    try {
        
    } catch (error: unknown) {
        if(error instanceof Error) res.status(400).send({error: error.message});
    }
}

