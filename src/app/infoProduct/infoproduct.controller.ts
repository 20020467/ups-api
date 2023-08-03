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
import { filterData } from 'libs/helpers/helpers';

@Controller('/info')
export class InfoProductController {
  constructor(private readonly infoProductService: InfoProductService) {}

  @Post('/create/:productId')
  async createInfoProduct(
    @Body() body: CreateInfoProductDto,
    @Param('productId', ParseIntPipe) productId: number,
  ) {
    return this.infoProductService.createInfoProduct(body, productId);
  }

  @Put('/update/:InfoProductId')
  async updateInfoProduct(
    @Body() body: UpdateInfoProductDto,
    @Param('InfoProductId', ParseIntPipe) InfoProductId: number,
  ) {
    const realBody = filterData(body);

    return this.infoProductService.updateInfoProduct(realBody, InfoProductId);
  }
}
