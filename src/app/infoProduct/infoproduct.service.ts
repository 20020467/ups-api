/*
https://docs.nestjs.com/providers#services
*/

import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InfoProductDto } from './infoProduct.dto';
import { InfoProduct } from 'src/database/entities/infoProduct';
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

  async createInfoProduct(body: InfoProductDto, productId: number) {
    this.checkProduct(productId);

    return await this.infoProductRepository.save(body);
  }

  async updateInfoProduct(body: InfoProductDto, infoId: number) {
    return await this.infoProductRepository.update(infoId, body);
  }

  async checkProduct(productId: number) {
    const product = this.productRepository.findOne({
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
