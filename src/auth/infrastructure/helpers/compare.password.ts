import bcrypt from 'bcrypt';
import { CompareRepository } from '../../domain/repositories/compare.repository';

export class ComparePasswordService implements CompareRepository {
    comparePassword(password: string, passwordRequest: string): boolean {
        const correctPassword = bcrypt.compareSync(password, passwordRequest);
        return correctPassword;
    }
}