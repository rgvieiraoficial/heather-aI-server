import { Body, Controller, HttpCode, HttpStatus, Post, UseGuards } from '@nestjs/common';
import { TransactionType, TransactionStatus } from '@prisma/client';

import { AuthGuard } from '../../../../auth/auth.guard';
import { User, IuserPayload } from '../../../../auth/decorators/user.decorator';

import { CreateTransactionService } from './createTransaction.service';

import { jsonFormatter } from '../../../../helpers/jsonFormatter';

interface IRequest {
  destination_wallet_address: string;
  transaction_type: TransactionType;
  amount: number;
  currency: string;
  status: TransactionStatus;
  user_id: string;
}

@Controller()
export class CreateTransactionController {
  constructor(private createTransactionService: CreateTransactionService) { }

  @HttpCode(HttpStatus.CREATED)
  @UseGuards(AuthGuard)
  @Post()
  async handle(
    @User()
    user: IuserPayload,
    @Body() { destination_wallet_address, transaction_type, amount, currency, status }: IRequest): Promise<Object> {
    const { sub: user_id } = user;

    const data = await this.createTransactionService.execute({
      destination_wallet_address,
      transaction_type,
      amount,
      currency,
      status,
      user_id
    });

    return jsonFormatter(data);
  }
}