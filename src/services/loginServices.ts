import loginModel from '../models/loginModel';

const postLogin = async (username: string, password: string) => {
  const [newUser] = await loginModel.postLogin(username, password);
  console.log('newUser', newUser);
  return newUser;
};

export default { postLogin };