import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put
} from '@nestjs/common';
import { User } from './users.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAll() {
    return await this.usersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    try {
      const user = await this.usersService.findOne(id);
      return user;
    } catch (error) {
      throw new NotFoundException();
    }
  }

  @Post()
  async create(@Body() user: User) {
    try {
      await this.usersService.create(user);
      return 'user created succcefully';
    } catch (error) {
      throw new NotFoundException();
    }
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() user: User) {
    try {
      await this.usersService.update(id, user);
      return 'user updated succcefully';
    } catch (error) {
      throw new NotFoundException();
    }
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    try {
      await this.usersService.remove(id);
      return 'user deleted succcefully';
    } catch (error) {
      throw new NotFoundException();
    }
  }
}
