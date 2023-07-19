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
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto, UpdateCategoryDto } from './category.dto';
import { plainToClass } from 'class-transformer';

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
    const realBody = plainToClass(UpdateCategoryDto, body, {
      excludeExtraneousValues: true,
    });
    return this.categoryService.updateCategory(realBody, categoryId);
  }
}
