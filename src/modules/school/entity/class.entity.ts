import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Student } from './student.entity';

@Entity()
export class ClassStudent {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  className: string;

  @OneToMany(() => Student, (student: Student) => student.class)
  students: Student[];
}
