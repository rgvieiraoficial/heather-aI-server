import { Controller, Get, Header } from '@nestjs/common';
import { HelloWorldEventService } from './helloWorldEvent.service';

@Controller()
export class HelloWorldEventController {
  constructor(private readonly helloWorldEventService: HelloWorldEventService) { };

  @Get()
  @Header('Content-Type', 'application/json')
  async getHello(): Promise<object> {
    return this.helloWorldEventService.getHello();
  }
}
