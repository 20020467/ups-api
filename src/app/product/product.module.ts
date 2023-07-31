import { ProductService } from './product.service';
import { ProductController } from './product.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from 'src/database/entities/product.entity';
import { ProductImage } from 'src/database/entities/productImage.entity';
import { Category } from 'src/database/entities/category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product, ProductImage, Category])],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
