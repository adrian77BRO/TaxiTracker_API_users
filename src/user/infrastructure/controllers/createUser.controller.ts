import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { CreateUserService } from '../../application/createUser.service';
import { EncryptPasswordService } from '../helpers.ts/encrypt.password';
import { validateEmail, validatePassword } from '../../domain/user.validator';
import { MysqlUserRepository } from '../mysql.repo.user';

const encryptPassword = new EncryptPasswordService();
const existingEmail = new MysqlUserRepository();

export class CreateUserController {
    constructor(readonly createUserService: CreateUserService) { }

    async run(req: Request, res: Response) {
        try {
            const data = req.body;

            if (!validateEmail(data.email)) {
                return res.status(400).send({
                    status: 'error',
                    msg: 'Correo electrónico inválido',
                });
            }

            if (!validatePassword(data.password)) {
                return res.status(400).send({
                    status: 'error',
                    msg: 'La contraseña debe tener más de 8 caracteres',
                });
            }

            const existingUser = await existingEmail.getUserByEmail(data.email);
            if (existingUser) {
                return res.status(401).send({
                    status: 'error',
                    msg: 'El correo ya ha sido registrado',
                });
            }

            const hashedPassword = encryptPassword.encryptPassword(data.password);
            const user = await this.createUserService.run(
                uuidv4(),
                data.name,
                data.last_name,
                data.email,
                hashedPassword
            );

            if (user) {
                res.status(200).send({
                    status: 'success',
                    data: {
                        id: user?.id,
                        name: user?.name,
                        last_name: user?.last_name,
                        email: user?.email,
                        password: user?.password
                    },
                    msg: 'Se ha registrado exitosamente al sistema'
                })
            } else {
                res.status(204).send({
                    status: 'error',
                    msg: 'User not created',
                });
            };
        } catch (error) {
            res.status(500).send({
                status: 'error',
                data: 'Error at create user',
                msg: error,
            });
        }
    }
}