import { Expose } from 'class-transformer';
import { IsString, IsOptional } from 'class-validator';

export class CreateFirmDto {
  @IsString()
  @Expose()
  name: string;

  @Expose()
  @IsString()
  @IsOptional()
  description: string;
}

export class UpdateFirmDto {
  @Expose()
  @IsOptional()
  @IsString()
  name: string;

  @Expose()
  @IsString()
  @IsOptional()
  description: string;
}
