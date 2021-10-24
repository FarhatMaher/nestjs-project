import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { IAuthService } from '../iauth.service';
import { User } from './../../users/users.entity';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: IAuthService) {
    super();
  }
  async validate(username: string, password: string): Promise<User> {
    const user = await this.authService.ValidateUser(username, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
