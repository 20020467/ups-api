import { Expose } from 'class-transformer';
import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsNumber,
  IsIn,
  IsArray,
} from 'class-validator';
import { KeyPrice, ProductStatus } from 'src/types';

export class CreateProductDto {
  @IsNumber()
  @IsNotEmpty()
  categoryId: number;

  @IsArray()
  @IsNotEmpty()
  url: string[];

  @IsString()
  @IsNotEmpty()
  brand: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  code: string;

  @IsString()
  @IsOptional()
  price: string;

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

  @IsArray()
  @IsNotEmpty()
  url: string[];

  @IsString()
  @IsOptional()
  brand: string;

  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  code: string;

  @IsString()
  @IsOptional()
  price: string;

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

export interface ISearchProduct {
  categoryId?: number | null;
  keyword?: string | null;
  price?: KeyPrice | null;
  take?: number | null;
  skip?: number | null;
  pageIndex: number | null;
  pageSize: number | null;
}
