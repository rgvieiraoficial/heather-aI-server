import { User, Prisma } from '@prisma/client';

interface IUsersRepository {
  create({ nickname, wallet_address, account_type, password }: Prisma.UserCreateInput): Promise<User>;
  findById(id: string): Promise<User | null>;
  findByNickname(nickname: string): Promise<User | null>;
  findByWalletAddress(wallet_address: string): Promise<User | null>
  list(): Promise<User[] | null>;
}

export { IUsersRepository };