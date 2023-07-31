/*
https://docs.nestjs.com/controllers#controllers
*/

import {
  Controller,
  Get,
  Post,
  Put,
  Body,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { InfoProductService } from './infoproduct.service';
import { CreateInfoProductDto, UpdateInfoProductDto } from './infoProduct.dto';
import { plainToClass } from 'class-transformer';
import { filterData } from 'libs/helpers/helpers';

@Controller('/info')
export class InfoProductController {
  constructor(private readonly infoProductService: InfoProductService) {}

  @Post('/create/:productId')
  async createInfoProduct(
    @Body() body: CreateInfoProductDto,
    @Param('productId', ParseIntPipe) productId: number,
  ) {
    const realBody = plainToClass(CreateInfoProductDto, body, {
      excludeExtraneousValues: true,
    });
    return this.infoProductService.createInfoProduct(realBody, productId);
  }

  @Put('/update/:InfoProductId')
  async updateInfoProduct(
    @Body() body: UpdateInfoProductDto,
    @Param('InfoProductId', ParseIntPipe) InfoProductId: number,
  ) {
    const bodyDto = plainToClass(UpdateInfoProductDto, body, {
      excludeExtraneousValues: true,
    });
    const realBody = filterData(bodyDto);

    return this.infoProductService.updateInfoProduct(realBody, InfoProductId);
  }
}
