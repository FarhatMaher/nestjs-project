import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('world')
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('post')
  create(): string {
    return "hey i'm a post";
  }
}
