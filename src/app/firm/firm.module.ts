import { FirmService } from './firm.service';
import { FirmController } from './firm.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Firm } from 'src/database/entities/firm';

@Module({
  imports: [TypeOrmModule.forFeature([Firm])],
  controllers: [FirmController],
  providers: [FirmService],
})
export class FirmModule {}
