import { UserEntity } from '@modules/user/user.entity';
import { Injectable, Logger } from '@nestjs/common';
import { Command } from 'nestjs-command';
import { UserService } from '../modules/user/user.service';
import { getDateNowTimeZone } from '@utils/date-time';
import { AuthService } from '@modules/auth/auth.service';

@Injectable()
export class CreateUserCommand {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}
  @Command({
    command: 'create-user:data',
    describe: 'Generate data user',
  })
  async handle() {
    const password = 'dgs@123456';
    const passwordHash = this.authService.hashPassword(password);
    const dataCreate: Partial<UserEntity>[] = [
      {
        created_at: getDateNowTimeZone(),
        updated_at: getDateNowTimeZone(),
        email: 'admin@dgs.com',
        password: passwordHash,
        full_name: 'admin',
        role: 0,
      },
      {
        created_at: getDateNowTimeZone(),
        updated_at: getDateNowTimeZone(),
        email: 'user@dgs.com',
        password: passwordHash,
        full_name: 'user',
        role: 1,
      },
    ];

    await this.userService.createManyData(dataCreate);

    Logger.log(
      '',
      '===============================================================',
    );
    Logger.log('Finish insert data dummy to user');
    Logger.log(`username: admin@dgs.com | password: ${password}`);
    Logger.log(`username: user@dgs.com | password: ${password}`);
    Logger.log(
      '',
      '===============================================================',
    );
  }
}
