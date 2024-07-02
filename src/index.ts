import express from 'express';
import cors from 'cors';
import { userRouter } from './user/infrastructure/user.router';
import { authRouter } from './auth/infrastructure/auth.router';

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(cors());
app.use('/users', userRouter);
app.use('/auth', authRouter);

app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}`);
});