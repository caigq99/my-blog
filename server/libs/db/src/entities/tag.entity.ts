import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity({ name: 'tag' })
export class TagEntity {
  @PrimaryGeneratedColumn('increment', { comment: '标签id' })
  id: number;

  @Column({ type: 'varchar', length: 255, comment: '标签名称' })
  name: string;

  @Column({ type: 'varchar', length: 255, comment: '标签颜色' })
  color: string;

  @CreateDateColumn({ type: 'timestamptz', comment: '创建时间' })
  created_at: Date;

  @CreateDateColumn({ type: 'timestamptz', comment: '更新时间' })
  updated_at: Date;
}
