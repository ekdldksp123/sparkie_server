import { Request, Response } from 'express';
import { client } from '../../mongoClient';
import { Db } from 'mongodb';

export default async (req: Request, res: Response) => {
  console.log(`보디`);
  console.log(req.body);

  const post = {
    title: '안녕하세요',
    content: '바..방가워요',
    // 글쓰니
    // 작성시간
  };

  try {
    const db: Db = await client.db();
    const result = await db.collection('post').insertOne(post);

    res.status(200);
    res.send(`포스트를 작성해씀! ${result}`);
  } catch (e) {
    res.status(500);
    res.send(`Server Error! sry.`);
  }
};
