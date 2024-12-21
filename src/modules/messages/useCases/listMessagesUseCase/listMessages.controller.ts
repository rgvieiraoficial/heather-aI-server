import { Controller, HttpCode, HttpStatus, Get, Param, UseGuards } from '@nestjs/common';

import { AuthGuard } from '../../../../auth/auth.guard';

import { ListMessagesService } from './listMessages.service';

import { ListMessagesDto } from '../../dtos/listMessages.dto';

import { jsonFormatter } from '../../../../helpers/jsonFormatter';

@Controller()
export class ListChatsController {
  constructor(private listMessagesService: ListMessagesService) { }

  @HttpCode(HttpStatus.CREATED)
  @UseGuards(AuthGuard)
  @Get()
  async handle(
    @Param() { chat_id }: ListMessagesDto
  ): Promise<Object> {
    const data = await this.listMessagesService.execute({ chat_id });

    return jsonFormatter(data);
  }
}