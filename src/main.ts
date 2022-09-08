import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder } from '@nestjs/swagger';
import { SwaggerModule } from '@nestjs/swagger/dist';
import * as session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('DocBot')
    .setDescription('Envie, receba e requisite Documentos')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.use(
    session({
      secret: 'shbser6t4b9ws8ret4hb',
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 60000
      }
    })
  )

  await app.listen(3000);
}
bootstrap();
