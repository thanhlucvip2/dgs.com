import { Request, Response } from 'express';
import { HttpStatus } from '@nestjs/common';
import { UserEntity } from '@modules/user/user.entity';

export type Role = 0 | 1;
export type SortBy = 'ASC' | 'DESC';

export type ResponseModel<T = undefined> = T extends undefined
  ? Response
  : {
      statusCode: HttpStatus;
      success: string;
      data?: T | null;
    };
export type RequestsModel = Request & {
  user: UserEntity;
};
