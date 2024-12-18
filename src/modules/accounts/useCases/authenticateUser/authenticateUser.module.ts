import { Module } from '@nestjs/common';

import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from '../../../../config/auth';
import { PrismaModule } from '../../../../lib/prisma/prisma.module';
import { UsersRepository } from '../../repositories/implementations/users.repository';
import { AuthenticateUserController } from './authenticateUser.controller';
import { AuthenticateUserService } from './authenticateUser.service';


@Module({
  imports: [
    PrismaModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret_token,
      signOptions: { expiresIn: jwtConstants.expires_in_token },
    }),
  ],
  providers: [
    AuthenticateUserService, {
      provide: 'UsersRepository',
      useClass: UsersRepository,
    }
  ],
  controllers: [AuthenticateUserController],
})
export class AuthenticateUserModule { }