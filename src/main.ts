import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as hbs from 'hbs';
import * as hbsUtils from 'hbs-utils';
import * as session from 'express-session'
import { resolve } from 'path';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(resolve('./src/public'));
  app.setBaseViewsDir(resolve('./src/views'));
  hbs.registerPartials(resolve('./src/views/layouts'));
  hbsUtils(hbs).registerWatchedPartials(resolve('./src/views/layouts'));
  app.setViewEngine('hbs');
  app.use(
    session({
      secret: 'nest-book',
      resave: false,
      saveUninitialized: false,
    })
  )
  app.use(function (req,res, next){
    res.locals.session = req.session
    next()
  })
  await app.listen(3000);
}
bootstrap();
