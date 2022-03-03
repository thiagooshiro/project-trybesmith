import { Request, Response } from 'express';

const createUser = (req: Request, res: Response) => {
  const { username, classe, level, password } = req.body;
  const user = await userServices.createUser({ username, classe, level, password });
};