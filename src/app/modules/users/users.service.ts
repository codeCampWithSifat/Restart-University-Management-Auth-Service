import config from '../../../config';
import { IUser } from './users.interface';
import { User } from './users.model';
import { generatedUserId } from './users.utils';

const createUser = async (user: IUser): Promise<IUser | null> => {
  const id = await generatedUserId();
  user.id = id;
  if (!user.password) {
    user.password = config.default_user_pass as string;
  }
  const createdUser = await User.create(user);

  if (!createdUser) {
    throw new Error('Failed To Create User');
  }
  return createdUser;
};

export const UserService = {
  createUser,
};