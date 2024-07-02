import { CreateUserService } from '../application/createUser.service';
import { CreateUserController } from './controllers/createUser.controller';
//import { GetAllUsersService } from '../application/getAllUsersService';
//import { GetAllUsersController } from './controllers/getAllUsersController';
import { GetUserByEmailService } from '../application/getUserByEmail.service';
import { GetUserByEmailController } from './controllers/getUserByEmail.controller';
import { MysqlUserRepository } from './mysql.repo.user';

export const mysqlUserRepository = new MysqlUserRepository();

export const createUserService = new CreateUserService(mysqlUserRepository);
//export const getAllUsersService = new GetAllUsersService(mysqlUserRepository);
export const getUserByEmailService = new GetUserByEmailService(mysqlUserRepository);

export const createUserController = new CreateUserController(createUserService);
//export const getAllUsersController = new GetAllUsersController(getAllUsersService)
export const getUserByEmailController = new GetUserByEmailController(getUserByEmailService);