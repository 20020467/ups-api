/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { InfoProductService } from './infoproduct.service';
import { InfoProductController } from './infoproduct.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InfoProduct } from 'src/database/entities/infoProduct';

@Module({
  imports: [TypeOrmModule.forFeature([InfoProduct])],
  controllers: [InfoProductController],
  providers: [InfoProductService],
})
export class InfoProductModule {}
