import { Injectable } from '@nestjs/common';

@Injectable()
export class HelloWorldEventService {
  getHello(): string {
    return 'Everything is Fine!';
  }
}
