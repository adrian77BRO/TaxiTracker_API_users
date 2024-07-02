import { MysqlUserRepository } from '../../user/infrastructure/mysql.repo.user';
import { LoginService } from '../application/services/login.service';
import { LoginController } from './controllers/login.controller';

export const mysqlRepository = new MysqlUserRepository();

export const loginService = new LoginService(mysqlRepository);
export const loginController = new LoginController(loginService);