import { CreateMessageModule } from '../modules/messages/useCases/createMessageUseCase/createMessage.module';
import { ListMessagesModule } from '../modules/messages/useCases/listMessagesUseCase/listMessages.module';

export const messagesModules = [
  CreateMessageModule,
  ListMessagesModule,
]

export const messagesRoutes = [
  {
    path: '/messages',
    module: CreateMessageModule,
  },
  {
    path: '/messages/:chat_id',
    module: ListMessagesModule,
  },
];