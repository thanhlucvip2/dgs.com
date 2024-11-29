import { DynamicModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSourceOptions } from 'typeorm';

export const LoadMultiDatabase = (dbs: DataSourceOptions[]) => {
  const multiDatabase: DynamicModule[] = [];
  dbs.forEach((item) => {
    const typeormModule = TypeOrmModule.forRoot(item);
    multiDatabase.push(typeormModule);
  });
  return multiDatabase;
};
