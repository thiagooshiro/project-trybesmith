import { Request, Response } from 'express';

import userServices from '../services/userServices';
import JWT from './middlewares/JWT';

const createUser = async (req: Request, res: Response) => {
  const user = req.body;
  const response = await userServices.createUser(user);
  const token = JWT.generateToken(response);
  return res.status(201).json({ token });
};

export default { createUser };