import { Body, Controller, HttpCode, HttpStatus, Header, Post } from '@nestjs/common';

import { CreateUserService } from './createUser.service';

import { CreateUserDto } from '../../dtos/createUser.dto';

@Controller()
export class CreateUserController {
  constructor(private createUserService: CreateUserService) { }

  @HttpCode(HttpStatus.CREATED)
  @Post()
  @Header('Content-Type', 'application/json')
  async handle(@Body() { nickname, wallet_address, account_type, password }: CreateUserDto): Promise<Object> {
    const data = await this.createUserService.execute({
      nickname,
      wallet_address,
      account_type,
      password
    });

    return data;
  }
}