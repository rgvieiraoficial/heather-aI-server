import { Inject, Injectable } from '@nestjs/common';
import { Transactions } from '@prisma/client';

import { ITransactionsRepository } from '../../repositories/ITransactionsRepository';

interface IRequest {
  user_id: string;
}

@Injectable()
export class ListTransactionsService {
  constructor(
    @Inject('TransactionsRepository')
    private readonly transactionsRepository: ITransactionsRepository
  ) { }

  async execute({ user_id }: IRequest): Promise<Transactions[]> {
    const response = await this.transactionsRepository.list(user_id);

    return response;
  }
}