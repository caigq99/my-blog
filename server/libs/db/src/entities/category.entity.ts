import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity({ name: 'category' })
export class CategoryEntity {
  @PrimaryGeneratedColumn('increment', { comment: '分类id' })
  id: number;

  @Column({ type: 'varchar', length: 255, comment: '分类名称' })
  name: string;

  @Column({ type: 'varchar', length: 255, comment: '分类描述' })
  desc: string;

  @CreateDateColumn({ type: 'timestamptz', comment: '创建时间' })
  created_at: Date;

  @CreateDateColumn({ type: 'timestamptz', comment: '更新时间' })
  updated_at: Date;
}
