import { Module } from '@nestjs/common';
import { HelloWorldEventController } from './helloWorldEvent.controller';
import { HelloWorldEventService } from './helloWorldEvent.service';

@Module({
  controllers: [HelloWorldEventController],
  providers: [HelloWorldEventService],
})
export class HelloWorldEventModule {};
