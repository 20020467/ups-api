import { Expose } from 'class-transformer';
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
  @Expose()
  categoryId: number;

  @IsString()
  @IsNotEmpty()
  @Expose()
  brand: string;

  @IsString()
  @IsNotEmpty()
  @Expose()
  name: string;

  @IsString()
  @IsNotEmpty()
  @Expose()
  code: string;

  @IsString()
  @IsOptional()
  @Expose()
  price: string;

  @IsNumber()
  @IsOptional()
  @Expose()
  @IsIn([ProductStatus.STOCKING, ProductStatus.OUTOFSTOCK])
  status: number;

  @IsString()
  @IsOptional()
  @Expose()
  origin: string;

  @IsString()
  @IsOptional()
  @Expose()
  wattage: string;

  @IsNumber()
  @IsOptional()
  @Expose()
  guarantee: number;

  @IsString()
  @IsOptional()
  @Expose()
  description: string;

  @IsString()
  @IsOptional()
  @Expose()
  feature: string;
}

export class UpdateProductDto {
  @IsNumber()
  @IsOptional()
  @Expose()
  categoryId: number;

  @IsString()
  @IsOptional()
  @Expose()
  brand: string;

  @IsString()
  @IsOptional()
  @Expose()
  name: string;

  @IsString()
  @IsOptional()
  @Expose()
  code: string;

  @IsString()
  @IsOptional()
  @Expose()
  price: string;

  @IsNumber()
  @IsOptional()
  @Expose()
  @IsIn([ProductStatus.STOCKING, ProductStatus.OUTOFSTOCK])
  status: number;

  @IsString()
  @IsOptional()
  @Expose()
  origin: string;

  @IsString()
  @IsOptional()
  @Expose()
  wattage: String;

  @IsNumber()
  @IsOptional()
  @Expose()
  guarantee: number;

  @IsString()
  @IsOptional()
  @Expose()
  description: string;

  @IsString()
  @IsOptional()
  @Expose()
  feature: string;
}
