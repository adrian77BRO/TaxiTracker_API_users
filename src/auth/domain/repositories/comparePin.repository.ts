import { Driver } from '../../../user/domain/entities/driver';

export interface ComparePinRepository {
    getDriverByPin(pin: string): Promise<Driver | null>;
}