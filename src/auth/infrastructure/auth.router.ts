import express from 'express';
import { loginController } from './auth.dependencies';

export const authRouter = express.Router();

authRouter.post('/', loginController.run.bind(loginController));