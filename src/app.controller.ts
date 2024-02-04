import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Menu } from './interface/menu.interface';

@Controller('menus')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getMenus(): Menu[] {
    return this.appService.getMenus();
  }

  @Post()
  createMenu(@Body() menu: Menu): Menu {
    return this.appService.createMenu(menu);
  }

  @Delete(':id')
  deleteMenu(@Param('id') id: number): Menu | string {
    return this.appService.deleteMenu(id);
  }

  @Put(':id')
  updateMenu(
    @Param('id') id: number,
    @Body() updatedMenu: Partial<Menu>,
  ): Menu | string {
    return this.appService.updateMenu(id, updatedMenu);
  }
}
