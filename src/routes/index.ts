import { RouterModule } from '@nestjs/core';

import { accountsModules, accountsRoutes } from './accounts.routes';
import { chatsModules, chatsRoutes } from './chats.routes';
import { messagesModules, messagesRoutes } from './messages.routes';
import { transactionsModules, transactionsRoutes } from './transactions.routes';

import { HelloWorldEventModule } from '../modules/hello/useCases/helloWorldEvent/helloWorldEvent.module';

const modules = [
  ...accountsModules,
  ...chatsModules,
  ...messagesModules,
  ...transactionsModules,
]

const httpRoutes = [
  ...accountsRoutes,
  ...chatsRoutes,
  ...messagesRoutes,
  ...transactionsRoutes,
  { path: '/', module: HelloWorldEventModule }
]

export const routes = [
  ...modules,
  RouterModule.register(httpRoutes),
]