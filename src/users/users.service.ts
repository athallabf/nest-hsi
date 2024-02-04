import { Injectable } from '@nestjs/common';
import { User } from '../interface/user.interface';
import { dummyUser } from './data/user.dummy';
@Injectable()
export class UsersService {
  getUsers(): User[] {
    return dummyUser;
  }

  createUser(user: User): User {
    user.id = Math.floor(Math.random() * 1000) + 1;

    dummyUser.push(user);
    return user;
  }

  updateUser(id: number, updatedUser: Partial<User>): User | string {
    const indexUser = dummyUser.findIndex((user) => user.id === id);

    if (indexUser === -1) {
      return 'User tidak ditemukan';
    }

    dummyUser[indexUser] = { ...dummyUser[indexUser], ...updatedUser };
    return dummyUser[indexUser];
  }

  deleteUser(id: number): User | string {
    const indexUser = dummyUser.findIndex((user) => user.id === id);

    if (indexUser === -1) {
      return 'Tidak ditemukan user dengan id tersebut';
    }

    const result: User = dummyUser[indexUser];
    dummyUser.splice(indexUser, 1);
    return result;
  }
}
