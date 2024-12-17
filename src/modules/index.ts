import { RouterModule } from '@nestjs/core';

import { HelloWorldEventModule } from './hello/useCases/helloWorldEvent/helloWorldEvent.module';
import { CreateUserModule } from './accounts/useCases/createUser/createUser.module';

export const modules = [
  HelloWorldEventModule,
  CreateUserModule,
  RouterModule.register([
    { path: '/', module: HelloWorldEventModule },
    {
      path: '/users',
      module: CreateUserModule,
    },
  ]),
]