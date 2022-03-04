import { Request, Response } from 'express';

import loginServices from '../services/loginServices';
import JWT from './middlewares/JWT';

const postLogin = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const login = await loginServices.postLogin(username, password);
  if (!login) return res.status(401).json({ error: 'Username or password invalid' });
  const token = JWT.generateToken(login);
  return res.status(200).json({ token });
};

export default { postLogin };
