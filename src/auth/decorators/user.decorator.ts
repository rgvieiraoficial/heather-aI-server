import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export interface IuserPayload {
  sub: string;
  wallet_address: string
}

export const User = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
  },
);
