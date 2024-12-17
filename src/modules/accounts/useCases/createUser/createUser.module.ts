import { Module } from '@nestjs/common';

import { PrismaModule } from '../../../../lib/prisma/prisma.module';
import { UsersRepository } from '../../repositories/implementations/users.repository';
import { CreateUserController } from './createUser.controller';
import { CreateUserService } from './createUser.service';

@Module({
  imports: [PrismaModule],
  providers: [
    CreateUserService,
    {
      provide: 'UsersRepository',
      useClass: UsersRepository,
    },
  ],
  controllers: [CreateUserController],
})
export class CreateUserModule { };