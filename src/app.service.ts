import { Injectable } from '@nestjs/common';
import { dummyData } from './data/dummyData';
import { Menu } from './interface/menu.interface';

@Injectable()
export class AppService {
  getMenus(): Menu[] {
    return dummyData;
  }

  createMenu(menu: Menu): Menu {
    menu.id = Math.floor(Math.random() * 1000) + 1;
    dummyData.push(menu);
    return menu;
  }
}
