import { Request, Response } from 'express';

import productServices from '../services/productServices';
import JWT from './middlewares/JWT';

const createProduct = async (req: Request, res: Response) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).json({ error: 'Token not found' });
  const authTest = JWT.validateToken(authorization); 
  if (authTest) return res.status(authTest.status).json(authTest.message);
  const { name, amount } = req.body;
  const response = await productServices.createProduct(name, amount);
  return res.status(201).json({ item: response });
};

export default { createProduct };