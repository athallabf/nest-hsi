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

  deleteMenu(id: number): Menu | string {
    const indexMenu = dummyData.findIndex((menu) => menu.id === id);

    if (indexMenu === -1) {
      return 'Tidak ditemukan menu dengan id tersebut';
    }

    const result: Menu = dummyData[indexMenu];
    dummyData.slice(indexMenu, 1);
    console.log(result);
    return result;
  }

  updateMenu(id: number, updatedMenu: Partial<Menu>): Menu | string {
    const indexMenu = dummyData.findIndex((menu) => menu.id === id);

    if (indexMenu === -1) {
      return 'Gagal melakukan update atau id tidak dikenali';
    }

    dummyData[indexMenu] = { ...dummyData[indexMenu], ...updatedMenu };
    return dummyData[indexMenu];
  }
}
