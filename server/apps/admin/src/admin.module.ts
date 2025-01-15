import { Module } from '@nestjs/common';
import { DbModule } from '@libs/db';
import { UserModule } from './users/users.module';

@Module({
  imports: [DbModule, UserModule],
  controllers: [],
  providers: [],
})
export class AdminModule {}
