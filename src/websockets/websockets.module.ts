import { Module } from '@nestjs/common';

import { PrismaModule } from '../lib/prisma/prisma.module';

import { ChatGateway } from './gateways/chat.gateway';

import { ChatsRepository } from '../modules/chats/repositories/implementations/chats.repository';
import { MessagesRepository } from '../modules/messages/repositories/implementations/messages.repository';
import { CreateMessageService } from '../modules/messages/useCases/createMessageUseCase/createMessage.service';
import { ListMessagesService } from '../modules/messages/useCases/listMessagesUseCase/listMessages.service';

import { SendMessageToModel } from '../modules/ollama/useCases/sendMessageToModelUseCase/sendMessageToModel.service';

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
    },
    ListMessagesService,
    {
      provide: 'MessagesRepository',
      useClass: MessagesRepository,
    },
    SendMessageToModel
  ]
})
export class WebsocketsModule { }