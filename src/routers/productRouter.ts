import { Router } from 'express';
import productValidations from '../controllers/middlewares/productValidations';

import productsController from '../controllers/productController';

const productsRouter = Router();

productsRouter.post(
  '/',
  productValidations.validateProductName,
  productValidations.validateProductAmount,
  productsController.createProduct,
);

export default productsRouter;