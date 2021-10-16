import { Module } from '@nestjs/common';
import { usersService } from './users.service';

@Module({
  imports: [],
  controllers: [],
  providers: [usersService],
  exports: [usersService],
})
export class UsersModule {}
