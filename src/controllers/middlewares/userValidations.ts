import { NextFunction } from 'express';

const validateName = (name: string, next: NextFunction) => {
  const invalidName = { status: 400, message: { error: 'Username is required' } };
  const invalidType = { status: 402, message: { error: 'Username must be a string' } };
  const invalidLength = { 
    status: 422, 
    message: { error: 'Username must be longer than 2 characters' },
  };

  if (!name) return invalidName;
  if (typeof name !== 'string') return invalidType;
  if (name.length < 2) return invalidLength;

  next();
};

export default { validateName };