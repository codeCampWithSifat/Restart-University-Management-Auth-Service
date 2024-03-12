import { UserService } from './user.service';
import catchAsync from '../../../shared/catchAsync';
import { Request, Response } from 'express';
import sendReponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';

const createUser = catchAsync(async (req: Request, res: Response) => {
  const { user } = req.body;
  const result = await UserService.createUser(user);

  sendReponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User Created Successfully',
    data: result,
  });
});

export const UserController = {
  createUser,
};

// res.status(200).json({
//   success: true,
//   message: 'user created successfully!',
//   data: result,
// });