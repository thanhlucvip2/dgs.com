import { NestFactory } from "@nestjs/core";

import { PORT } from "@config/app.config";
import { Logger } from "@nestjs/common";
import { setupSwagger } from "@config/swagger.config";

import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS
  app.enableCors();

  // Setup swagger
  setupSwagger(app);

  await app.listen(PORT ?? 5000);
  Logger.log(`http://localhost:${PORT}/api`);
}
bootstrap();
