import { Module } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core'
import { ZodValidationPipe } from 'nestjs-zod'

import { WebsocketsModule } from './websockets/websockets.module';

import { routes } from './routes';

@Module({
  imports: [
    ...routes,
    WebsocketsModule
  ],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ZodValidationPipe,
    }
  ],
})

export class AppModule { };