import { HttpException, Inject, Injectable } from '@nestjs/common';
import { Messages } from '@prisma/client';

import { IMessagesRepository } from '../../repositories/IMessagesRepository';

interface IRequest {
  chat_id: string;
}

@Injectable()
export class ListMessagesService {
  constructor(
    @Inject('MessagesRepository')
    private readonly messagesRepository: IMessagesRepository
  ) { }

  async execute({ chat_id }: IRequest): Promise<Messages[]> {
    const response = await this.messagesRepository.list(chat_id);

    return response;
  }
}