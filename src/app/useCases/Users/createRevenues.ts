import { Request, Response } from 'express';
import { User } from '../../models/User';

export async function createUsers(req: Request, res: Response) {
  try {
    const { name, password, email} = req.body;

    const revenue = await User.create({
      name,
      password,
      email,
    });

    res.status(201).json(revenue);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
