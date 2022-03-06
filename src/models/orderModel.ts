import { OkPacket, ResultSetHeader } from 'mysql2';
import connection from './connection';

// req 5
const createOrder = async (userId: string) => {
  const sqlQuery = 'INSERT INTO Trybesmith.Orders (userId) VALUES (?)';
  const [{ insertId }] = await connection
    .execute<ResultSetHeader>(sqlQuery, [userId]);
  
  return { id: insertId };
};

const updateProduct = async (orderId: number, productId: number) => {
  const sqlQuery = 'UPDATE Trybesmith.Products SET orderId=? WHERE id=?';
  const insertId = await connection.execute(sqlQuery, [orderId, productId]);
  console.log('orderProd', insertId);
};

const selectByOrder = async (orderId: number) => {
  const secondQuery = 'SELECT id FROM Trybesmith.Products WHERE orderId=?';
  const [id] = await connection.execute<OkPacket[]>(secondQuery, [orderId]);
  return id;
};

// validation
const checkProduct = async (productId: number) => {
  const sqlQuery = 'SELECT * FROM Trybesmith.Products WHERE id=?';
  const [[productCheck]] = await connection.execute<OkPacket[]>(sqlQuery, [productId]);
  return productCheck;
};

const checkOrder = async (orderId: string) => {
  const sqlQuery = 'SELECT * FROM Trybesmith.Orders WHERE id=?';
  const [[orderCheck]] = await connection.execute<OkPacket[]>(sqlQuery, [orderId]);
  return orderCheck;
};

// req6
const getOrderById = async (id: string) => {
  const sqlQuery = 'SELECT * FROM Trybesmith.Orders WHERE id=?';
  const [[orderById]] = await connection.execute<OkPacket[]>(sqlQuery, [id]);
  return orderById;
};

export default { 
  createOrder,
  getOrderById,
  checkProduct,
  updateProduct,
  selectByOrder,
  checkOrder };