import express, { Application } from 'express';
import cors from 'cors';
import userRoutes from './app/modules/users/users.routes';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
const app: Application = express();

// use all the middlewar
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// use all the application router
app.use('/api/v1/users', userRoutes);

// Testing
// app.get('/', (req: Request, res: Response, next: NextFunction) => {
//   throw new Error('Onk Boro Error');
//   // next('Ora Baba Eato Boro Error');
// });

// Global Error Handing
app.use(globalErrorHandler);

export default app;
