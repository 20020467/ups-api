/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Post, Get, Patch, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { LoginDto } from './login.dto';

@Controller()
export class UserController {
  constructor(private readonly UserService: UserService) {}

  @Post()
  async register() {}

  @Post('/login')
  async login(@Body() body: LoginDto) {
    return this.UserService.login(body);
  }

  @Get()
  async getProfile() {}

  @Post()
  async forgotPassword() {}

  @Patch()
  async changePassword() {}
}
