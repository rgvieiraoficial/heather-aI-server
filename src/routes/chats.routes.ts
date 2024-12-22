import { CreateChatModule } from '../modules/chats/useCases/createChatUseCase/createChat.module';
import { ListChatsModule } from '../modules/chats/useCases/listChatsUseCase/listChats.module';

export const chatsModules = [
  CreateChatModule,
  ListChatsModule,
]

export const chatsRoutes = [
  {
    path: '/chats',
    module: CreateChatModule,
  },
  {
    path: '/chats',
    module: ListChatsModule,
  },
];