import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';

import { CreateUserService } from './createUser.service';

interface IRequest {
  nickname: string;
  wallet_address: string;
  account_type: string;
  password: string;
}

@Controller()
export class CreateUserController {
  constructor(private createUserService: CreateUserService) { }

  @HttpCode(HttpStatus.CREATED)
  @Post()
  async handle(@Body() { nickname, wallet_address, account_type, password }: IRequest): Promise<Object> {
    const data = await this.createUserService.execute({
      nickname,
      wallet_address,
      account_type,
      password
    });

    return data;
  }
}