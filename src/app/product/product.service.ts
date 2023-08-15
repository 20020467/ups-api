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
import { InfoProduct } from 'src/database/entities/infoProduct.entity';
import { S3UploadService } from '@app/s3-upload';
import { Express } from '../../types/Express';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
    @InjectRepository(ProductImage)
    private productImageRepository: Repository<ProductImage>,
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
    private s3UploadServie: S3UploadService,
  ) {}

  async createProduct(body: CreateProductDto) {
    const { url } = body;

    // check danh muc sp
    await this.checkCategory(body.categoryId);
    // check code
    await this.checkCodeProduct(body.code);

    delete body['url'];
    const product = await this.productRepository.save(body);

    if (url) {
      const saveUrl = url.map((item) => {
        this.productImageRepository.save({
          productId: product.id,
          url: item,
        });
      });
      await Promise.all(saveUrl);
    }
    return product.id;
  }

  async getProductById(productId: number) {
    const result = await this.productRepository
      .createQueryBuilder('p')
      .leftJoinAndMapMany(
        'p.images',
        ProductImage,
        'pImage',
        'pImage.productId = p.id',
      )
      .leftJoinAndMapMany(
        'p.info',
        InfoProduct,
        'pInfo',
        'pInfo.productId = p.id',
      )
      .where('p.id = :productId', { productId: productId })
      .getOne();

    return result;
  }

  async updateProduct(body: UpdateProductDto, productId: number) {
    const { categoryId, code, url } = body;
    const product = await this.productRepository.findOne({
      where: {
        id: productId,
      },
    });

    if (!product) {
      throw new BadRequestException(ErrorCode.Product_Not_Exist);
    }

    if (categoryId) {
      await this.checkCategory(categoryId);
    }

    if (code) {
      await this.checkCodeProduct(code);
    }

    if (url) {
      const oldUrl = ['1', '2'];
      const deleteUrl = oldUrl.filter((item) => !url.includes(item));
      const addUrl = url.filter((item) => !oldUrl.includes(item));
    }
    delete body['url'];

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
      .leftJoinAndMapMany(
        'p.info',
        InfoProduct,
        'pInfo',
        'pInfo.productId = p.id',
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

  async uploadS3(image: Express.Multer.File, fileName: string) {
    return this.s3UploadServie.putImageToS3(image, fileName);
  }

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
