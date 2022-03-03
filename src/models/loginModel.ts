import { UserWithId } from '../interfaces/userInterface';
import connection from './connection';

const postLogin = async (username: string, password: string): Promise<UserWithId[]> => {
  const sqlQuery = 'SELECT * FROM Trybesmith.Users WHERE username=? AND password=?';
  const [user] = await connection
    .execute(sqlQuery, [username, password]);
  return user as UserWithId[];
};

export default { postLogin };