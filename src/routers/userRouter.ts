import { Router } from 'express';
import userValidations from '../controllers/middlewares/userValidations';

import userController from '../controllers/userController';

const userRouter = Router();

userRouter.post(
  '/', 
  userValidations.validateName,
  userValidations.validateClass,
  userValidations.validateLevel,
  userValidations.validatePassword,
  userController.createUser,
);

export default userRouter;