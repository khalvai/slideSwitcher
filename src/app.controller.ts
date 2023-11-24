import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
import * as robotjs from 'robotjs';
import * as os from 'os';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  getHello() {
    return;
  }

  @Get('/next')
  next() {
    robotjs.keyTap('right');
  }
  @Get('/previous')
  privious() {
    robotjs.keyTap('left');
  }
}
