import { Module } from '@nestjs/common';
import { DBS } from './dbs.config';
import { LoadMultiDatabase } from './load-multi.database';

const multiDatabase = LoadMultiDatabase(DBS);
@Module({
  imports: [...multiDatabase],
})
export class DatabaseModule {}
