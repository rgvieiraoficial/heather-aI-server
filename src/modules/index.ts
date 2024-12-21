import { RouterModule } from '@nestjs/core';

import { HelloWorldEventModule } from './hello/useCases/helloWorldEvent/helloWorldEvent.module';

import { CreateUserModule } from './accounts/useCases/createUser/createUser.module';
import { AuthenticateUserModule } from './accounts/useCases/authenticateUser/authenticateUser.module';

import { CreateChatModule } from './chats/useCases/createChatUseCase/createChat.module';
import { ListChatsModule } from './chats/useCases/listChatsUseCase/listChats.module';

import { CreateMessageModule } from './messages/useCases/createMessageUseCase/createMessage.module';
import { ListMessagesModule } from './messages/useCases/listMessagesUseCase/listMessages.module';

import { CreateTransactionModule } from './transactions/useCases/createTransactionUseCase/createTransaction.module';
import { ListTransactionsModule } from './transactions/useCases/listTransactionsUseCase/listTransactions.module';

export const modules = [
  HelloWorldEventModule,
  AuthenticateUserModule,
  CreateUserModule,
  CreateChatModule,
  ListChatsModule,
  CreateMessageModule,
  ListMessagesModule,
  CreateTransactionModule,
  ListTransactionsModule,
  RouterModule.register([
    { path: '/', module: HelloWorldEventModule },
    {
      path: '/auth',
      module: AuthenticateUserModule,
    },
    {
      path: '/chats',
      module: CreateChatModule,
    },
    {
      path: '/chats',
      module: ListChatsModule,
    },
    {
      path: '/messages',
      module: CreateMessageModule,
    },
    {
      path: '/messages/:chat_id',
      module: ListMessagesModule,
    },
    {
      path: '/users',
      module: CreateUserModule,
    },
    {
      path: '/transactions',
      module: CreateTransactionModule,
    },
    {
      path: '/transactions',
      module: ListTransactionsModule,
    },
  ]),
]