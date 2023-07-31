import { ProductStatus } from 'src/types';
import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';

@Entity('productImage')
export class ProductImage {
  @PrimaryGeneratedColumn({
    name: 'id',
    type: 'int',
    unsigned: true,
  })
  id: number;

  @Column({
    name: 'product_id',
    type: 'int',
    unsigned: true,
    nullable: false,
  })
  productId: number;

  @Column({ name: 'product_image_url', type: 'varchar', nullable: false })
  url: string;
}
