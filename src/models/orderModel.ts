import { ResultSetHeader } from 'mysql2';
import connection from './connection';

const createOrder = async (userId: string) => {
  const sqlQuery = 'INSERT INTO Trybesmith.Orders (userId) VALUES (?)';
  const [{ insertId }] = await connection
    .execute<ResultSetHeader>(sqlQuery, [userId]);
  
  return { id: insertId };
};

export default { createOrder };