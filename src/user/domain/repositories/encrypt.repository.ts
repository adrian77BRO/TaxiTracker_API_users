export interface EncryptRepository {
    encryptPassword(password: string): string;
}