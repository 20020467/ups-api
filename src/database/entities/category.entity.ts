import { ProductStatus } from 'src/types';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('category')
export class Category {
  @PrimaryGeneratedColumn({ name: 'id', type: 'bigint', unsigned: true })
  id: number;

  @Column({ name: 'name', type: 'text', nullable: false })
  name: string;

  //parent;

  @Column({ name: 'description', type: 'text', nullable: true })
  description: string;

  @Column({ name: 'benefit', type: 'text', nullable: true })
  benefit: string;

  @Column({ name: 'create_at', type: 'datetime', nullable: true })
  createAt: Date;

  @Column({ name: 'update_at', type: 'datetime', nullable: true })
  updateAt: Date;
}
