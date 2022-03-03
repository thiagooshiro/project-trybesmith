import { Request, Response, NextFunction } from 'express';

const validateName = (req: Request, res: Response, next: NextFunction) => {
  const { username } = req.body;
  const invalidName = { error: 'Username is required' };
  const invalidType = { error: 'Username must be a string' };
  const invalidLength = { error: 'Username must be longer than 2 characters' };

  if (!username) return res.status(400).json(invalidName);
  if (typeof username !== 'string') return res.status(422).json(invalidType);
  if (username.length < 3) return res.status(422).json(invalidLength);

  next();
};

const validateClass = (req: Request, res: Response, next: NextFunction) => {
  const { classe } = req.body;
  const invalidClass = { error: 'Classe is required' };
  const invalidType = { error: 'Classe must be a string' };
  const invalidLength = { error: 'Classe must be longer than 2 characters' };

  if (!classe) return res.status(400).json(invalidClass);
  if (typeof classe !== 'string') return res.status(422).json(invalidType);
  if (classe.length < 3) return res.status(422).json(invalidLength);

  next();
};

const validateLevel = (req: Request, res: Response, next: NextFunction) => {
  const { level } = req.body;
  const invalidLevel = { error: 'Level is required' };
  const invalidType = { error: 'Level must be a number' };
  const invalidNumber = { error: 'Level must be greater than 0' };

  if (level === undefined) return res.status(400).json(invalidLevel);
  if (typeof level !== 'number') return res.status(422).json(invalidType);
  if (level < 1) return res.status(422).json(invalidNumber);

  next();
};

const validatePassword = (req: Request, res: Response, next: NextFunction) => {
  const { password } = req.body;
  const invalidPass = { error: 'Password is required' };
  const invalidType = { error: 'Password must be a string' };
  const invalidLength = { error: 'Password must be longer than 7 characters' };

  if (!password) return res.status(400).json(invalidPass);
  if (typeof password !== 'string') return res.status(422).json(invalidType);
  if (password.length < 8) return res.status(422).json(invalidLength);

  next();
};

export default { validateName, validateClass, validateLevel, validatePassword };
