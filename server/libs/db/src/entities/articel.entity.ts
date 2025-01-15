import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity({ name: 'articel' })
export class ArticelEntity {
  @PrimaryGeneratedColumn('increment', { comment: '文章id' })
  id: number;

  @Column({ type: 'varchar', length: 255, comment: '文章标题' })
  title: string;

  @Column({ type: 'text', comment: '文章内容' })
  content: string;

  @CreateDateColumn({ type: 'timestamptz', comment: '创建时间' })
  created_at: Date;

  @CreateDateColumn({ type: 'timestamptz', comment: '更新时间' })
  updated_at: Date;
}
