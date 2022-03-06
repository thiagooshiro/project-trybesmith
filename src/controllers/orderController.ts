import { Request, Response } from 'express';
import JWT from './middlewares/JWT';

import orderServices from '../services/orderServices';

// req 5
const createOrder = async (req: Request, res: Response) => {
  const { products } = req.body;
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).json({ error: 'Token not found' });
  const { id } = JWT.validateToken(authorization);
  await orderServices.createOrder(id, products);

  return res.status(201).json({ order: { userId: id, products } });
};

//  req 6

const getOrderById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const orderById = await orderServices.getOrderById(id);
  if (!orderById) return res.status(404).json({ error: 'Order not found' });
  return res.status(200).json(orderById);
};

export default { createOrder, getOrderById };