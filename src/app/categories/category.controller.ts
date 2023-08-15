/*
https://docs.nestjs.com/controllers#controllers
*/

import {
  Request,
  Body,
  Param,
  Controller,
  Patch,
  Post,
  ParseIntPipe,
  Get,
  Put,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto, UpdateCategoryDto } from './category.dto';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { filterData } from 'libs/helpers/helpers';
import { KeyGetCategory } from 'src/types';
import { Public } from 'libs/decorators/public.decorator';

@Controller('/category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post('/create')
  async createCategory(@Body() body: CreateCategoryDto) {
    return this.categoryService.createCategory(body);
  }

  @Put('/update/:categoryId')
  async updateCategory(
    @Body() body: UpdateCategoryDto,
    @Param('categoryId', ParseIntPipe) categoryId: number,
  ) {
    const realBody = filterData(body);

    return this.categoryService.updateCategory(realBody, categoryId);
  }

  @Public()
  @Get('/getForSideBar')
  async getAllCateForSideBar() {
    return this.categoryService.getAllCateForSideBar();
  }

  @Get('/getForCreate')
  async getAllCateForCreate() {
    return this.categoryService.getCateForCreate();
  }

  @Get('/getForUpdate/:categoryId')
  async getAllCateForUpdate(
    @Param('categoryId', ParseIntPipe) categoryId: number,
  ) {
    return this.categoryService.getCateForUpdate(categoryId);
  }
}
