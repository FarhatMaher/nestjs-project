import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { IAuthService } from './iauth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: IAuthService) {}
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Body() authDto: AuthDto, @Request() req) {
    return this.authService.login(req.user);
  }
}
