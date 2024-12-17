import { Controller, Get } from '@nestjs/common';
import { HelloWorldEventService } from './helloWorldEvent.service';

@Controller()
export class HelloWorldEventController {
  constructor(private readonly helloWorldEventService: HelloWorldEventService) { };

  @Get()
  async getHello(): Promise<object> {
    return this.helloWorldEventService.getHello();
  }
}
