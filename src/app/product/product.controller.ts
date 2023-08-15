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
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ProductService } from './product.service';
import {
  CreateProductDto,
  ISearchProduct,
  UpdateProductDto,
} from './product.dto';
import { assignPagingProduct } from 'libs/helpers/utils';
import { Express } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';
import { Public } from 'libs/decorators/public.decorator';
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

  @Public()
  @Post('/search')
  async search(@Body() body: ISearchProduct) {
    assignPagingProduct(body);
    return this.ProductService.search(body);
  }

  @Public()
  @Post('/getProductById/:productId')
  async getProduct() {}

  @Post('/upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadImage(@UploadedFile() file: Express.Multer.File) {
    return this.ProductService.uploadS3(file, file.originalname);
  }
}
