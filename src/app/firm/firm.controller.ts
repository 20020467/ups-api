/*
https://docs.nestjs.com/controllers#controllers
*/

import {
  Request,
  Body,
  Param,
  Controller,
  Patch,
  Post,
  ParseIntPipe,
} from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { FirmService } from './firm.service';
import { CreateFirmDto, UpdateFirmDto } from './firm.dto';

@Controller('/firm')
export class FirmController {
  constructor(private readonly firmService: FirmService) {}

  @Post('/create')
  async createCategory(@Body() body: CreateFirmDto) {
    const realBody = plainToClass(CreateFirmDto, body, {
      excludeExtraneousValues: true,
    });
    return this.firmService.createFirm(realBody);
  }

  @Patch('/update/:firmId')
  async updateCategory(
    @Body() body: UpdateFirmDto,
    @Param('firmId', ParseIntPipe) firmId: number,
  ) {
    const realBody = plainToClass(UpdateFirmDto, body, {
      excludeExtraneousValues: true,
    });
    return this.firmService.updateFirm(realBody, firmId);
  }
}
