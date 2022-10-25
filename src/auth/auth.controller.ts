import { Body, Controller, Post } from '@nestjs/common';
import { LogisticsController } from 'src/logistics/logistics.controller';

@Controller('auth')
export class AuthController {

  @Post('login')
  async authLogin(@Body() req) {
    const {login, password} = req;
    return this.authService.authLogin(login, password);

 }
} 