import { User } from './users.entity';
export abstract class IUsersService {
  /**
   * return all users
   */
  abstract findAll(): Promise<User[]>;
  /**
   * return user by id
   * @param id user id
   */

  abstract findOne(id: number): Promise<User>;

  /**
   * return user by id
   * @param id user id
   */

  abstract findByUsername(username: string): Promise<User>;
  /**
   * add new user
   * @param user user to create
   */
  abstract create(user: User): Promise<void>;

  /**
   * update user
   * @param id user to modify
   * @param user updated user
   */

  abstract update(id: number, user: User): Promise<void>;

  /**
   *  remove user
   * @param id user to remove

   */

  abstract remove(id: number): Promise<void>;
}
