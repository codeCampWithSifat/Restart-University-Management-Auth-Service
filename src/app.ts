import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import userRoutes from './app/modules/users/users.routes';
const app: Application = express();

// use all the middlewar
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// use all the application router
app.use('/api/v1/users', userRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Working Successfully');
});

export default app;
