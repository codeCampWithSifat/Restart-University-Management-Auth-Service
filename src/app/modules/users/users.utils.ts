// let lastUserId = 0

import { User } from './users.model';

export const findLastUserId = async () => {
  const lastUser = await User.findOne({}, { id: 1, _id: 0 })
    .sort({ createdAt: -1 })
    .lean();
  return lastUser?.id;
};

export const generatedUserId = async () => {
  // lastUserId++;
  // return String(lastUserId).padStart(5,"0")
  const currentId = (await findLastUserId()) || (0).toString().padStart(5, '0');
  // increment by 1
  const incrementById = (parseInt(currentId) + 1).toString().padStart(5, '0');
  return incrementById;
};
