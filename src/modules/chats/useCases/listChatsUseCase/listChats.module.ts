import { Module } from '@nestjs/common';

import { PrismaModule } from '../../../../lib/prisma/prisma.module';
import { ChatsRepository } from '../../repositories/implementations/chats.repository';
import { ListChatsController } from './listChats.controller';
import { ListChatsService } from './listChats.service';

@Module({
  imports: [PrismaModule],
  providers: [
    ListChatsService,
    {
      provide: 'ChatsRepository',
      useClass: ChatsRepository,
    }
  ],
  controllers: [ListChatsController],
})
export class ListChatsModule { };