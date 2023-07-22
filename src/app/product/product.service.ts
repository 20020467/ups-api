/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/database/entities/product.entity';
import { Repository } from 'typeorm';
import { CreateProductDto, UpdateProductDto } from './product.dto';
import { ProductImage } from 'src/database/entities/productImage';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
    @InjectRepository(ProductImage)
    private productImageRepository: Repository<ProductImage>,
  ) {}

  async createProduct(body: CreateProductDto) {
    // check danh muc sp
    return await this.productRepository.save(body);
  }

  async updateProduct(body: UpdateProductDto) {}

  async search(params) {
    return params;
  }
}
