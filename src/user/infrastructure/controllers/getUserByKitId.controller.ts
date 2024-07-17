import { Request, Response } from 'express';
import { GetUserByKitIdService } from '../../application/getUserByKitId.service';

export class GetUserByKitIdController {
    constructor(readonly getUserByKitIdService: GetUserByKitIdService) { }

    async run(req: Request, res: Response) {
        const kit_id: string = req.params.id;
        try {
            const email = await this.getUserByKitIdService.run(kit_id);
            
            if (email) {
                res.status(200).send({
                    status: 'success',
                    data: email
                });
            } else {
                res.status(404).send({
                    status: 'error',
                    msg: 'Email not founded',
                })
            };
        } catch (error) {
            res.status(500).send({
                status: 'error',
                data: 'Error at get the email',
                msg: error,
            });
        }
    }
}