import { User } from '../domain/entities/user';
import { UserRepository } from '../domain/repositories/user.repository';

export class CreateUserService {
    constructor(readonly userRepository: UserRepository) { }

    async run(
        id: string,
        name: string,
        last_name: string,
        email: string,
        password: string
    ): Promise<User | null> {
        try {
            const user = await this.userRepository.createUser(
                id,
                name,
                last_name,
                email,
                password
            );

            return user;
        } catch (error) {
            return null
        }
    }
}