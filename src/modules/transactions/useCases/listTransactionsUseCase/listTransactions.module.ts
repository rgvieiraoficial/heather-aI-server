import { Module } from '@nestjs/common';

import { PrismaModule } from '../../../../lib/prisma/prisma.module';
import { TransactionsRepository } from '../../repositories/implementations/transactions.repository';
import { ListTransactionsController } from './listTransactions.controller';
import { ListTransactionsService } from './listTransactions.service';

@Module({
  imports: [PrismaModule],
  providers: [
    ListTransactionsService,
    {
      provide: 'TransactionsRepository',
      useClass: TransactionsRepository,
    }
  ],
  controllers: [ListTransactionsController],
})
export class ListTransactionsModule { };