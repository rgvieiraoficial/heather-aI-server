import { Injectable } from '@nestjs/common';
import { Chat, Prisma } from '@prisma/client';

import { IChatsRepository } from '../IChatsRepository';

import { PrismaService } from '../../../../lib/prisma/prisma.service';

@Injectable()
class ChatsRepository implements IChatsRepository {

  constructor(private readonly prisma: PrismaService) { }

  async create({ title, user }: Prisma.ChatCreateInput) {
    const data = await this.prisma.chat.create({
      data: {
        title,
        user
      }
    });

    return data;
  }

  async findById(id: string): Promise<Chat | null> {
    const data = await this.prisma.chat.findUnique({
      where: {
        id
      }
    });

    return data;
  }

  async list(user_id: string): Promise<Chat[] | null> {
    const data = await this.prisma.chat.findMany({
      where: {
        user_id
      }
    });

    return data;
  }
}

export { ChatsRepository };