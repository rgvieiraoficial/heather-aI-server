import { Module } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core'
import { ZodValidationPipe } from 'nestjs-zod'

import { modules } from './modules';

@Module({
  imports: modules,
  providers: [
    {
      provide: APP_PIPE,
      useClass: ZodValidationPipe,
    },
  ],
})

export class AppModule { };