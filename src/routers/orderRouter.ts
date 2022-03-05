import { Router } from 'express';
import orderValidatios from '../controllers/middlewares/orderValidatios';
import productValidations from '../controllers/middlewares/productValidations';

import orderController from '../controllers/orderController';

const orderRouter = Router();

orderRouter.post(
  '/',
  productValidations.validateToken,
  orderValidatios.validateOrder,
  orderController.createOrder,
);

export default orderRouter;
