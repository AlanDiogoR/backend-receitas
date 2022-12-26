import { Request, Response } from 'express';
import { Category } from '../../models/Category';


export async function deleteCategories(req: Request, res: Response) {
  try {
    const { categorieId } = req.params;

    await Category.findByIdAndDelete(categorieId);

    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
