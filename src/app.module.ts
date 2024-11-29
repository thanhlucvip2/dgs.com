import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AutomapperModule } from '@automapper/nestjs';
import { classes } from '@automapper/classes';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';

import { NoXPoweredByMiddleware } from '@middlewares/no-x-powered-by.middleware';
import { DatabaseModule } from '@database/database.module';
import { AuthModule } from '@modules/auth/auth.module';
import { UserModule } from '@modules/user/user.module';
import { THROTTLER_LIMIT, THROTTLER_TTL } from '@utils/constants';

@Module({
  imports: [
    AutomapperModule.forRoot({
      strategyInitializer: classes(),
    }),

    DatabaseModule,
    UserModule,
    AuthModule,

    ThrottlerModule.forRoot([
      {
        ttl: THROTTLER_TTL,
        limit: THROTTLER_LIMIT,
      },
    ]),
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(NoXPoweredByMiddleware).forRoutes('*');
  }
}
