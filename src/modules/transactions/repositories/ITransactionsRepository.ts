import { Transactions, Prisma } from '@prisma/client';

interface ITransactionsRepository {
  create({ destination_wallet_address, transaction_type, amount, currency, status, user }: Prisma.TransactionsCreateInput): Promise<Transactions>;
  findById(id: string): Promise<Transactions | null>;
  list(user_id: string): Promise<Transactions[] | null>;
}

export { ITransactionsRepository };