import { createZodDto } from 'nestjs-zod'
import { z } from 'zod';

const schema = z.object({
  nickname: z.string(),
  wallet_address: z.string(),
  account_type: z.string(),
  password: z.string().min(8),
});

export class CreateUserDto extends createZodDto(schema) { }