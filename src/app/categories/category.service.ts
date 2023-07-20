/*
https://docs.nestjs.com/providers#services
*/

import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/database/entities/category.entity';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from './category.dto';
import { ErrorCode, IUpdateCategory } from 'src/types';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  async checkParentCategory(id: number) {
    const categoryParent = await this.categoryRepository
      .createQueryBuilder('c')
      .where('c.id = :id', {
        id,
      })
      .getOne();
    if (!categoryParent) {
      throw new BadRequestException(ErrorCode.Category_Parent_Not_Exist);
    }
  }

  async createCategory(body: CreateCategoryDto) {
    const { name, categoryParentId } = body;

    const categoryName = await this.categoryRepository
      .createQueryBuilder('c')
      .where('c.name = :name', {
        name,
      })
      .getOne();
    if (categoryName) {
      throw new BadRequestException(ErrorCode.Category_Name_Exist);
    }

    if (categoryParentId) {
      await this.checkParentCategory(categoryParentId);
    }

    return await this.categoryRepository.save(body);
  }

  async updateCategory(body: IUpdateCategory, categoryId: number) {
    const category = await this.categoryRepository.findOne({
      where: {
        id: categoryId,
      },
    });

    if (!category) {
      throw new BadRequestException(ErrorCode.Category_Not_Exist);
    }

    if (body.categoryParentId) {
      await this.checkParentCategory(body.categoryParentId);
    }
    return await this.categoryRepository.update(categoryId, body);
  }

  async getAllCategory() {
    const result = await this.categoryRepository
      .createQueryBuilder('c')
      .where('c.categoryParentId IS NULL')
      .leftJoinAndMapMany(
        'c.categoryChild',
        Category,
        'cateChild1',
        'cateChild1.categoryParentId = c.id',
      )
      .leftJoinAndMapMany(
        'cateChild1.categoryChild',
        Category,
        'cateChild2',
        'cateChild2.categoryParentId = cateChild1.id',
      )
      .getMany();

    return result;
  }

  async deleteCategory() {}
}
