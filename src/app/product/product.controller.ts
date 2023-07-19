/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get, Post, Body, Patch } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto, UpdateProductDto } from './product.dto';
import { assignPagingProduct } from 'libs/helpers/utils';

@Controller('/product')
export class ProductController {
  constructor(private readonly ProductService: ProductService) {}

  @Post('/createProduct')
  async createProduct(@Body() body: CreateProductDto) {
    return this.ProductService.createProduct(body);
  }

  @Patch('/updateProduct')
  async updateProduct(@Body() body: UpdateProductDto) {
    return this.ProductService.updateProduct(body);
  }

  @Post('/getAll')
  async getAllProduct(@Body() body) {
    assignPagingProduct(body);
    return this.ProductService.getAllProduct(body);
  }
}
