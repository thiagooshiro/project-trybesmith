import { Request, Router } from 'express';

const userRouter = Router();

userRouter.post('/', userController.createUser);