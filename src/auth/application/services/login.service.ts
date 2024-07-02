import { User } from '../../../user/domain/entities/user';
import { UserRepository } from '../../../user/domain/repositories/user.repository';

export class LoginService {
    constructor(readonly userRepository: UserRepository) { }

    async run(email: string): Promise<User | null> {
        try {
            const result = await this.userRepository.getUserByEmail(email);
            return result;
        } catch (error) {
            return null;
        }
    }
}