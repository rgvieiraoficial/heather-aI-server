import { createZodDto } from 'nestjs-zod'
import { z } from 'zod';
import { TransactionType, TransactionStatus } from '@prisma/client';

const schema = z.object({
  destination_wallet_address: z.string(),
  transaction_type: z.nativeEnum(TransactionType),
  amount: z.number(),
  currency: z.string(),
  status: z.nativeEnum(TransactionStatus),
});

export class CreateTransactionDto extends createZodDto(schema) { }