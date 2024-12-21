import { createZodDto } from 'nestjs-zod'
import { z } from 'zod';

const schema = z.object({
  title: z.string()
});

export class CreateChatDto extends createZodDto(schema) { }