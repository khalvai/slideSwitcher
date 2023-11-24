import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import * as hbs from 'express-handlebars';
import { join } from 'path';
import express from 'express';
import * as os from 'os';
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  // app.use('/public', express.static(join(__dirname, '..', 'public')));

  app.setViewEngine('hbs');

  const networkInterfaces = os.networkInterfaces();
  const ipv4Addresses = [];

  Object.keys(networkInterfaces).forEach((interfaceName) => {
    const interfaces = networkInterfaces[interfaceName];

    interfaces.forEach((iface) => {
      if (iface.family === 'IPv4' && !iface.internal) {
        ipv4Addresses.push(iface.address);
      }
    });
  });

  console.log('IPv4 Addresses:', ipv4Addresses);
  await app.listen(3000);
}
bootstrap();
