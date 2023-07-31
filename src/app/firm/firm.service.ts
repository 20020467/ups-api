/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Firm } from 'src/database/entities/firm.entity';
import { Repository } from 'typeorm';
import { CreateFirmDto, UpdateFirmDto } from './firm.dto';

@Injectable()
export class FirmService {
  constructor(
    @InjectRepository(Firm)
    private firmRepository: Repository<Firm>,
  ) {}

  async createFirm(body: CreateFirmDto) {
    return await this.firmRepository.save(body);
  }

  async updateFirm(body: UpdateFirmDto, firmId: number) {
    return await this.firmRepository.update(firmId, body);
  }

  async deleteFirm() {}
}
