import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('firm')
export class Firm {
  @PrimaryGeneratedColumn({ name: 'id', type: 'int', unsigned: true })
  id: number;

  @Column({ name: 'name', type: 'text', nullable: false })
  name: string;

  @Column({ name: 'description', type: 'text', nullable: true })
  description: string;

  @Column({ name: 'create_at', type: 'datetime', nullable: true })
  createAt: Date;

  @Column({ name: 'update_at', type: 'datetime', nullable: true })
  updateAt: Date;
}
