import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MenuItem } from './entity/menu-item.entity';
import { Menu } from './entity/menu.entity';
import { AuthModule } from './modules/auth/auth.module';
import { SchoolModule } from './modules/school/school.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: 'localhost',
      port: 3307,
      username: 'abf',
      password: '',
      database: 'nest-hsi',
      entities: [MenuItem, Menu],
      synchronize: true,
      autoLoadEntities: true,
    }),
    TypeOrmModule.forFeature([Menu, MenuItem]),
    UsersModule,
    SchoolModule,
    AuthModule,
    UsersModule,
  ],
})
export class AppModule {}
