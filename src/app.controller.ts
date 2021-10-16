import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { usersService } from './users/users.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly userService: usersService,
  ) {}

  @Get('world')
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('users')
  getUsers(): any[] {
    return this.userService.findAll();
  }
  @Post('post')
  create(): string {
    return "hey i'm a post";
  }
}
