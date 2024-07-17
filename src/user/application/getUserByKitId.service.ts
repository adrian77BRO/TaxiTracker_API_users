import { User } from '../domain/entities/user';
import { UserRepository } from '../domain/repositories/user.repository';

export class GetUserByKitIdService {
    constructor(readonly userRepository: UserRepository) { }

    async run(kit_id: string): Promise<string | null> {
        try {
            const result = await this.userRepository.getUserByKitId(kit_id);
            return result;
        } catch (error) {
            return null;
        }
    }
}