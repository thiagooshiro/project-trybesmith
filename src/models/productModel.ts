import { ResultSetHeader } from 'mysql2';
import connection from './connection';

const createProduct = async (name: string, amount: string) => {
  const sqlQuery = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)';
  const [{ insertId }] = await connection
    .execute<ResultSetHeader>(sqlQuery, [name, amount]);
  
  return { id: insertId, name, amount };
};

const getAll = async () => {
  const sqlQuery = 'SELECT * FROM Trybesmith.Products';
  const [products] = await connection.execute(sqlQuery);
  return products;
};

export default { createProduct, getAll };