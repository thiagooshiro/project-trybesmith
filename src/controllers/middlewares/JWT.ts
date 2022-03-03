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

export default { generateToken };