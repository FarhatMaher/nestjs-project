import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
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
      throw new Error('user does not exist');
    }
    return user;
  }

  async create(user: User): Promise<void> {
    await this.userRepositry.save(user);
  }

  async update(id: number, user: User): Promise<void> {
    const userDb: User = await this.findOne(id);

    if (!userDb) {
      throw new Error('user does not exist');
    }

    userDb.username = user.username;
    userDb.password = user.password;
    await this.userRepositry.save(userDb);
  }

  async remove(id: number): Promise<void> {
    const userDb: User = await this.findOne(id);
    if (!userDb) {
      throw new Error('user does not exist');
    }
    await this.userRepositry.remove(userDb);
  }
}
