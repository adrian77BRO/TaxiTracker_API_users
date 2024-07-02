import express from 'express';
import {
    createUserController,
    getUserByEmailController
} from './user.dependencies';
//import { verifyToken } from '../../auth/application/middlewares/authMiddleware';

export const userRouter = express.Router();

//userRouter.get('/', getAllUsersController.run.bind(getAllUsersController));
userRouter.get('/:email', getUserByEmailController.run.bind(getUserByEmailController));
userRouter.post('/', createUserController.run.bind(createUserController));