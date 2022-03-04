import { Request, Response, NextFunction } from 'express';

const validateProductName = (req: Request, res: Response, next: NextFunction) => {
  const { name } = req.body;
  const invalidName = { error: 'Name is required' };
  const invalidType = { error: 'Name must be a string' };
  const invalidLength = { error: 'Name must be longer than 2 characters' };

  if (!name) return res.status(400).json(invalidName);
  if (typeof name !== 'string') return res.status(422).json(invalidType);
  if (name.length < 3) return res.status(422).json(invalidLength);

  next();
};

const validateProductAmount = (req: Request, res: Response, next: NextFunction) => {
  const { amount } = req.body;
  const invalidName = { error: 'Amount is required' };
  const invalidType = { error: 'Amount must be a string' };
  const invalidLength = { error: 'Amount must be longer than 2 characters' };

  if (!amount) return res.status(400).json(invalidName);
  if (typeof amount !== 'string') return res.status(422).json(invalidType);
  if (amount.length < 3) return res.status(422).json(invalidLength);

  next();
};

export default { validateProductName, validateProductAmount };
