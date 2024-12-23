import { Injectable } from '@nestjs/common';
import { Messages, Prisma } from '@prisma/client';

import { IMessagesRepository } from '../IMessagesRepository';

import { PrismaService } from '../../../../lib/prisma/prisma.service';

@Injectable()
class MessagesRepository implements IMessagesRepository {

  constructor(private readonly prisma: PrismaService) { }

  async create({ role, content, chat }: Prisma.MessagesCreateInput) {
    const data = await this.prisma.messages.create({
      data: {
        role,
        content,
        chat
      }
    });

    return data;
  }

  async findById(id: string): Promise<Messages | null> {
    const data = await this.prisma.messages.findUnique({
      where: {
        id
      }
    });

    return data;
  }

  async list(chat_id: string, take?: number): Promise<Messages[] | null> {
    if (take) {
      const data = await this.prisma.messages.findMany({
        take,
        where: {
          chat_id
        },
        orderBy: {
          createdAt: 'desc',
        },
      });

      return data;
    } else {
      const data = await this.prisma.messages.findMany({
        where: {
          chat_id
        }
      });

      return data;
    }
  }
}

export { MessagesRepository };