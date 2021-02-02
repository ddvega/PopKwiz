import express from 'express';
import { userRouter } from './users/routes';
import { quizRouter } from './quizzes/routes';
import { categoryRouter } from './categories/routes';
import { signupRouter } from './users/signupRoute';

export const apiRouter = express.Router();

apiRouter.use('/signup', signupRouter);
apiRouter.use('/users', userRouter);
apiRouter.use('/categories', categoryRouter);
apiRouter.use('/quizzes', quizRouter);
apiRouter.use('/categories', categoryRouter);
