import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsNumber,
  IsIn,
} from 'class-validator';

export class InfoProductDto {
  @IsString()
  @IsOptional()
  cong_suat: string;

  @IsString()
  @IsOptional()
  dai_dien_ap: string;

  @IsString()
  @IsOptional()
  tan_so_vao: string;

  @IsString()
  @IsOptional()
  so_pha: string;

  @IsString()
  @IsOptional()
  dien_ap: string;

  @IsString()
  @IsOptional()
  dien_ap_che_do_ac_quy: string;

  @IsString()
  @IsOptional()
  tan_so_ra: string;

  @IsString()
  @IsOptional()
  dang_song: string;

  @IsString()
  @IsOptional()
  thoi_gian_chuyen_mach: string;

  @IsString()
  @IsOptional()
  loai_ac_quy: string;

  @IsString()
  @IsOptional()
  thoi_gian_sac: string;

  @IsString()
  @IsOptional()
  bv_ngan_mach: string;

  @IsString()
  @IsOptional()
  bv_xung: string;

  @IsString()
  @IsOptional()
  canh_bao: string;

  @IsString()
  @IsOptional()
  bv_qua_tai: string;

  @IsString()
  @IsOptional()
  quan_ly_ac_quy: string;

  @IsString()
  @IsOptional()
  cong_USB: string;

  @IsString()
  @IsOptional()
  do_on_hd: string;

  @IsString()
  @IsOptional()
  nhiet_do_hd: string;

  @IsString()
  @IsOptional()
  do_am_hd: string;

  @IsString()
  @IsOptional()
  he_so_cong_suat: string;

  @IsString()
  @IsOptional()
  kich_thuoc: string;

  @IsString()
  @IsOptional()
  trong_luong: string;
}
