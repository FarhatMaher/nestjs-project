import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { IUsersService } from 'src/users/iusers.service';
import { IAuthService } from '../iauth.service';
import { User } from './../../users/users.entity';

@Injectable()
export class AuthService implements IAuthService {
  constructor(
    private readonly userservice: IUsersService,
    private readonly jwtService: JwtService,
  ) {}
  async ValidateUser(username: string, password: string): Promise<User> {
    const user = await this.userservice.findByUsername(username);
    if (user && user.password == password) {
      return user;
    }
    return null;
  }

  async login(user: User) {
    const payload = { sub: user.id, username: user.username };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
