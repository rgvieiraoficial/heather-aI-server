import { Module } from '@nestjs/common';

import { PrismaModule } from '../../../../lib/prisma/prisma.module';
import { UsersRepository } from '../../../accounts/repositories/implementations/users.repository';
import { TransactionsRepository } from '../../repositories/implementations/transactions.repository';
import { CreateTransactionController } from './createTransaction.controller';
import { CreateTransactionService } from './createTransaction.service';

@Module({
  imports: [PrismaModule],
  providers: [
    CreateTransactionService,
    {
      provide: 'UsersRepository',
      useClass: UsersRepository,
    },
    {
      provide: 'TransactionsRepository',
      useClass: TransactionsRepository,
    }
  ],
  controllers: [CreateTransactionController],
})
export class CreateTransactionModule { };