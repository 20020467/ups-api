/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InfoProduct } from 'src/database/entities/infoProduct';
import { Repository } from 'typeorm';

@Injectable()
export class InfoProductService {
  constructor(
    @InjectRepository(InfoProduct)
    private infoProductRepository: Repository<InfoProduct>,
  ) {}

  async createInfoProduct() {}

  async updateInfoProduct() {}

  async deleteInfoProduct() {}
}
