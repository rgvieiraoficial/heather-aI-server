import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';

import { AuthenticateUserService } from './authenticateUser.service';

import { AuthDto } from '../../dtos/auth.dto';

@Controller('authenticate')
export class AuthenticateUserController {
  constructor(private authenticateUserService: AuthenticateUserService) { }

  @HttpCode(HttpStatus.OK)
  @Post()
  async handle(@Body() { wallet_address, password }: AuthDto): Promise<Object> {
    const data = await this.authenticateUserService.execute({ wallet_address, password });

    return data;
  }
}