import { Module } from '@nestjs/common';

import { PrismaModule } from '../../../../lib/prisma/prisma.module';
import { MessagesRepository } from '../../repositories/implementations/messages.repository';
import { ListChatsController } from './listMessages.controller';
import { ListMessagesService } from './listMessages.service';

@Module({
  imports: [PrismaModule],
  providers: [
    ListMessagesService,
    {
      provide: 'MessagesRepository',
      useClass: MessagesRepository,
    }
  ],
  controllers: [ListChatsController],
})
export class ListMessagesModule { };