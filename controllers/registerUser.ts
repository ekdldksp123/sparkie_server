import { Request, Response } from 'express';
import { client } from '../src/database/mongoClient';
import { Db } from 'mongodb';

export default async (req: Request, res: Response) => {
  const userProfile = req.body;
  try {
    const db: Db = await client.db();
    const result = await db.collection('user').insertOne(userProfile);

    res.status(200);
    res.send(result);
  } catch (e) {
    res.status(500);
    res.send(`Server Error! sry. \n` + e);
  }
};
