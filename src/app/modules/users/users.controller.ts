import { Request, Response } from 'express';
import { UserService } from './users.service';

const createUser = async (req: Request, res: Response) => {
  try {
    const { user } = req.body;
    const result = await UserService.createUser(user);
    // console.log(result);
    res.status(200).json({
      success: true,
      message: 'User Created Successfully',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Failed To Create User',
    });
  }
};

export const UserController = {
  createUser,
};
