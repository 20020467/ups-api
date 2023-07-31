import { ProductStatus } from 'src/types';
import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';

@Entity('infoProduct')
export class InfoProduct {
  @PrimaryGeneratedColumn({ name: 'id', type: 'bigint', unsigned: true })
  id: number;

  @PrimaryColumn({
    name: 'product_id',
    type: 'bigint',
    unsigned: true,
    nullable: false,
  })
  productId: number;

  @Column({ name: 'cong_suat', type: 'text', nullable: true })
  cong_suat: string;

  // thông số đầu vào
  @Column({ name: 'dai_dien_ap', type: 'text', nullable: true })
  dai_dien_ap: string;

  @Column({ name: 'tan_so_vao', type: 'text', nullable: true })
  tan_so_vao: string;

  @Column({ name: 'so_pha', type: 'text', nullable: true })
  so_pha: string;

  // thông số đầu ra
  @Column({ name: 'dien_ap', type: 'text', nullable: true })
  dien_ap: string;

  @Column({ name: 'dien_ap_che_do_ac_quy', type: 'text', nullable: true })
  dien_ap_che_do_ac_quy: string;

  @Column({ name: 'tan_so_ra', type: 'text', nullable: true })
  tan_so_ra: string;

  @Column({ name: 'dang_song', type: 'text', nullable: true })
  dang_song: string;

  @Column({ name: 'thoi_gian_chuyen_mach', type: 'text', nullable: true })
  thoi_gian_chuyen_mach: string;

  // Thông số ắc quy
  @Column({ name: 'loai_ac_quy', type: 'text', nullable: true })
  loai_ac_quy: string;

  @Column({ name: 'thoi_gian_sac', type: 'text', nullable: true })
  thoi_gian_sac: string;

  // Chức năng bảo vệ
  @Column({ name: 'bv_ngan_mach', type: 'text', nullable: true })
  bv_ngan_mach: string;

  @Column({ name: 'bv_xung', type: 'text', nullable: true })
  bv_xung: string;

  @Column({ name: 'canh_bao', type: 'text', nullable: true })
  canh_bao: string;

  @Column({ name: 'bv_qua_tai', type: 'text', nullable: true })
  bv_qua_tai: string;

  @Column({ name: 'quan_ly_ac_quy', type: 'text', nullable: true })
  quan_ly_ac_quy: string;

  // kết nối
  @Column({ name: 'cong_USB', type: 'text', nullable: true })
  cong_USB: string;

  //Môi trường hoạt động
  @Column({ name: 'do_on_hd', type: 'text', nullable: true })
  do_on_hd: string;

  @Column({ name: 'nhiet_do_hd', type: 'text', nullable: true })
  nhiet_do_hd: string;

  @Column({ name: 'do_am_hd', type: 'text', nullable: true })
  do_am_hd: string;

  @Column({ name: 'he_so_cong_suat', type: 'text', nullable: true })
  he_so_cong_suat: string;

  // Thông số vật lý
  @Column({ name: 'kich_thuoc', type: 'text', nullable: true })
  kich_thuoc: string;

  @Column({ name: 'trong_luong', type: 'text', nullable: true })
  trong_luong: string;

  @Column({ name: 'create_at', type: 'datetime', nullable: true })
  createAt: Date;

  @Column({ name: 'update_at', type: 'datetime', nullable: true })
  updateAt: Date;
}
