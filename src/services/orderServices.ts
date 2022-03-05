import orderModel from '../models/orderModel';

const createOrder = async (userId: string) => {
  const newOrder = await orderModel.createOrder(userId);
  return newOrder;
};

export default { createOrder };
