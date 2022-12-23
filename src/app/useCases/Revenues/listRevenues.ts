import { Request, Response } from 'express';

import { Revenues } from '../../model/Revenue';

export async function listRevenues(req: Request, res: Response)  {
  try {
    const revenues = await Revenues.find();

    res.json(revenues);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
