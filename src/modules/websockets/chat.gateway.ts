import { UseFilters, UsePipes, ValidationPipe } from '@nestjs/common';
import { WebSocketGateway, WebSocketServer, ConnectedSocket, MessageBody, SubscribeMessage } from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';

import { WebsocketsExceptionFilter } from './ws-exception.filter';

interface IRequest {
  nickname: string;
  message: string;
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

  @SubscribeMessage('ai-chat')
  handle(
    @MessageBody() { nickname, message }: IRequest,
    @ConnectedSocket() socket: Socket,
  ) {
    socket.emit('ai-chat', {
      nickname,
      message,
      time: new Date().toDateString(),
    });
  }
}