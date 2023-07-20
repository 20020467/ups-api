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
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto, UpdateCategoryDto } from './category.dto';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { filterData } from 'libs/helpers/helpers';

@Controller('/category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post('/create')
  async createCategory(@Body() body: CreateCategoryDto) {
    const realBody = plainToClass(CreateCategoryDto, body, {
      excludeExtraneousValues: true,
    });
    return this.categoryService.createCategory(realBody);
  }

  @Patch('/update/:categoryId')
  async updateCategory(
    @Body() body: UpdateCategoryDto,
    @Param('categoryId', ParseIntPipe) categoryId: number,
  ) {
    const bodyDto = plainToClass(UpdateCategoryDto, body, {
      excludeExtraneousValues: true,
    });
    const realBody = filterData(bodyDto);

    return this.categoryService.updateCategory(realBody, categoryId);
  }

  @Get('/getAllCategory')
  async getAllCategory() {
    return this.categoryService.getAllCategory();
  }
}
