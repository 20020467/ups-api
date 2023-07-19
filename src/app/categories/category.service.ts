/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/database/entities/category.entity';
import { Repository } from 'typeorm';
import { CreateCategoryDto, UpdateCategoryDto } from './category.dto';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  async createCategory(body: CreateCategoryDto) {
    return await this.categoryRepository.save(body);
  }

  async updateCategory(body: UpdateCategoryDto, categoryId: number) {
    return await this.categoryRepository.update(categoryId, body);
  }

  async deleteCategory() {}
}
