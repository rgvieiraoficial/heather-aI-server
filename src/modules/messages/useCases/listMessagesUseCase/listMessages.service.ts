import { HttpException, Inject, Injectable } from '@nestjs/common';
import { Messages } from '@prisma/client';

import { IMessagesRepository } from '../../repositories/IMessagesRepository';

interface IRequest {
  chat_id: string;
  take?: number;
}

@Injectable()
export class ListMessagesService {
  constructor(
    @Inject('MessagesRepository')
    private readonly messagesRepository: IMessagesRepository
  ) { }

  async execute({ chat_id, take }: IRequest): Promise<Messages[]> {
    const response = take ? await this.messagesRepository.list(chat_id, take) : await this.messagesRepository.list(chat_id);

    return response;
  }
}