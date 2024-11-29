import { NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

export class NoXPoweredByMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    res.removeHeader('X-Powered-By');
    next();
  }
}
