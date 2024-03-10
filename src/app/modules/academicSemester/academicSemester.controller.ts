import { AcademicSemesterService } from './academicSemester.service';
import catchAsync from '../../../shared/catchAsync';
import { NextFunction, Request, Response } from 'express';
import sendReponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';

const createSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { ...academicSemesterData } = req.body;
    const result =
      await AcademicSemesterService.createSemester(academicSemesterData);

    sendReponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Semester Created Succesfully',
      data: result,
    });
    next();
  },
);

export const AcademicSemesterController = {
  createSemester,
};
