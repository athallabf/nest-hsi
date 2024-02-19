import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { SchoolService } from './school.service';

@Controller('school')
export class SchoolController {
  constructor(private readonly schoolService: SchoolService) {}

  @Post('students')
  async createStudent(@Body() createStudentDto: CreateStudentDto) {
    return this.schoolService.createStudent(createStudentDto);
  }

  @Post('classes')
  async createClass(@Body('className') className: string) {
    return this.schoolService.createClass(className);
  }

  @Get('students')
  async getAllStudents() {
    try {
      return this.schoolService.getAllStudents();
    } catch (error) {
      throw error;
    }
  }
  @Get('classes')
  async getAllClasses() {
    try {
      return this.schoolService.getAllClasses();
    } catch (error) {
      throw error;
    }
  }

  @Patch('students/:id')
  async updateStudent(@Param('id') id: string, @Body() data: UpdateStudentDto) {
    return this.schoolService.updateStudent(+id, data);
  }

  @Delete('students/:id')
  async deleteStudent(@Param('id') id: string) {
    await this.schoolService.deleteStudent(+id);
    return {
      message: 'Student deleted successfully',
    };
  }

  @Get('students/:name')
  async getStudentByName(@Param('name') name: string) {
    return this.schoolService.findStudentByName(name);
  }

  @Get('classes/:className')
  async getClassByName(@Param('className') className: string) {
    return this.schoolService.getClass(className);
  }
}
