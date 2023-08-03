/*
https://docs.nestjs.com/providers#services
*/

import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/database/entities/product.entity';
import { Repository } from 'typeorm';
import {
  CreateProductDto,
  ISearchProduct,
  UpdateProductDto,
} from './product.dto';
import { ProductImage } from 'src/database/entities/productImage.entity';
import { Category } from 'src/database/entities/category.entity';
import { ErrorCode, KeyPrice } from 'src/types';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
    @InjectRepository(ProductImage)
    private productImageRepository: Repository<ProductImage>,
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  async createProduct(body: CreateProductDto) {
    // check danh muc sp
    await this.checkCategory(body.categoryId);
    // check code
    await this.checkCodeProduct(body.code);

    return await this.productRepository.save(body);
  }

  async updateProduct(body: UpdateProductDto, productId: number) {
    const product = await this.productRepository.findOne({
      where: {
        id: productId,
      },
    });

    if (!product) {
      throw new BadRequestException(ErrorCode.Product_Not_Exist);
    }

    if (body.categoryId) {
      await this.checkCategory(body.categoryId);
    }

    if (body.code) {
      await this.checkCodeProduct(body.code);
    }

    return await this.productRepository.update(productId, body);
  }

  async search(body: ISearchProduct) {
    const { take, skip, categoryId, keyword, price } = body;
    const queryBuilder = this.productRepository
      .createQueryBuilder('p')
      .leftJoinAndMapMany(
        'p.images',
        ProductImage,
        'pImage',
        'pImage.productId = p.id',
      )
      .take(take)
      .skip(skip);

    if (categoryId) {
      queryBuilder.andWhere('p.categoryId = :categoryId', {
        categoryId: categoryId,
      });
    }

    if (keyword) {
      queryBuilder.andWhere('LOWER(p.name) LIKE :keyword', {
        keyword: `%${keyword.toLowerCase()}%`,
      });
    }

    if (price === KeyPrice.CONTACT) {
      queryBuilder.andWhere('p.price IS NULL');
    }

    if (price === KeyPrice.ASC) {
      queryBuilder.andWhere('p.price IS NOT NULL').orderBy('p.price', 'ASC');
    }

    if (price === KeyPrice.DESC) {
      queryBuilder.andWhere('p.price IS NOT NULL').orderBy('p.price', 'DESC');
    }

    const result = await queryBuilder.addOrderBy('p.name', 'ASC').getMany();

    return result;
  }

  async uploadS3() {}

  async checkCategory(categoryId: number) {
    const category = await this.categoryRepository.findOne({
      where: { id: categoryId },
    });

    if (!category) {
      throw new BadRequestException(ErrorCode.Category_Not_Exist);
    }
  }

  async checkCodeProduct(code: string) {
    const product = await this.productRepository.findOne({
      where: { code: code },
    });

    if (product) {
      throw new BadRequestException(ErrorCode.Code_Product_Already_Exist);
    }
  }
}
