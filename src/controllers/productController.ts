import { Request, Response } from 'express';

import productServices from '../services/productServices';

const createProduct = async (req: Request, res: Response) => {
  const { name, amount } = req.body;
  const response = await productServices.createProduct(name, amount);
  return res.status(201).json({ item: response });
};

const getAll = async (_req: Request, res: Response) => {
  const response = await productServices.getAll();
  return res.status(200).json(response);
};

export default { createProduct, getAll };