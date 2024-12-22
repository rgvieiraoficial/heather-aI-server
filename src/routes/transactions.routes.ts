import { CreateTransactionModule } from '../modules/transactions/useCases/createTransactionUseCase/createTransaction.module';
import { ListTransactionsModule } from '../modules/transactions/useCases/listTransactionsUseCase/listTransactions.module';

export const transactionsModules = [
  CreateTransactionModule,
  ListTransactionsModule,
]

export const transactionsRoutes = [
  {
    path: '/transactions',
    module: CreateTransactionModule,
  },
  {
    path: '/transactions',
    module: ListTransactionsModule,
  },
];