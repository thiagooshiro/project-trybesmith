import { User, UserWithId } from '../interfaces/userInterface';

import userModel from '../models/userModel';

const createUser = async (user: User): Promise<UserWithId> => {
  const { username, classe, level, password } = user;
  const newUser = await userModel.createUser(username, classe, level, password);
  return newUser as UserWithId;
};

export default { createUser };