import { Injectable } from '@nestjs/common';

@Injectable()
export class HelloWorldEventService {
  async getHello(): Promise<object> {
    return { status: 'Everything is Fine!' };
  }
}
