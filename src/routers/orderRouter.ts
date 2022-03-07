import { Router } from 'express';
import orderValidatios from '../controllers/middlewares/orderValidatios';
import productValidations from '../controllers/middlewares/productValidations';

import orderController from '../controllers/orderController';

const orderRouter = Router();

orderRouter.post(
  '/',
  productValidations.validateToken,
  orderValidatios.validateOrder,
  orderValidatios.ValidateProduct,
  orderController.createOrder,
);

export default orderRouter;

orderRouter.get(
  '/:id', 
  productValidations.validateToken,
  orderValidatios.orderValidation,
  orderController.getOrderById,
);

orderRouter.get(
  '/',
  productValidations.validateToken,
  orderController.getAllOrders,
);
