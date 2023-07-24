/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { InfoProductService } from './infoproduct.service';
import { InfoProductController } from './infoproduct.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InfoProduct } from 'src/database/entities/infoProduct';
import { Product } from 'src/database/entities/product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([InfoProduct, Product])],
  controllers: [InfoProductController],
  providers: [InfoProductService],
})
export class InfoProductModule {}
