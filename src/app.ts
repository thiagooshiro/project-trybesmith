import express from 'express';
import userRouter from './routers/userRouter';
import loginRouter from './routers/loginRouter';

const app = express();

app.use(express.json());

app.use('/users', userRouter);

app.use('/login', loginRouter);

export default app;
