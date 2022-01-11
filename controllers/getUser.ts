import { Request, Response } from 'express';
import { Db } from 'mongodb';
import { client } from '../src/database/mongoClient';

export default async (req: Request, res: Response) => {
  const { query } = req;

  try {
    const db: Db = await client.db();
    const result = await db.collection('user').findOne({ name: query.username });

    res.status(200);
    res.send(result);
  } catch (e) {
    res.status(500);
    res.send(`Server Error! sry. \n` + e);
  }
};
