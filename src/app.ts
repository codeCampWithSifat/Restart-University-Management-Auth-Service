import express, { Application } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import { UserRoutes } from './app/modules/user/user.routes';
// import ApiError from './errors/ApiError';
const app: Application = express();

// use all the middlewar
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// use all the application router
app.use('/api/v1/users', UserRoutes);

// Testing
// app.get('/', (req: Request, res: Response, next: NextFunction) => {
//     throw new ApiError(400, 'Onk Boro Error');
//   // next('Ora Baba Eato Boro Error');
//   //   Promise.reject(new Error('Unhandled Promise Rejection'));
// });

// Global Error Handing
app.use(globalErrorHandler);

export default app;
