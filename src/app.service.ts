import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Menu } from './entity/menu.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Menu) private readonly menuRepository: Repository<Menu>,
  ) {}

  async createMenu(menuData: Partial<Menu>): Promise<Menu> {
    const menu = this.menuRepository.create(menuData);
    return this.menuRepository.save(menu);
  }

  async getMenuById(id: number): Promise<Menu> {
    return this.menuRepository.findOne({
      where: { id },
    });
  }

  async updateMenu(id: number, menuData: Partial<Menu>): Promise<Menu> {
    await this.menuRepository.update(id, menuData);
    return this.getMenuById(id);
  }

  async deleteMenu(id: number): Promise<void> {
    await this.menuRepository.delete(id);
  }

  async getAllMenus(): Promise<Menu[]> {
    return this.menuRepository.find();
  }
}
