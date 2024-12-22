import { Module } from '@nestjs/common';

import { PrismaModule } from '../lib/prisma/prisma.module';

import { ChatGateway } from './gateways/chat.gateway';

import { ChatsRepository } from '../modules/chats/repositories/implementations/chats.repository';
import { MessagesRepository } from '../modules/messages/repositories/implementations/messages.repository';
import { CreateMessageService } from '../modules/messages/useCases/createMessageUseCase/createMessage.service';

@Module({
  imports: [PrismaModule],
  providers: [
    ChatGateway,
    CreateMessageService,
    {
      provide: 'ChatsRepository',
      useClass: ChatsRepository,
    },
    {
      provide: 'MessagesRepository',
      useClass: MessagesRepository,
    }
  ]
})
export class WebsocketsModule { }