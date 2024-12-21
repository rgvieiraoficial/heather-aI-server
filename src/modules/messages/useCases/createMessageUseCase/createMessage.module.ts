import { Module } from '@nestjs/common';

import { PrismaModule } from '../../../../lib/prisma/prisma.module';
import { ChatsRepository } from '../../../chats/repositories/implementations/chats.repository';
import { MessagesRepository } from '../../repositories/implementations/messages.repository';
import { CreateMessageController } from './createMessage.controller';
import { CreateMessageService } from './createMessage.service';

@Module({
  imports: [PrismaModule],
  providers: [
    CreateMessageService,
    {
      provide: 'ChatsRepository',
      useClass: ChatsRepository,
    },
    {
      provide: 'MessagesRepository',
      useClass: MessagesRepository,
    }
  ],
  controllers: [CreateMessageController],
})
export class CreateMessageModule { };