import { Module } from '@nestjs/common';
import { HelloWorldEventModule } from './modules/hello/useCases/helloWorldEvent/helloWorldEvent.module';
import { RouterModule } from '@nestjs/core';

@Module({
  imports: [
    HelloWorldEventModule,
    RouterModule.register([
      { path: '/', module: HelloWorldEventModule },
    ]),
  ],
})

export class AppModule {};
