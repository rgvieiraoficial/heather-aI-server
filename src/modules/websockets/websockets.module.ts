import { Module } from '@nestjs/common';
import { SocketEventGateway } from './gateways/socketEvent.gateway';

@Module({
  providers: [SocketEventGateway],
})
export class WebsocketsModule { }