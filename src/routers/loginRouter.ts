import { Router } from 'express';
import userValidations from '../controllers/middlewares/userValidations';

import loginController from '../controllers/loginController';

const loginRouter = Router();

loginRouter.post(
  '/', 
  userValidations.validateName,
  userValidations.validatePassword,
  loginController.postLogin,
);

export default loginRouter;