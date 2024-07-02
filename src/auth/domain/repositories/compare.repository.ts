export interface CompareRepository {
    comparePassword(password: string, passwordRequest: string): boolean;
}