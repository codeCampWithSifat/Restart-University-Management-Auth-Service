import { AcademicSemesterService } from './academicSemester.service';
import catchAsync from '../../../shared/catchAsync';
import { Request, Response } from 'express';
import sendReponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import { IAcademicSemester } from './academicSemester.interface';
import pick from '../../../shared/pick';
import { paginationFields } from '../../../constants/pagination';

const createSemester = catchAsync(async (req: Request, res: Response) => {
  const { ...academicSemesterData } = req.body;
  const result =
    await AcademicSemesterService.createSemester(academicSemesterData);

  sendReponse<IAcademicSemester>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Semester Created Succesfully',
    data: result,
  });
});

const getAllSemesters = catchAsync(async (req: Request, res: Response) => {
  const paginationOptions = pick(req.query, paginationFields);
  const filters = pick(req.query, ['searchTerm']);
  // console.log(paginationOptions);
  const result = await AcademicSemesterService.getAllSemesters(
    filters,
    paginationOptions,
  );
  sendReponse<IAcademicSemester[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Semester Retrive Successfully',
    data: result.data,
    meta: result.meta,
  });
});

export const AcademicSemesterController = {
  createSemester,
  getAllSemesters,
};

/*
const paginationOptions = pick(req.query, paginationFields);
  const result = await AcademicSemesterService.getAllSemesters(paginationOptions);

  sendReponse<IAcademicSemester[]>(res, {
    statusCode : httpStatus.OK,
    success : true,
    message : "Academic Semester Retrive Successfully",
    data : result.data,
    meta : result.meta,
  })
*/
