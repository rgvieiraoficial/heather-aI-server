import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const port = Number(process.env.PORT) || 3334;
  await app.listen(port);
  console.log(`HTTP server listening on port ${port}`);
}

bootstrap();
