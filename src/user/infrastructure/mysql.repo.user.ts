import { query } from '../../database/mysql';
import { User } from '../domain/entities/user';
import { UserRepository } from '../domain/repositories/user.repository';

export class MysqlUserRepository implements UserRepository {
    async getAllUsers(): Promise<User[] | null> {
        const sql = 'CALL getAllUsers()';
        try {
            const [data]: any = await query(sql, []);
            const users = Object.values(JSON.parse(JSON.stringify(data[0])));
            return users.map(
                (user: any) => (
                    new User(
                        user.id,
                        user.name,
                        user.last_name,
                        user.email,
                        user.password
                    )
                )
            );
        } catch (error) {
            return null;
        }
    }

    async getUserByEmail(email: string): Promise<User | null> {
        const sql = 'CALL getUserByEmail(?)';
        const params: any[] = [email];
        try {
            const [result]: any = await query(sql, params);
            return new User(
                result[0][0].id,
                result[0][0].name,
                result[0][0].last_name,
                result[0][0].email,
                result[0][0].password
            );
        } catch (error) {
            return null;
        }
    }

    async createUser(
        id: string,
        name: string,
        last_name: string,
        email: string,
        password: string
    ): Promise<User | null> {
        const sql = 'CALL registerUser(?, ?, ?, ?, ?)';
        const params: any[] = [id, name, last_name, email, password];
        try {
            const [result]: any = await query(sql, params);
            return new User(id, name, last_name, email, password);
        } catch (error) {
            return null;
        }
    }

    async getUserByKitId(kit_id: string): Promise<string | null> {
        const sql = 'CALL getUserByKitId(?)';
        const params: any[] = [kit_id];
        try {
            const [result]: any = await query(sql, params);
            return result[0][0];
        } catch (error) {
            return null;
        }
    }
}