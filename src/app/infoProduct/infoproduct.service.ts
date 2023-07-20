/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InfoProductDto } from './infoProduct.dto';
import { InfoProduct } from 'src/database/entities/infoProduct';

@Injectable()
export class InfoProductService {
  constructor(
    @InjectRepository(InfoProduct)
    private infoProductRepository: Repository<InfoProduct>,
  ) {}

  async createInfoProduct(body: InfoProductDto) {
    return await this.infoProductRepository.save(body);
  }

  async updateInfoProduct(body: InfoProductDto, infoId: number) {
    return await this.infoProductRepository.update(infoId, body);
  }

  async deleteInfoProduct() {}
}
