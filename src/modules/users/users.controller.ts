import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { User } from './interface/user.interface';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  createUser(@Body() user: User): User {
    return this.usersService.createUser(user);
  }

  @Get()
  getUsers(): User[] {
    return this.usersService.getUsers();
  }

  @Put(':id')
  updateUser(
    @Param('id') id: number,
    @Body() updatedUser: Partial<User>,
  ): User | string {
    return this.usersService.updateUser(id, updatedUser);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: number) {
    return this.usersService.deleteUser(id);
  }
}
