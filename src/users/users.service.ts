import { Injectable } from '@nestjs/common';

@Injectable()
export class usersService {
  users: any[] = [
    { id: 1, name: 'Andrew' },
    { id: 2, name: 'Maher' },
  ];

  findAll(): any[] {
    return this.users;
  }
}
