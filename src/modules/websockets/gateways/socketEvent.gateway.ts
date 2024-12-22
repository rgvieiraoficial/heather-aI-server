import { UseFilters } from '@nestjs/common';
import { WebSocketGateway, WebSocketServer, ConnectedSocket, MessageBody, SubscribeMessage } from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';

import { WebsocketsExceptionFilter } from '../validators/ws-exception.filter';

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
export class SocketEventGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('ai-chat')
  handleAiChat(
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