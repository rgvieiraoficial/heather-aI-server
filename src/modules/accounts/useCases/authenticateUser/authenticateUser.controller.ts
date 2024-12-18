import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthenticateUserService } from './authenticateUser.service';

interface IRequest {
  wallet_address: string;
  password: string;
}

@Controller('authenticate')
export class AuthenticateUserController {
  constructor(private authenticateUserService: AuthenticateUserService) { }

  @HttpCode(HttpStatus.OK)
  @Post()
  async handle(@Body() { wallet_address, password }: IRequest): Promise<Object> {
    const data = await this.authenticateUserService.execute({ wallet_address, password });

    return data;
  }
}