import { Request, Response } from 'express';
import { Revenues } from '../../models/Revenue';



export async function listRevenuesByCategory(req: Request, res: Response) {
  try {
    const { categoryId } = req.params;
    const revenues = await Revenues
      .find()
      .where('category')
      .equals(categoryId)
    ;

    res.json(revenues);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
