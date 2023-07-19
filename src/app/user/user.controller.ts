/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Post, Get, Patch } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('/user')
export class UserController {
  constructor(private readonly UserService: UserService) {}

  @Post()
  async register() {}

  @Post('/login')
  async login() {
    return this.UserService.login();
  }

  @Get()
  async getProfile() {}

  @Post()
  async forgotPassword() {}

  @Patch()
  async changePassword() {}
}
