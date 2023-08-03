/*
https://docs.nestjs.com/providers#services
*/

import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Users } from 'src/database/entities/user.entity';
import { Repository } from 'typeorm';
import { LoginDto } from './login.dto';
import { ErrorCode } from 'src/types';

@Injectable()
export class UserService {
  constructor(
    private jwtService: JwtService,
    @InjectRepository(Users) private userRepository: Repository<Users>,
  ) {}

  async login({ email, password }: LoginDto) {
    const user = await this.userRepository.findOne({
      where: {
        email: email,
      },
      select: ['id', 'password', 'refreshToken'],
    });

    if (!user) {
      throw new BadRequestException(ErrorCode.Email_Not_exist);
    }

    const validatePassword = await bcrypt.compare(password, user.password);
    if (!validatePassword) {
      throw new BadRequestException(ErrorCode.Password_Not_True);
    }

    const payload = {
      id: user.id,
    };
  }

  async generateToken(payload: any) {}
}
