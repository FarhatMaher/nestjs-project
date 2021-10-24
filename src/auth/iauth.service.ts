import { User } from './../users/users.entity';
export abstract class IAuthService {
  /**
   * valdiate user
   */
  abstract ValidateUser(username: string, password: string): Promise<User>;

  /**
   * login user , create json web token (jwt)
   */
  abstract login(user: User): any;
}
