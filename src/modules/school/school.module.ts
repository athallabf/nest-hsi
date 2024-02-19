import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClassStudent } from './entity/class.entity';
import { Student } from './entity/student.entity';
import { SchoolController } from './school.controller';
import { SchoolService } from './school.service';

@Module({
  imports: [TypeOrmModule.forFeature([Student, ClassStudent])],
  providers: [SchoolService],
  controllers: [SchoolController],
})
export class SchoolModule {}
