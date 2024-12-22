import { UseFilters } from '@nestjs/common';
import { WebSocketGateway, WebSocketServer, ConnectedSocket, MessageBody, SubscribeMessage } from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';
import { MessagesRole } from '@prisma/client';

import { CreateMessageService } from '../../modules/messages/useCases/createMessageUseCase/createMessage.service';

import { WebsocketsExceptionFilter } from '../validators/ws-exception.filter';

interface IRequest {
  role: MessagesRole;
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

  constructor(private createMessageService: CreateMessageService) { }

  @SubscribeMessage('ai-chat-message')
  async handle(
    @MessageBody() { role, content, chat_id, user_id }: IRequest,
    @ConnectedSocket() socket: Socket,
  ) {
    const data = await this.createMessageService.execute({ role, content, chat_id, user_id });

    socket.emit('ai-chat-message', JSON.stringify(data));
  }
}