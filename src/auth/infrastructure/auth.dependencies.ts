import { MysqlUserRepository } from '../../user/infrastructure/mysql.repo.user';
import { LoginService } from '../application/services/login.service';
import { LoginController } from './controllers/login.controller';
import { LoginDriverService } from '../application/services/loginDriver.service';
import { LoginDriverController } from './controllers/loginDriver.controller';

export const mysqlRepository = new MysqlUserRepository();

export const loginService = new LoginService(mysqlRepository);
export const loginController = new LoginController(loginService);
export const loginDriverService = new LoginDriverService(mysqlRepository);
export const loginDriverController = new LoginDriverController(loginDriverService);