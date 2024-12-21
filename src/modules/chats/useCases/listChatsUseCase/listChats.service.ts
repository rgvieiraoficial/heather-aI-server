import { Inject, Injectable } from '@nestjs/common';
import { Chat } from '@prisma/client';

import { IChatsRepository } from '../../repositories/IChatsRepository';

interface IRequest {
  user_id: string;
}

@Injectable()
export class ListChatsService {
  constructor(
    @Inject('ChatsRepository')
    private readonly chatsRepository: IChatsRepository
  ) { }

  async execute({ user_id }: IRequest): Promise<Chat[]> {
    const response = await this.chatsRepository.list(user_id);

    return response;
  }
}