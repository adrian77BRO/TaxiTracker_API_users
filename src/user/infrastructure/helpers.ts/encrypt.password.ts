import bcrypt from 'bcrypt';
import { EncryptRepository } from '../../domain/repositories/encrypt.repository';

export class EncryptPasswordService implements EncryptRepository {
    encryptPassword(password: string): string {
        const pass = bcrypt.hashSync(password, 10);
        return pass;
    }
}