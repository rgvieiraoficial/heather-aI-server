import { Messages, Prisma } from '@prisma/client';

interface IMessagesRepository {
  create({ role, content, chat }: Prisma.MessagesCreateInput): Promise<Messages>;
  findById(id: string): Promise<Messages | null>;
  list(chat_id: string, take?: number): Promise<Messages[] | null>;
}

export { IMessagesRepository };