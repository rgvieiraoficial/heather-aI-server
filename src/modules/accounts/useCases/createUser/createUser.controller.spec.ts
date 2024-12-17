import { Test, TestingModule } from '@nestjs/testing';

import { CreateUserController } from './createUser.controller';
import { CreateUserService } from './createUser.service';

describe('CreateUserController', () => {
  let createUserController: CreateUserController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CreateUserController],
      providers: [CreateUserService],
    }).compile();

    createUserController = app.get<CreateUserController>(CreateUserService);
  });

  describe('create a user', () => {
    it('should be able to create a new user', () => {
      const data = {
        nickname: 'User Test',
        wallet_address: 'rLjitvfJNPVqvojknj5R4eun2RjYu4BDmr',
        account_type: 'local',
        password: '123456'
      };

      expect(createUserController.handle(data)).toHaveProperty('id');
    });
  });
});