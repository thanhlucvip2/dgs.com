import { Module } from '@nestjs/common';
import { CommandModule } from 'nestjs-command';

import { UserModule } from '@modules/user/user.module';
import { DatabaseModule } from '@database/database.module';
import { AuthModule } from '@modules/auth/auth.module';

import { CryptoKeyCommand } from './crypto-key.command';
import { CreateUserCommand } from './create-user-data.command';

@Module({
  imports: [CommandModule, DatabaseModule, UserModule, AuthModule],
  providers: [CryptoKeyCommand, CreateUserCommand],
})
export class AppCommandModule {}
