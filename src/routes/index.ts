import { RouterModule } from '@nestjs/core';

import { accountsModules, accountsRoutes } from './accounts.routes';
import { chatsModules, chatsRoutes } from './chats.routes';
import { messagesModules, messagesRoutes } from './messages.routes';
import { transactionsModules, transactionsRoutes } from './transactions.routes';

import { healthCheckModules, healthCheckRoutes } from './healthCheck.routes'

const modules = [
  ...accountsModules,
  ...chatsModules,
  ...messagesModules,
  ...transactionsModules,
  ...healthCheckModules,
]

const httpRoutes = [
  ...accountsRoutes,
  ...chatsRoutes,
  ...messagesRoutes,
  ...transactionsRoutes,
  ...healthCheckRoutes
]

export const routes = [
  ...modules,
  RouterModule.register(httpRoutes),
]