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
import { Menu } from './entity/menu.entity';
@Controller('menus')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getMenus(): Promise<Menu[]> {
    return this.appService.getAllMenus();
  }

  @Post()
  createMenu(@Body() menu: Menu): Promise<Menu> {
    return this.appService.createMenu(menu);
  }

  @Delete(':id')
  deleteMenu(@Param('id') id: number): Promise<void> {
    return this.appService.deleteMenu(id);
  }

  @Put(':id')
  updateMenu(
    @Param('id') id: number,
    @Body() updatedMenu: Partial<Menu>,
  ): Promise<Menu> {
    return this.appService.updateMenu(id, updatedMenu);
  }
}
