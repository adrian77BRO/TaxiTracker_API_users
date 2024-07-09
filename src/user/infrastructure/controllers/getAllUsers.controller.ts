import { Request, Response } from 'express';
import { GetAllUsersService } from '../../application/getAllUsers.service';

export class GetAllUsersController {
    constructor(readonly getAllUsersService: GetAllUsersService) { }

    async run(req: Request, res: Response) {
        try {
            const users = await this.getAllUsersService.run();
            if (users) {
                res.status(200).send({
                    status: 'success',
                    data: users.map((user: any) => {
                        return {
                            id: user.id,
                            name: user.name,
                            last_name: user.last_name,
                            email: user.email,
                            password: user.password
                        };
                    }),
                })
            } else {
                res.status(400).send({
                    status: 'error',
                    msg: 'Users not founded',
                })
            };
        } catch (error) {
            res.status(204).send({
                status: 'error',
                data: 'Error at get all users',
                msg: error,
            });
        }
    }
}