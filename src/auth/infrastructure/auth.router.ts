import express from 'express';
import { loginController, loginDriverController } from './auth.dependencies';

export const authRouter = express.Router();

authRouter.post('/', loginController.run.bind(loginController));
authRouter.get('/drivers/:pin', loginDriverController.run.bind(loginDriverController))