import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { NoXPoweredByMiddleware } from '@middlewares/no-x-powered-by.middleware';
import { DatabaseModule } from '@database/database.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';


@Module({
  imports: [DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer){
    consumer.apply(NoXPoweredByMiddleware).forRoutes("*")
  }
}
