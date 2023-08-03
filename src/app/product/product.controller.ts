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
  UploadedFiles,
} from '@nestjs/common';
import { ProductService } from './product.service';
import {
  CreateProductDto,
  ISearchProduct,
  UpdateProductDto,
} from './product.dto';
import { assignPagingProduct } from 'libs/helpers/utils';
import { Express } from '../../types/Express';
@Controller('/product')
export class ProductController {
  constructor(private readonly ProductService: ProductService) {}

  @Post('/createProduct')
  async createProduct(@Body() body: CreateProductDto) {
    return this.ProductService.createProduct(body);
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

  // @Post('/upload')
  // async uploadImage(@UploadedFiles files: Array<Express.Multer.File>) {

  // }
}
