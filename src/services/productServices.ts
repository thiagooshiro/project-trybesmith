import productModel from '../models/productModel';

const createProduct = async (name: string, amount: string) => {
  const newUser = await productModel.createProduct(name, amount);
  return newUser;
};

export default { createProduct };