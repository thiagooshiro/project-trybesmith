import express from 'express';
import userRouter from './routers/userRouter';
import loginRouter from './routers/loginRouter';
import productsRouter from './routers/productRouter';
import orderRouter from './routers/orderRouter';

const app = express();

app.use(express.json());

app.use('/users', userRouter);

app.use('/login', loginRouter);

app.use('/products', productsRouter);

app.use('/orders', orderRouter);

export default app;
