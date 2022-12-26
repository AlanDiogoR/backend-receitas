import { Request, Response } from 'express';
import { Revenues } from '../../models/Revenue';


export async function deleteRevenues(req: Request, res: Response) {
  try {
    const { revenueId } = req.params;

    await Revenues.findByIdAndDelete(revenueId);

    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
