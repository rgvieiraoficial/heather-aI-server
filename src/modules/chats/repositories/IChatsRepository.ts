import { Chat, Prisma } from '@prisma/client';

interface IChatsRepository {
  create({ title, user }: Prisma.ChatCreateInput): Promise<Chat>;
  findById(id: string): Promise<Chat | null>;
  list(user_id: string): Promise<Chat[] | null>;
}

export { IChatsRepository };