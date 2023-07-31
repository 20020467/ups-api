/*
https://docs.nestjs.com/providers#services
*/

import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/database/entities/category.entity';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from './category.dto';
import { ErrorCode, IUpdateCategory, KeyCheckCategory } from 'src/types';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  async createCategory(body: CreateCategoryDto) {
    const { name, categoryParentId } = body;

    await this.checkNameCategory(name);

    if (categoryParentId) {
      await this.checkCategoryById(
        KeyCheckCategory.Parent_Category,
        categoryParentId,
      );
    }

    return await this.categoryRepository.save(body);
  }

  async updateCategory(body: IUpdateCategory, categoryId: number) {
    await this.checkCategoryById(KeyCheckCategory.Category, categoryId);

    if (body.categoryParentId) {
      await this.checkCategoryById(
        KeyCheckCategory.Parent_Category,
        body.categoryParentId,
      );
    }

    if (body.name) {
      await this.checkNameCategory(body.name);
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

  async checkCategoryById(key: KeyCheckCategory, id: number) {
    const category = await this.categoryRepository.findOne({
      where: {
        id: id,
      },
    });
    if (!category) {
      if (key === KeyCheckCategory.Parent_Category) {
        throw new BadRequestException(ErrorCode.Category_Parent_Not_Exist);
      }

      if (key === KeyCheckCategory.Category) {
        throw new BadRequestException(ErrorCode.Category_Not_Exist);
      }
    }
  }

  async checkNameCategory(name: string) {
    const category = await this.categoryRepository.findOne({
      where: {
        name: name,
      },
    });

    if (category) {
      throw new BadRequestException(ErrorCode.Category_Name_Exist);
    }
  }
}
