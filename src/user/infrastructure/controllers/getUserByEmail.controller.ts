import { Request, Response } from 'express';
import { GetUserByEmailService } from '../../application/getUserByEmail.service';

export class GetUserByEmailController {
    constructor(readonly getUserByEmailService: GetUserByEmailService) { }

    async run(req: Request, res: Response) {
        const email: string = req.params.email;
        try {
            const user = await this.getUserByEmailService.run(email);
            
            if (user) {
                res.status(200).send({
                    status: 'success',
                    data: {
                        id: user.id,
                        name: user.name,
                        last_name: user.last_name,
                        email: user.email,
                        password: user.password,
                    },
                });
            } else {
                res.status(404).send({
                    status: 'error',
                    msg: 'User not founded',
                })
            };
        } catch (error) {
            res.status(500).send({
                status: 'error',
                data: 'Error at get the user',
                msg: error,
            });
        }
    }
}