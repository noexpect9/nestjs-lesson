import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';

const envFilePath = `.env.${process.env.NODE_ENV}`;
@Module({
  imports: [UserModule, ConfigModule.forRoot({
    isGlobal: true,
    envFilePath
  })],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule {}
