import { UserService } from './user.service';
import { UserController } from './user.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from 'src/database/entities/user.entity';
import { JwtAuthenticationModule } from '@app/jwt-authentication';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { IConfig, IConfigAuth } from 'src/config';

@Module({
  imports: [
    TypeOrmModule.forFeature([Users]),
    JwtAuthenticationModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService<IConfig, true>) => {
        return {
          ...configService.get<IConfigAuth>('auth'),
        };
      },
      inject: [ConfigService],
    }),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
