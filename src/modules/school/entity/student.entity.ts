import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ClassStudent } from './class.entity';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @ManyToOne(
    () => ClassStudent,
    (classStudent: ClassStudent) => classStudent.students,
  )
  class: ClassStudent;
}
