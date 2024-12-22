import { Body, Controller, HttpCode, HttpStatus, Header, Post, UseGuards } from '@nestjs/common';

import { AuthGuard } from '../../../../auth/auth.guard';
import { User, IuserPayload } from '../../../../auth/decorators/user.decorator';

import { CreateTransactionService } from './createTransaction.service';

import { CreateTransactionDto } from '../../dtos/createTransaction.dto';

import { jsonFormatter } from '../../../../helpers/jsonFormatter';

@Controller()
export class CreateTransactionController {
  constructor(private createTransactionService: CreateTransactionService) { }

  @HttpCode(HttpStatus.CREATED)
  @UseGuards(AuthGuard)
  @Post()
  @Header('Content-Type', 'application/json')
  async handle(
    @User()
    user: IuserPayload,
    @Body() { destination_wallet_address, transaction_type, amount, currency, status }: CreateTransactionDto): Promise<Object> {
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