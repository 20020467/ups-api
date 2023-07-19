import { UserRole } from '../../../src/types';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class Users {
  @PrimaryGeneratedColumn({ name: 'id', type: 'bigint', unsigned: true })
  id: number;

  @Column({
    name: 'username',
    type: 'varchar',
    length: 100,
    unique: true,
    nullable: false,
  })
  username: string;

  @Column({ name: 'password', select: false, type: 'varchar', nullable: false })
  password: string;

  @Column({
    name: 'email',
    type: 'varchar',
    unique: true,
    length: '255',
    nullable: true,
  })
  email: string;

  @Column({
    name: 'role',
    type: 'tinyint',
    unsigned: true,
    nullable: true,
  })
  role: UserRole;

  @Column({
    name: 'refresh_token',
    type: 'text',
    nullable: true,
    select: true,
  })
  refreshToken: string | null;
}
