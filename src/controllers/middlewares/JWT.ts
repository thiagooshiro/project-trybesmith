import jwt, { SignOptions } from 'jsonwebtoken';

const config: SignOptions = {
  algorithm: 'HS256',
  expiresIn: '24h',
};

const segredo = 'secret';

const generateToken = (userInfo: object) => {
  const token = jwt.sign(userInfo, segredo, config);
  return token;
};

const validateToken = (authorization: string) => {
  try {
    const token = jwt.verify(authorization, segredo);
    console.log(token);
  } catch (error) {
    return { status: 401, message: { error: 'Invalid token' } };
  }
};

export default { generateToken, validateToken };