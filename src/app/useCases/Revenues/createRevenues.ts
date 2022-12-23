import { Request, Response } from 'express';

import { Revenues } from '../../model/Revenue';

export async function createRevenues(req: Request, res: Response)  {
  try {
    const imagePath = req.file?.filename;
    const {name, ingredients, waydOfDoing } = req.body;

    const revenue = await Revenues.create(
      name,
      imagePath,
      ingredients: JSON.parse(ingredients),
      waydOfDoing,
    );

    res.status(201).json(revenue);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
