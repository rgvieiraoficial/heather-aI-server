import { Module } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core'
import { ZodValidationPipe } from 'nestjs-zod'

import { routes } from './routes';

@Module({
  imports: routes,
  providers: [
    {
      provide: APP_PIPE,
      useClass: ZodValidationPipe,
    },
  ],
})

export class AppModule { };