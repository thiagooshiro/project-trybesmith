import productModel from '../models/productModel';

const createProduct = async (name: string, amount: string) => {
  const newUser = await productModel.createProduct(name, amount);
  return newUser;
};

const getAll = async () => {
  const allProds = await productModel.getAll();
  return allProds;
};

export default { createProduct, getAll };