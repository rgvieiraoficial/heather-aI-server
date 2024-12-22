import { Body, Controller, HttpCode, HttpStatus, Header, Post, UseGuards } from '@nestjs/common';

import { AuthGuard } from '../../../../auth/auth.guard';
import { User, IuserPayload } from '../../../../auth/decorators/user.decorator';

import { CreateMessageService } from './createMessage.service';

import { CreateMessageDto } from '../../dtos/createMessage.dto';

import { jsonFormatter } from '../../../../helpers/jsonFormatter';

@Controller()
export class CreateMessageController {
  constructor(private createMessageService: CreateMessageService) { }

  @HttpCode(HttpStatus.CREATED)
  @UseGuards(AuthGuard)
  @Post()
  @Header('Content-Type', 'application/json')
  async handle(
    @User()
    user: IuserPayload,
    @Body() { role, content, chat_id }: CreateMessageDto): Promise<Object> {
    const { sub: user_id } = user;

    const data = await this.createMessageService.execute({
      role,
      content,
      chat_id,
      user_id
    });

    return jsonFormatter(data);
  }
}