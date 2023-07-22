/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get, Post, Body, Patch } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto, UpdateProductDto } from './product.dto';
import { assignPagingProduct } from 'libs/helpers/utils';
import { plainToClass } from 'class-transformer';

@Controller('/product')
export class ProductController {
  constructor(private readonly ProductService: ProductService) {}

  @Post('/createProduct')
  async createProduct(@Body() body: CreateProductDto) {
    const realBody = plainToClass(CreateProductDto, body, {
      excludeExtraneousValues: true,
    });
    return this.ProductService.createProduct(realBody);
  }

  @Patch('/updateProduct')
  async updateProduct(@Body() body: UpdateProductDto) {
    return this.ProductService.updateProduct(body);
  }

  @Post('/search')
  async search(@Body() body) {
    assignPagingProduct(body);
    return this.ProductService.search(body);
  }
}
