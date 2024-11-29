import { DataSource } from 'typeorm';

import {
  DB_HOST,
  DB_PORT,
  DB_USER,
  DB_PASSWORD,
  DB_NAME,
  DB_LOGGING,
} from './app.config';
import { CreateUserTable1732864195618 } from 'src/migrations/1732864195618-create-user-table';

export default new DataSource({
  type: 'mysql',
  host: DB_HOST,
  port: DB_PORT,
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  logging: DB_LOGGING,
  migrations: [
    CreateUserTable1732864195618,
   ],
});
