import { Test, TestingModule } from '@nestjs/testing';
import { AuthenticateUserController } from './authenticateUser.controller';
import { AuthenticateUserService } from './authenticateUser.service';

describe('AuthenticateUserController', () => {
  let authenticateUserController: AuthenticateUserController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AuthenticateUserController],
      providers: [AuthenticateUserService],
    }).compile();

    authenticateUserController = app.get<AuthenticateUserController>(AuthenticateUserService);
  });

  describe('authenticate user', () => {
    it('should be able to return a valid JWT Token', () => {
      const data = {
        wallet_address: 'rLjitvfJNPVqvojknj5R4eun2RjYu4BDtr',
        password: '123456'
      };

      expect(authenticateUserController.handle(data)).toHaveProperty('token');
    });
  });
});