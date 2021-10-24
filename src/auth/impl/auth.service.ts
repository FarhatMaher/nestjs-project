import { Injectable } from '@nestjs/common';
import { IUsersService } from 'src/users/iusers.service';
import { IAuthService } from '../iauth.service';
import { User } from './../../users/users.entity';

@Injectable()
export class AuthService implements IAuthService {
  constructor(private readonly userservice: IUsersService) {}
  async ValidateUser(username: string, password: string): Promise<User> {
    const user = await this.userservice.findByUsername(username);
    if (user && user.password == password) {
      return user;
    }
    
    
    return null;
  }
}
