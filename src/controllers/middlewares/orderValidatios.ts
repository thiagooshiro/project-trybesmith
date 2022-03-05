import { Request, Response, NextFunction } from 'express';

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

export default { validateOrder };