import { CreateUserService } from '../application/createUser.service';
import { CreateUserController } from './controllers/createUser.controller';
import { GetAllUsersService } from '../application/getAllUsers.service';
import { GetAllUsersController } from './controllers/getAllUsers.controller';
import { GetUserByEmailService } from '../application/getUserByEmail.service';
import { GetUserByEmailController } from './controllers/getUserByEmail.controller';
import { GetUserByKitIdService } from '../application/getUserByKitId.service';
import { GetUserByKitIdController } from './controllers/getUserByKitId.controller';
import { MysqlUserRepository } from './mysql.repo.user';

export const mysqlUserRepository = new MysqlUserRepository();

export const createUserService = new CreateUserService(mysqlUserRepository);
export const getAllUsersService = new GetAllUsersService(mysqlUserRepository);
export const getUserByEmailService = new GetUserByEmailService(mysqlUserRepository);
export const getUserByKitIdService = new GetUserByKitIdService(mysqlUserRepository);

export const createUserController = new CreateUserController(createUserService);
export const getAllUsersController = new GetAllUsersController(getAllUsersService)
export const getUserByEmailController = new GetUserByEmailController(getUserByEmailService);
export const getUserByKitIdController = new GetUserByKitIdController(getUserByKitIdService);