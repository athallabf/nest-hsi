import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Menu } from './menu.entity';

@Entity()
export class MenuItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  label: string;

  @Column({ nullable: true })
  icon?: string;

  @Column({ default: true })
  disabled?: boolean;

  @ManyToOne(() => Menu, (menu: Menu) => menu.items)
  menu: Menu;
}
