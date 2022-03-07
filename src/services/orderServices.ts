import orderModel from '../models/orderModel';

// req 5 e 6
const createOrder = async (userId: string, products: Array<number>) => {
  const { id } = await orderModel.createOrder(userId);
  const updateOk = products
    .map(async (valor: number) => {
      const teste = await orderModel.updateProduct(id, valor);
      return teste;
    });
  const result = await Promise.all(updateOk);
  console.log('result', result);
  return result;
};

// req6
const getOrderById = async (id: string) => {
  const orderById = await orderModel.getOrderById(id);
  const products = await orderModel.selectByOrder(+id);
  console.log('productsOrder', products);
  const mapIds = products.map((valor) => {
    const [x] = Object.values(valor);
    return x;
  });
  return { ...orderById, products: mapIds };
};

// req7

const getAllOrders = async () => {
  const allOrders = await orderModel.getAllOrders();
  const arrayOrders = allOrders.map(async (order) => {
    const IdOrder = order.id;
    const productsObj = await orderModel.selectByOrder(IdOrder);
    const products = productsObj.map((prod) => prod.id);
    return { ...order, products };
  });
  const response = await Promise.all(arrayOrders);
  console.log('array Orders', response);
  return response;
};

export default { createOrder, getOrderById, getAllOrders };
