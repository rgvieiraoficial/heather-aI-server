import { HttpException, Inject, Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { hash } from 'bcryptjs';

import { IUsersRepository } from '../../repositories/IUsersRepository';

interface IRequest {
  nickname: string;
  wallet_address: string;
  account_type: string;
  password: string;
}

@Injectable()
export class CreateUserService {
  constructor(
    @Inject('UsersRepository')
    private readonly usersRepository: IUsersRepository
  ) { }

  async execute({ nickname, wallet_address, account_type, password }: IRequest): Promise<User> {

    const userAlreadyExists = await this.usersRepository.findByNickname(nickname);

    const walletAlreadyExists = await this.usersRepository.findByWalletAddress(wallet_address);

    if (userAlreadyExists || walletAlreadyExists) {
      throw new HttpException('User already exists!', 400);
    }

    const passwordHash = await hash(password, 8);

    const data = {
      nickname,
      wallet_address,
      account_type,
      password: passwordHash
    };

    const user = await this.usersRepository.create(data);

    return user;;
  }
}