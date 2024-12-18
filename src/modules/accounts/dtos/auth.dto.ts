import { createZodDto } from 'nestjs-zod'
import { z } from 'zod';

const schema = z.object({
  wallet_address: z.string(),
  password: z.string(),
});

export class AuthDto extends createZodDto(schema) { }