import { Expose } from 'class-transformer';
import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsNumber,
  IsIn,
} from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  @IsNotEmpty()
  @Expose()
  name: string;

  @IsNumber()
  @IsOptional()
  @Expose()
  categoryParentId: number;

  @IsString()
  @IsOptional()
  @Expose()
  description: string;

  @IsString()
  @IsOptional()
  @Expose()
  benefit: string;
}

export class UpdateCategoryDto {
  @IsOptional()
  @IsString()
  @Expose()
  name: string;

  @IsNumber()
  @IsOptional()
  @Expose()
  categoryParentId: number;

  @IsString()
  @IsOptional()
  @Expose()
  description: string;

  @IsString()
  @IsOptional()
  @Expose()
  benefit: string;
}
