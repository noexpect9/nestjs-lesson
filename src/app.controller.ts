import { Controller, Get, Param, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/range')
  getNumbers(@Query('num') num: number): string[] {
    return this.appService.getNumbers(num);
  }

  @Post(':name')
  getApp(@Param('name') name: string) {
    return {
      data: {
        name: name,
        version: '0.0.1',
      },
      code: 200,
      message: 'success',
    };
  }
}
