import { UseFilters } from '@nestjs/common';
import { WebSocketGateway, WebSocketServer, ConnectedSocket, MessageBody, SubscribeMessage } from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';
import { MessagesRole } from '@prisma/client';

import { CreateMessageService } from '../../modules/messages/useCases/createMessageUseCase/createMessage.service';
import { ListMessagesService } from '../../modules/messages/useCases/listMessagesUseCase/listMessages.service';

import { SendMessageToModel } from '../../modules/ollama/useCases/sendMessageToModelUseCase/sendMessageToModel.service';

import { WebsocketsExceptionFilter } from '../validators/ws-exception.filter';

import { filterByKeys } from '../../helpers/filterByKeys';

interface IRequest {
  content: string;
  chat_id: string;
  user_id: string;
}

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
@UseFilters(new WebsocketsExceptionFilter())
export class ChatGateway {
  @WebSocketServer()
  server: Server;

  constructor(
    private createMessageService: CreateMessageService,
    private listMessagesService: ListMessagesService,
    private sendMessageToModel: SendMessageToModel
  ) { }

  @SubscribeMessage('ai-chat-message')
  async handleAiChatMessage(
    @MessageBody() { content, chat_id, user_id }: IRequest,
    @ConnectedSocket() socket: Socket,
  ) {
    const messages = await this.listMessagesService.execute({ chat_id, take: 1 });

    if (messages.length === 0) {
      await this.createMessageService.execute({ role: MessagesRole.user, content, chat_id, user_id });

      const response = await this.sendMessageToModel.execute({
        messages: [
          {
            role: MessagesRole.user,
            content
          }
        ]
      });

      if (response) {
        await this.createMessageService.execute({
          role: MessagesRole.assistant,
          content: response.content,
          chat_id,
          user_id
        });

        if (response.functionResponses.length > 0) {
          for (const functionResponse of response.functionResponses) {
            socket.emit('xrp-transfer-request', functionResponse);
          }
        }

        socket.emit('ai-chat-message', JSON.stringify(response.content));
      } else {
        socket.emit('ai-chat-message', JSON.stringify({ error: 'Error!' }));
      }
    } else {
      await this.createMessageService.execute({
        role: MessagesRole.user,
        content,
        chat_id,
        user_id
      });

      const filteredMessages = filterByKeys(messages, ['role', 'content']);

      console.log(filteredMessages);

      const response = await this.sendMessageToModel.execute({
        messages: [
          ...filteredMessages,
          {
            role: MessagesRole.user,
            content
          }
        ]
      });

      if (response) {
        await this.createMessageService.execute({
          role: MessagesRole.assistant,
          content: response.content,
          chat_id,
          user_id
        });

        if (response.functionResponses.length > 0) {
          for (const functionResponse of response.functionResponses) {
            socket.emit('xrp-transfer-request', functionResponse);
          }
        }

        socket.emit('ai-chat-message', JSON.stringify(response.content));
      } else {
        socket.emit('ai-chat-message', JSON.stringify({ error: 'Error!' }));
      }
    }
  }
}