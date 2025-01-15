import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity({ name: 'user' })
export class UserEntity {
  @PrimaryGeneratedColumn('increment', { comment: '用户id' })
  id: number;

  @Column({ type: 'varchar', length: 50, comment: '用户名' })
  user_name: string;

  @Column({ type: 'varchar', length: 50, comment: '用户密码' })
  password: string;

  @Column({ type: 'varchar', length: 50, comment: '用户邮箱' })
  email: string;

  @Column({
    type: 'varchar',
    default:
      'https://files.codelife.cc/wallhaven/full/39/wallhaven-39qg9y.jpg?x-oss-process=image/resize,limit_0,m_fill,w_2560,h_1440/quality,Q_92/format,webp',
    comment: '用户头像',
  })
  avatar_url: string;
  @CreateDateColumn({ type: 'timestamptz', comment: '创建时间' })
  created_at: Date;

  @CreateDateColumn({ type: 'timestamptz', comment: '更新时间' })
  updated_at: Date;

  @Column({
    type: 'enum',
    enum: [0, 1],
    default: 0,
    comment: '用户角色 ,0: normal, 1: admin',
  })
  role: number;
}
