import { Request, Response } from 'express';
import JWT from './middlewares/JWT';

import orderServices from '../services/orderServices';

const createOrder = async (req: Request, res: Response) => {
  const { products } = req.body;
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).json({ error: 'Token not found' });
  const { id } = JWT.validateToken(authorization);
  const response = await orderServices.createOrder(id);
  console.log(response);
  return res.status(201).json({ order: { userId: id, products } });
};

export default { createOrder };