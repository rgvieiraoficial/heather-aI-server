import { HttpException, Inject, Injectable } from '@nestjs/common';
import { Transactions, TransactionType, TransactionStatus } from '@prisma/client';

import { IUsersRepository } from '../../../accounts/repositories/IUsersRepository';
import { ITransactionsRepository } from '../../repositories/ITransactionsRepository';

interface IRequest {
  destination_wallet_address: string;
  transaction_type: TransactionType;
  amount: number;
  currency: string;
  status: TransactionStatus;
  user_id: string;
}

@Injectable()
export class CreateTransactionService {
  constructor(
    @Inject('UsersRepository')
    private readonly usersRepository: IUsersRepository,
    @Inject('TransactionsRepository')
    private readonly transactionsRepository: ITransactionsRepository
  ) { }

  async execute({ destination_wallet_address, transaction_type, amount, currency, status, user_id }: IRequest): Promise<Transactions> {
    const user = await this.usersRepository.findById(user_id);

    if (!user) {
      throw new HttpException('User does not exists!', 400);
    }

    const data = {
      destination_wallet_address,
      transaction_type,
      amount,
      currency,
      status,
      user: {
        connect: {
          id: user.id
        }
      },
    };

    const response = await this.transactionsRepository.create(data);

    return response;
  }
}