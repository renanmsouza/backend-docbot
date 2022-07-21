import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmpresaModule } from './empresa/empresa.module';
import { EmpresaService } from './empresa/empresa.service';

@Module({
  imports: [
    EmpresaModule, 
    TypeOrmModule.forRoot({
      "type": "mysql",
      "host": "cottonsheep.com.br",
      "port": 3306,
      "username": "cotton82_admin",
      "password": "Cottonsheep1793*",
      "database": "cotton82_DbDocsToGo",
      "entities": ["dist/**/*.entity{.ts,.js}"],
      "synchronize": false
    })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
