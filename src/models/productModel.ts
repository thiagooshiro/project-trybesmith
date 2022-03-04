import { ResultSetHeader } from 'mysql2';
import connection from './connection';

const createProduct = async (name: string, amount: string) => {
  const sqlQuery = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)';
  const [{ insertId }] = await connection
    .execute<ResultSetHeader>(sqlQuery, [name, amount]);
  
  return { id: insertId, name, amount };
};

export default { createProduct };