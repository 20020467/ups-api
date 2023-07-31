import { Expose } from 'class-transformer';
import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsNumber,
  IsIn,
} from 'class-validator';

export class CreateInfoProductDto {
  @IsNumber()
  @IsNotEmpty()
  @Expose()
  productId: number;

  @Expose()
  @IsString()
  @IsOptional()
  cong_suat: string;

  @Expose()
  @IsString()
  @IsOptional()
  dai_dien_ap: string;

  @Expose()
  @IsString()
  @IsOptional()
  tan_so_vao: string;

  @Expose()
  @IsString()
  @IsOptional()
  so_pha: string;

  @Expose()
  @IsString()
  @IsOptional()
  dien_ap: string;

  @Expose()
  @IsString()
  @IsOptional()
  dien_ap_che_do_ac_quy: string;

  @Expose()
  @IsString()
  @IsOptional()
  tan_so_ra: string;

  @Expose()
  @IsString()
  @IsOptional()
  dang_song: string;

  @Expose()
  @IsString()
  @IsOptional()
  thoi_gian_chuyen_mach: string;

  @Expose()
  @IsString()
  @IsOptional()
  loai_ac_quy: string;

  @Expose()
  @IsString()
  @IsOptional()
  thoi_gian_sac: string;

  @Expose()
  @IsString()
  @IsOptional()
  bv_ngan_mach: string;

  @Expose()
  @IsString()
  @IsOptional()
  bv_xung: string;

  @Expose()
  @IsString()
  @IsOptional()
  canh_bao: string;

  @Expose()
  @IsString()
  @IsOptional()
  bv_qua_tai: string;

  @Expose()
  @IsString()
  @IsOptional()
  quan_ly_ac_quy: string;

  @Expose()
  @IsString()
  @IsOptional()
  cong_USB: string;

  @Expose()
  @IsString()
  @IsOptional()
  do_on_hd: string;

  @Expose()
  @IsString()
  @IsOptional()
  nhiet_do_hd: string;

  @Expose()
  @IsString()
  @IsOptional()
  do_am_hd: string;

  @Expose()
  @IsString()
  @IsOptional()
  he_so_cong_suat: string;

  @Expose()
  @IsString()
  @IsOptional()
  kich_thuoc: string;

  @Expose()
  @IsString()
  @IsOptional()
  trong_luong: string;
}

export class UpdateInfoProductDto {
  @Expose()
  @IsNumber()
  @IsOptional()
  productId: number;

  @Expose()
  @IsString()
  @IsOptional()
  cong_suat: string;

  @Expose()
  @IsString()
  @IsOptional()
  dai_dien_ap: string;

  @Expose()
  @IsString()
  @IsOptional()
  tan_so_vao: string;

  @Expose()
  @IsString()
  @IsOptional()
  so_pha: string;

  @Expose()
  @IsString()
  @IsOptional()
  dien_ap: string;

  @Expose()
  @IsString()
  @IsOptional()
  dien_ap_che_do_ac_quy: string;

  @Expose()
  @IsString()
  @IsOptional()
  tan_so_ra: string;

  @Expose()
  @IsString()
  @IsOptional()
  dang_song: string;

  @Expose()
  @IsString()
  @IsOptional()
  thoi_gian_chuyen_mach: string;

  @Expose()
  @IsString()
  @IsOptional()
  loai_ac_quy: string;

  @Expose()
  @IsString()
  @IsOptional()
  thoi_gian_sac: string;

  @Expose()
  @IsString()
  @IsOptional()
  bv_ngan_mach: string;

  @Expose()
  @IsString()
  @IsOptional()
  bv_xung: string;

  @Expose()
  @IsString()
  @IsOptional()
  canh_bao: string;

  @Expose()
  @IsString()
  @IsOptional()
  bv_qua_tai: string;

  @Expose()
  @IsString()
  @IsOptional()
  quan_ly_ac_quy: string;

  @Expose()
  @IsString()
  @IsOptional()
  cong_USB: string;

  @Expose()
  @IsString()
  @IsOptional()
  do_on_hd: string;

  @Expose()
  @IsString()
  @IsOptional()
  nhiet_do_hd: string;

  @Expose()
  @IsString()
  @IsOptional()
  do_am_hd: string;

  @Expose()
  @IsString()
  @IsOptional()
  he_so_cong_suat: string;

  @Expose()
  @IsString()
  @IsOptional()
  kich_thuoc: string;

  @Expose()
  @IsString()
  @IsOptional()
  trong_luong: string;
}
