import {
  Body,
  Controller,
  Delete,
  Get,
  InternalServerErrorException,
  NotFoundException,
  Param,
  Post,
  Put,
  UseGuards
} from '@nestjs/common';
import { IUsersService } from 'src/users/iusers.service';
import { JwtAuthGuard } from './../auth/guards/jwt-auth.guard';
import { UserNotFoundException } from './exceptions/user-not-found.exception';
import { User } from './users.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: IUsersService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll() {
    return await this.usersService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: number) {
    try {
      const user = await this.usersService.findOne(id);
      return user;
    } catch (error) {
      if (error instanceof UserNotFoundException) {
        throw new NotFoundException();
      }
      throw new InternalServerErrorException();
    }
  }

  @Post()
  async create(@Body() user: User) {
    try {
      await this.usersService.create(user);
      return 'user created succcefully';
    } catch (error) {
      if (error instanceof UserNotFoundException) {
        throw new NotFoundException();
      }
      throw new InternalServerErrorException();
    }
  }
  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async update(@Param('id') id: number, @Body() user: User) {
    try {
      await this.usersService.update(id, user);
      return 'user updated succcefully';
    } catch (error) {
      if (error instanceof UserNotFoundException) {
        throw new NotFoundException();
      }
      throw new InternalServerErrorException();
    }
  }
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async delete(@Param('id') id: number) {
    try {
      await this.usersService.remove(id);
      return 'user deleted succcefully';
    } catch (error) {
      if (error instanceof UserNotFoundException) {
        throw new NotFoundException();
      }
      throw new InternalServerErrorException();
    }
  }
}
