import { RouterModule } from '@nestjs/core';

import { HelloWorldEventModule } from './hello/useCases/helloWorldEvent/helloWorldEvent.module';
import { CreateUserModule } from './accounts/useCases/createUser/createUser.module';
import { AuthenticateUserModule } from './accounts/useCases/authenticateUser/authenticateUser.module';
import { CreateTransactionModule } from './transactions/useCases/createTransactionUseCase/createTransaction.module';
import { ListTransactionsModule } from './transactions/useCases/listTransactionsUseCase/listTransactions.module';

export const modules = [
  HelloWorldEventModule,
  AuthenticateUserModule,
  CreateUserModule,
  CreateTransactionModule,
  ListTransactionsModule,
  RouterModule.register([
    { path: '/', module: HelloWorldEventModule },
    {
      path: '/auth',
      module: AuthenticateUserModule,
    },
    {
      path: '/users',
      module: CreateUserModule,
    },
    {
      path: '/transactions',
      module: CreateTransactionModule,
    },
    {
      path: '/transactions',
      module: ListTransactionsModule,
    },
  ]),
]