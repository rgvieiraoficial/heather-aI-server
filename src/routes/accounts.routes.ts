import { AuthenticateUserModule } from '../modules/accounts/useCases/authenticateUser/authenticateUser.module';
import { CreateUserModule } from '../modules/accounts/useCases/createUser/createUser.module';

export const accountsModules = [
  AuthenticateUserModule,
  CreateUserModule,
]

export const accountsRoutes = [
  {
    path: '/auth',
    module: AuthenticateUserModule,
  },
  {
    path: '/users',
    module: CreateUserModule,
  }
];