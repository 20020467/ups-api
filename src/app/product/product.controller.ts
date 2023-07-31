/*
https://docs.nestjs.com/controllers#controllers
*/

import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ParseIntPipe,
  Put,
  BadRequestException,
} from '@nestjs/common';
import { ProductService } from './product.service';
import {
  CreateProductDto,
  ISearchProduct,
  UpdateProductDto,
} from './product.dto';
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

  @Put('/updateProduct/:productId')
  async updateProduct(
    @Body() body: UpdateProductDto,
    @Param('productId', ParseIntPipe) productId: number,
  ) {
    return this.ProductService.updateProduct(body, productId);
  }

  @Post('/search')
  async search(@Body() body: ISearchProduct) {
    assignPagingProduct(body);
    return this.ProductService.search(body);
  }
}
