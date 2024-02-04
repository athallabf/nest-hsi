import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Menu } from './interface/menu.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('menus')
  getMenus(): Menu[] {
    return this.appService.getMenus();
  }

  @Post('menus')
  createMenu(@Body() menu: Menu): Menu {
    return this.appService.createMenu(menu);
  }
}
