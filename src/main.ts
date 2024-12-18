import { NestFactory } from '@nestjs/core';

import { PORT } from '@configs/app.config';
import { Logger, ValidationPipe } from '@nestjs/common';
import { setupSwagger } from '@configs/swagger.config';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

  // Enable CORS
  app.enableCors();

  // Setup swagger
  setupSwagger(app);

  await app.listen(PORT ?? 5000);
  Logger.log(`http://localhost:${PORT}/api`);
  Logger.log(`http://localhost:${PORT}/swagger`);
}
bootstrap();
