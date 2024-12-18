import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcryptjs'

import { IUsersRepository } from '../../repositories/IUsersRepository';

interface IRequest {
  wallet_address: string;
  password: string;
}

interface IResponse {
  user: {
    nickname: string,
    wallet_address: string
  },
  token: string
}

@Injectable()
export class AuthenticateUserService {
  constructor(
    private jwtService: JwtService,
    @Inject('UsersRepository')
    private readonly usersRepository: IUsersRepository
  ) { }

  async execute(
    { wallet_address, password }: IRequest
  ): Promise<IResponse> {
    if (!wallet_address) {
      throw new UnauthorizedException('Wallet Address is required');
    }

    const user = await this.usersRepository.findByWalletAddress(wallet_address);

    if (!user) {
      throw new UnauthorizedException('Wallet Address or Password incorrect!');
    }

    const passowrdMatch = await compare(password, user.password);

    if (!passowrdMatch) {
      throw new UnauthorizedException('Wallet Address or Password incorrect!');
    }

    const payload = {
      sub: user.id,
      wallet_address: user.wallet_address,
    };

    return {
      user: {
        nickname: user.nickname,
        wallet_address: user.wallet_address,
      },
      token: await this.jwtService.signAsync(payload),
    };
  }
}