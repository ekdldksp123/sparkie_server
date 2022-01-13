import { Request, Response, NextFunction } from "express";
import { getAllPosts } from "../services/communityService";

export const getPosts = async (req:Request, res:Response) => {
    console.log(`>>>> getPosts`);
    try {
        const posts = await getAllPosts();
        res.status(200).render('board', {posts});
    } catch (error: unknown) {
        if(error instanceof Error) res.status(400).send({error: error.message});
    }
}

export const editPost = async (req:Request, res:Response) => {

}

