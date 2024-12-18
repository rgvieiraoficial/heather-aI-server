import { Injectable } from '@nestjs/common';
import { Transactions, Prisma } from '@prisma/client';

import { ITransactionsRepository } from '../ITransactionsRepository';

import { PrismaService } from '../../../../lib/prisma/prisma.service';

@Injectable()
class TransactionsRepository implements ITransactionsRepository {

  constructor(private readonly prisma: PrismaService) { }

  async create({ destination_wallet_address, transaction_type, amount, currency, status, user }: Prisma.TransactionsCreateInput) {
    const data = await this.prisma.transactions.create({
      data: {
        destination_wallet_address,
        transaction_type,
        amount,
        currency,
        status,
        user
      }
    });

    return data;
  }

  async findById(id: string): Promise<Transactions | null> {
    const data = await this.prisma.transactions.findUnique({
      where: {
        id
      }
    });

    return data;
  }

  async list(user_id: string): Promise<Transactions[] | null> {
    const data = await this.prisma.transactions.findMany({
      where: {
        user_id
      }
    });

    return data;
  }
}

export { TransactionsRepository };