import { Module } from '@nestjs/common';

import { PrismaModule } from '../../../../lib/prisma/prisma.module';
import { UsersRepository } from '../../../accounts/repositories/implementations/users.repository';
import { ChatsRepository } from '../../repositories/implementations/chats.repository';
import { CreateChatController } from './createChat.controller';
import { CreateChatService } from './createChat.service';

@Module({
  imports: [PrismaModule],
  providers: [
    CreateChatService,
    {
      provide: 'UsersRepository',
      useClass: UsersRepository,
    },
    {
      provide: 'ChatsRepository',
      useClass: ChatsRepository,
    }
  ],
  controllers: [CreateChatController],
})
export class CreateChatModule { };