import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { ClassStudent } from './entity/class.entity';
import { Student } from './entity/student.entity';

@Injectable()
export class SchoolService {
  constructor(
    @InjectRepository(ClassStudent)
    private readonly classRepository: Repository<ClassStudent>,
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
  ) {}

  async createClass(className: string): Promise<ClassStudent> {
    const classExist = this.classRepository.findOne({ where: { className } });

    if (classExist) {
      throw new BadRequestException('Class already exist');
    }

    const classStudent = this.classRepository.create({ className });
    const savedClass = await this.classRepository.save(classStudent);
    return savedClass;
  }

  async createStudent({
    name,
    email,
    className,
  }: CreateStudentDto): Promise<Student> {
    try {
      const foundClass = await this.classRepository.findOne({
        where: { className },
      });

      if (!foundClass) {
        throw new BadRequestException('Class not found');
      }

      const student = this.studentRepository.create({
        name,
        email,
        class: foundClass,
      });

      return await this.studentRepository.save(student);
    } catch (error) {
      throw error;
    }
  }

  async updateStudent(
    id: number,
    { name, email }: UpdateStudentDto,
  ): Promise<Student> {
    const student = await this.studentRepository.findOne({ where: { id } });
    student.name = name;
    student.email = email;
    return await this.studentRepository.save(student);
  }

  async deleteStudent(id: number) {
    await this.studentRepository.delete(id);
  }

  async getAllStudents() {
    return await this.studentRepository
      .createQueryBuilder('student')
      .leftJoinAndSelect('student.class', 'class')
      .getMany();
  }

  async getAllClasses() {
    return await this.classRepository
      .createQueryBuilder('class')
      .leftJoinAndSelect('class.students', 'student')
      .getMany();
  }

  async getClass(className: string) {
    return await this.classRepository.findOne({ where: { className } });
  }

  async findStudentByName(name: string) {
    return await this.studentRepository.findOne({ where: { name } });
  }
}
