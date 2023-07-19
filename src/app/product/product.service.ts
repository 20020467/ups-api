/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/database/entities/product.entity';
import { Repository } from 'typeorm';
import { CreateProductDto, UpdateProductDto } from './product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async createProduct(body: CreateProductDto) {
    // check hang, danh muc sp
    return await this.productRepository.save(body);
  }

  async updateProduct(body: UpdateProductDto) {}

  async getAllProduct(params) {
    return params;
  }
}
