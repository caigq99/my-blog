import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { DbModule } from '@libs/db';
import { UserModule } from './user/user.module';

@Module({
  imports: [DbModule, UserModule],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
