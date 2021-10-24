import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IUsersService } from 'src/users/iusers.service';
import { UsersController } from './users.controller';
import { User } from './users.entity';
import { UsersService } from './users.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [{ provide: IUsersService, useClass: UsersService }],
  exports: [IUsersService],
})
export class UsersModule {}
