import { createZodDto } from 'nestjs-zod'
import { z } from 'zod';
import { MessagesRole } from '@prisma/client';

const schema = z.object({
  role: z.nativeEnum(MessagesRole),
  content: z.string(),
  chat_id: z.string()
});

export class CreateMessageDto extends createZodDto(schema) { }