/*
https://docs.nestjs.com/providers#services
*/

import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateInfoProductDto, UpdateInfoProductDto } from './infoProduct.dto';
import { InfoProduct } from 'src/database/entities/infoProduct.entity';
import { Product } from 'src/database/entities/product.entity';
import { ErrorCode } from 'src/types';

@Injectable()
export class InfoProductService {
  constructor(
    @InjectRepository(InfoProduct)
    private infoProductRepository: Repository<InfoProduct>,
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  async createInfoProduct(body: CreateInfoProductDto, productId: number) {
    await this.checkProduct(productId);

    return await this.infoProductRepository.save(body);
  }

  async updateInfoProduct(body: UpdateInfoProductDto, infoId: number) {
    if (body.productId) {
      await this.checkProduct(body.productId);
    }

    const info = await this.infoProductRepository.findOne({
      where: {
        id: infoId,
      },
    });
    if (!info) {
      throw new BadRequestException(ErrorCode.InfoProduct_Not_Exist);
    }
    return await this.infoProductRepository.update(infoId, body);
  }

  async checkProduct(productId: number) {
    const product = await this.productRepository.findOne({
      where: {
        id: productId,
      },
    });

    if (!product) {
      throw new BadRequestException(ErrorCode.Product_Not_Exist);
    }
  }

  async deleteInfoProduct() {}
}
