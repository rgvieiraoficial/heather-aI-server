import { Injectable } from '@nestjs/common';
import { User, Prisma } from '@prisma/client';

import { IUsersRepository } from '../IUsersRepository';

import { PrismaService } from '../../../../lib/prisma/prisma.service';

@Injectable()
class UsersRepository implements IUsersRepository {

  constructor(private readonly prisma: PrismaService) { }

  async create({ nickname, wallet_address, account_type, password }: Prisma.UserCreateInput) {
    const user = await this.prisma.user.create({
      data: {
        nickname,
        wallet_address,
        account_type,
        password
      }
    });

    return user;
  }

  async findById(id: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({
      where: {
        id
      }
    });

    return user;
  }

  async findByNickname(nickname: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({
      where: {
        nickname
      }
    });

    return user;
  }

  async findByWalletAddress(wallet_address: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({
      where: {
        wallet_address
      }
    });

    return user;
  }

  async list(): Promise<User[] | null> {
    const users = await this.prisma.user.findMany();

    return users;
  }
}

export { UsersRepository };