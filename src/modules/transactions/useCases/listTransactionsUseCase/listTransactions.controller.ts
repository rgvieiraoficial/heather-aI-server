import { Controller, HttpCode, HttpStatus, Get, Header, UseGuards } from '@nestjs/common';

import { AuthGuard } from '../../../../auth/auth.guard';
import { User, IuserPayload } from '../../../../auth/decorators/user.decorator';

import { ListTransactionsService } from './listTransactions.service';

import { jsonFormatter } from '../../../../helpers/jsonFormatter';

@Controller()
export class ListTransactionsController {
  constructor(private listTransactionsService: ListTransactionsService) { }

  @HttpCode(HttpStatus.CREATED)
  @UseGuards(AuthGuard)
  @Get()
  @Header('Content-Type', 'application/json')
  async handle(
    @User()
    user: IuserPayload
  ): Promise<Object> {
    const { sub: user_id } = user;

    const data = await this.listTransactionsService.execute({ user_id });

    return jsonFormatter(data);
  }
}