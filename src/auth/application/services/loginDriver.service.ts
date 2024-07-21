import { Driver } from '../../../user/domain/entities/driver';
import { ComparePinRepository } from '../../domain/repositories/comparePin.repository';

export class LoginDriverService {
    constructor(readonly comparePinRepository: ComparePinRepository) { }

    async run(pin: string): Promise<Driver | null> {
        try {
            const result = await this.comparePinRepository.getDriverByPin(pin);
            return result;
        } catch (error) {
            return null;
        }
    }
}