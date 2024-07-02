import { User } from '../entities/user';

export interface UserRepository {
    getAllUsers(): Promise<User[] | null>;
    getUserByEmail(email: string): Promise<User | null>;
    createUser(
        id: string,
        name: string,
        last_name: string,
        email: string,
        password: string
    ): Promise<User | null>;
}