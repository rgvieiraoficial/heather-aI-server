import { HttpException, Inject, Injectable } from '@nestjs/common';
import { Messages, MessagesRole } from '@prisma/client';

import { IChatsRepository } from '../../../chats/repositories/IChatsRepository';
import { IMessagesRepository } from '../../repositories/IMessagesRepository';

interface IRequest {
  role: MessagesRole;
  content: string;
  chat_id: string;
  user_id: string;
}

@Injectable()
export class CreateMessageService {
  constructor(
    @Inject('ChatsRepository')
    private readonly chatsRepository: IChatsRepository,
    @Inject('MessagesRepository')
    private readonly messagesRepository: IMessagesRepository
  ) { }

  async execute({ role, content, chat_id, user_id }: IRequest): Promise<Messages> {
    const chat = await this.chatsRepository.findById(chat_id);

    if (!chat) {
      throw new HttpException('Chat does not exists!', 400);
    }

    if (chat.user_id !== user_id) {
      throw new HttpException('The Chat provided does not belong to this User!', 400);
    }

    const data = {
      role,
      content,
      chat: {
        connect: {
          id: chat.id
        }
      },
    };

    const response = await this.messagesRepository.create(data);

    return response;
  }
}