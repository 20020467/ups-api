import { Module } from '@nestjs/common';
import { JwtAuthenticationService } from './jwt-authentication.service';
import { ConfigurableModuleClass } from './jwt-authentication.module-definition';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from 'src/database/entities/user.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [TypeOrmModule.forFeature([Users]), JwtModule],
  providers: [JwtAuthenticationService],
  exports: [JwtAuthenticationService],
})
export class JwtAuthenticationModule extends ConfigurableModuleClass {}
