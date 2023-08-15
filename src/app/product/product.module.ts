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
import { S3UploadModule } from '@app/s3-upload';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { IConfig } from 'src/config';

@Module({
  imports: [
    TypeOrmModule.forFeature([Product, ProductImage, Category]),
    S3UploadModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService<IConfig, true>) => ({
        ...configService.get('upload'),
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
