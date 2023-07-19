import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsNumber,
  IsIn,
} from 'class-validator';
import { ProductStatus } from 'src/types';

export class CreateProductDto {
  @IsNumber()
  @IsNotEmpty()
  categoryId: number;

  @IsNumber()
  @IsNotEmpty()
  firmId: number;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  code: string;

  @IsNumber()
  @IsOptional()
  @IsIn([ProductStatus.STOCKING, ProductStatus.OUTOFSTOCK])
  status: number;

  @IsString()
  @IsOptional()
  origin: string;

  @IsString()
  @IsOptional()
  wattage: string;

  @IsNumber()
  @IsOptional()
  guarantee: number;

  @IsString()
  @IsOptional()
  description: string;

  @IsString()
  @IsOptional()
  feature: string;
}

export class UpdateProductDto {
  @IsNumber()
  @IsOptional()
  categoryId: number;

  @IsNumber()
  @IsOptional()
  firmId: number;

  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  code: string;

  @IsNumber()
  @IsOptional()
  @IsIn([ProductStatus.STOCKING, ProductStatus.OUTOFSTOCK])
  status: number;

  @IsString()
  @IsOptional()
  origin: string;

  @IsString()
  @IsOptional()
  wattage: String;

  @IsNumber()
  @IsOptional()
  guarantee: number;

  @IsString()
  @IsOptional()
  description: string;

  @IsString()
  @IsOptional()
  feature: string;
}
