import { Request, Response } from 'express';
import { Revenues } from '../../models/Revenue';

export async function createRevenues(req: Request, res: Response) {
  try {
    const { name, waydOfDoing, category, user, ingredients} = req.body;
    const imagePath = req.file?.filename;

    const revenue = await Revenues.create({
      name,
      waydOfDoing,
      imagePath,
      category,
      user,
      ingredients: ingredients ? JSON.parse(ingredients) : [],
    });

    res.status(201).json(revenue);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
