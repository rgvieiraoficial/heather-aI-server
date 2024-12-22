import { Body, Controller, HttpCode, HttpStatus, Header, Post, UseGuards } from '@nestjs/common';

import { AuthGuard } from '../../../../auth/auth.guard';
import { User, IuserPayload } from '../../../../auth/decorators/user.decorator';

import { CreateChatService } from './createChat.service';

import { CreateChatDto } from '../../dtos/createChat.dto';

import { jsonFormatter } from '../../../../helpers/jsonFormatter';

@Controller()
export class CreateChatController {
  constructor(private createChatService: CreateChatService) { }

  @HttpCode(HttpStatus.CREATED)
  @UseGuards(AuthGuard)
  @Post()
  @Header('Content-Type', 'application/json')
  async handle(
    @User()
    user: IuserPayload,
    @Body() { title }: CreateChatDto): Promise<Object> {
    const { sub: user_id } = user;

    const data = await this.createChatService.execute({
      title,
      user_id
    });

    return jsonFormatter(data);
  }
}