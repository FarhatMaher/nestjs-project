import { User } from './../users/users.entity';
export abstract class IAuthService {
  /**
   * return all users
   */
  abstract ValidateUser(username: string, password: string): Promise<User>;
}
