import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserNotFoundException } from './exceptions/user-not-found.exception';
import { User } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepositry: Repository<User>,
  ) {}
  async findAll(): Promise<User[]> {
    return await this.userRepositry.find();
  }

  async findOne(id: number): Promise<User> {
    const user = await this.userRepositry.findOne(id);

    if (!user) {
      throw new UserNotFoundException();
    }
    return user;
  }

  async create(user: User): Promise<void> {
    await this.userRepositry.save(user);
  }

  async update(id: number, user: User): Promise<void> {
    const userDb: User = await this.findOne(id);

    if (!userDb) {
      throw new UserNotFoundException();
    }

    userDb.username = user.username;
    userDb.password = user.password;
    await this.userRepositry.save(userDb);
  }

  async remove(id: number): Promise<void> {
    const userDb: User = await this.findOne(id);
    if (!userDb) {
      throw new UserNotFoundException();
    }
    await this.userRepositry.remove(userDb);
  }
}
