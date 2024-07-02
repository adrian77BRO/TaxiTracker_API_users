import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import { LoginService } from '../../application/services/login.service';
import { ComparePasswordService } from '../helpers/compare.password';
import { secret } from '../../domain/constants/jwt.secret';

const compareCredentials = new ComparePasswordService();

export class LoginController {
    constructor(readonly loginService: LoginService) { }

    async run(req: Request, res: Response) {
        try {
            const credentials = req.body;
            const user = await this.loginService.run(
                credentials.email
            );
            if (!user) {
                return res.status(404).send({
                    status: 'error',
                    msg: 'Correo incorrecto'
                });
            }

            const isPasswordValid = compareCredentials.comparePassword(
                credentials.password,
                user.password
            );
            if (!isPasswordValid) {
                return res.status(401).send({
                    status: 'error',
                    msg: 'Contraseña incorrecta'
                });
            }

            const token = jwt.sign({ email: credentials.email }, secret, { expiresIn: '1h' });
            res.status(200).send({
                status: 'success',
                msg: 'Acceso exitoso al sistema',
                user,
                token
            });
        } catch (error) {
            return res.status(500).send({
                status: 'error',
                data: 'Error at login',
                msg: error,
            });
        }
    }
}