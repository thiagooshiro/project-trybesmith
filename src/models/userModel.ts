import { ResultSetHeader } from 'mysql2';
import { UserWithId } from '../interfaces/userInterface';
import connection from './connection';

const createUser = async (username: string, classe: string, level: number, password: string) => {
  const sqlQuery = `INSERT INTO Trybesmith.Users
  (username, classe, level, password) VALUES (?, ?, ?, ?)`;
  const [{ insertId }] = await connection
    .execute<ResultSetHeader>(sqlQuery, [username, classe, level, password]);
  const createdUser: UserWithId = { id: insertId, username, classe, level, password };
  return createdUser;
};

export default { createUser };