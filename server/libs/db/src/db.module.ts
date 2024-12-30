import { Module } from '@nestjs/common';
import { DbService } from './db.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'admin',
      password: 'admin123456',
      database: 'blogdb',
      entities: [],
      synchronize: true, // Don't use this in production
      autoLoadEntities: true, // auto load entities
    }),
  ],
  providers: [DbService],
  exports: [DbService],
})
export class DbModule {}
