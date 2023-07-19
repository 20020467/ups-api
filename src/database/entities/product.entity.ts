import { ProductStatus } from '../../../src/types';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('product')
export class Product {
  @PrimaryGeneratedColumn({ name: 'id', type: 'bigint', unsigned: true })
  id: number;

  @Column({ name: 'category_id', type: 'int', unsigned: true, nullable: false })
  categoryId: number;

  @Column({ name: 'firm_id', type: 'int', unsigned: true, nullable: false })
  firmId: number;

  @Column({ name: 'name', type: 'text', nullable: false })
  name: string;

  @Column({ name: 'code', type: 'varchar', nullable: false, unique: true })
  code: string;

  @Column({ name: 'status', type: 'tinyint', default: ProductStatus.STOCKING })
  status: ProductStatus;

  @Column({ name: 'origin', comment: 'xuất xứ', nullable: true })
  origin: string;

  @Column({
    name: 'wattage',
    type: 'varchar',
    comment: 'cong suat',
    nullable: true,
  })
  wattage: string;

  @Column({
    name: 'guarantee',
    type: 'int',
    comment: 'thoi han bao hanh (thang)',
    nullable: true,
  })
  guarantee: number;

  @Column({ name: 'description', type: 'text', nullable: true })
  description: string;

  @Column({ name: 'feature', type: 'text', nullable: true })
  feature: string;

  @Column({ name: 'create_at', type: 'datetime', nullable: true })
  createAt: Date;

  @Column({ name: 'update_at', type: 'datetime', nullable: true })
  updateAt: Date;
}
