import { Request, Response, NextFunction } from 'express';
import orderModel from '../../models/orderModel';

const validateOrder = (req: Request, res: Response, next: NextFunction) => {
  const { products } = req.body;
  const invalidName = { error: 'Products is required' };
  const invalidType = { error: 'Products must be an array of numbers' };
  const invalidLength = { error: 'Products can\'t be empty' };

  if (!products) return res.status(400).json(invalidName);
  if (!Array.isArray(products)) return res.status(422).json(invalidType);
  if (products.length < 1) return res.status(422).json(invalidLength);

  next();
};

const ValidateProduct = async (req: Request, res: Response, next: NextFunction) => {
  const { products } = req.body;
  const testeProd = products.map(async (valor: number) => {
    const response = await orderModel.checkProduct(valor);
    return response;
  });
  const data = await Promise.all(testeProd);
  const invalidId = data.some((valor) => valor === undefined);
  if (invalidId) return res.status(404).json({ error: 'Product not found' });

  next();
};

const orderValidation = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const checkOrder = await orderModel.checkOrder(id);
  if (!checkOrder) return res.status(404).json({ error: 'Order not found' });
  
  next();
};

export default { validateOrder, ValidateProduct, orderValidation };