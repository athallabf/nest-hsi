import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entity/user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async registerUser(@Body() payload: CreateUserDto): Promise<User> {
    return this.usersService.createUser(payload);
  }

  @Get(':email')
  async findUserByEmail(@Param('email') email: string): Promise<User> {
    const user = await this.usersService.getUserByEmail(email);
    return user;
  }
}
