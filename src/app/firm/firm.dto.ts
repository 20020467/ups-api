import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsNumber,
  IsIn,
} from 'class-validator';

export class CreateFirmDto {
  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  description: string;
}

export class UpdateFirmDto {
  @IsOptional()
  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  description: string;
}
