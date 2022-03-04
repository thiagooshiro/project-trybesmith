import { Router } from 'express';
import productValidations from '../controllers/middlewares/productValidations';

import productsController from '../controllers/productController';

const productsRouter = Router();

productsRouter.post(
  '/',
  productValidations.validateToken,
  productValidations.validateProductName,
  productValidations.validateProductAmount,
  productsController.createProduct,
);

productsRouter.get(
  '/',
  productValidations.validateToken,
  productsController.getAll,
);

export default productsRouter;