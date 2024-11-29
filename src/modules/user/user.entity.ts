import { BaseEntity } from '@utils/base-entity';
import { ROLE } from '@utils/enums';
import { Role } from '@utils/types';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity('user')
export class UserEntity extends BaseEntity {
  @Column({ type: 'varchar' })
  email: string;

  @Column({ type: 'varchar' })
  password: string;

  @Column({ type: 'varchar' })
  full_name: string;

  @Column({ type: 'int', default: ROLE.USER.VALUE })
  role: Role;
}
