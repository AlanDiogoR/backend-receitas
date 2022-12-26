import { Request, Response } from 'express';
import { Like } from '../../models/Like';


export async function listLikes(req: Request, res: Response)  {
  try {
    const likes = await Like.find();

    res.json(likes);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
