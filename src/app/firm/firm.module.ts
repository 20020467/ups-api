import { FirmService } from './firm.service';
import { FirmController } from './firm.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [FirmController],
  providers: [FirmService],
})
export class FirmModule {}
