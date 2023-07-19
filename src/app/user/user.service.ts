/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private jwtService: JwtService) {}

  async login() {
    const password = '123456';
    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const newPassword = await bcrypt.hash(password, salt);
    return newPassword;
  }
}
