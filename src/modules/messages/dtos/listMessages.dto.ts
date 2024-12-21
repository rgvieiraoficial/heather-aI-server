import { createZodDto } from 'nestjs-zod'
import { z } from 'zod';
import { MessagesRole } from '@prisma/client';

const schema = z.object({
  chat_id: z.string()
});

export class ListMessagesDto extends createZodDto(schema) { }