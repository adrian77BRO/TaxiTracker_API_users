import { Request, Response } from 'express';
import { LoginDriverService } from '../../application/services/loginDriver.service';

export class LoginDriverController {
    constructor(readonly loginDriverService: LoginDriverService) { }

    async run(req: Request, res: Response) {
        const pin: string = req.params.pin;
        try {
            const driver = await this.loginDriverService.run(pin);
            
            if (driver) {
                res.status(200).send({
                    status: 'success',
                    msg: 'Successfull access, welcome!',
                    data: {
                        id: driver.id,
                        kit_id: driver.kit_id,
                        name: driver.name,
                        last_name: driver.last_name,
                        image: driver.image
                    },
                });
            } else {
                res.status(404).send({
                    status: 'error',
                    msg: 'PIN not founded',
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