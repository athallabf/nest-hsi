import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { MenuItem } from './menu-item.entity';

@Entity()
export class Menu {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ nullable: true })
  description?: string;

  @OneToMany(() => MenuItem, (menuItem: MenuItem) => menuItem.menu)
  items: MenuItem[];

  @Column()
  price: number;
}
