import { Module } from '@nestjs/common';
import { EmailModule } from 'src/email/email.module';
import { PrismaService } from 'src/prisma.service';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { EmailService } from 'src/email/email.service';

@Module({
  imports:[EmailModule],
  controllers: [UsersController],
  providers: [UsersService, PrismaService, EmailService],
})
export class UsersModule {}
