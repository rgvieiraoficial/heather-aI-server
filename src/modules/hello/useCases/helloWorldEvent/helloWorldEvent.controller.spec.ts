import { Test, TestingModule } from '@nestjs/testing';
import { HelloWorldEventController } from './helloWorldEvent.controller';
import { HelloWorldEventService } from './helloWorldEvent.service';

describe('HelloWorldEventController', () => {
  let helloWorldEventController: HelloWorldEventController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [HelloWorldEventController],
      providers: [HelloWorldEventService],
    }).compile();

    helloWorldEventController = app.get<HelloWorldEventController>(HelloWorldEventService);
  });

  describe('root', () => {
    it('should return "Everything is Fine!"', () => {
      expect(helloWorldEventController.getHello()).toBe('Everything is Fine!');
    });
  });
});
