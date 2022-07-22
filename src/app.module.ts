import { ParametrosPrioridadeModule } from './ParametrosPrioridade/parametrosPrioridade.module';
import { UsuarioModule } from './Usuario/usuario.module';
import { PrioridadeModule } from './Prioridade/prioridade.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmpresaModule } from './empresa/empresa.module';

@Module({
  imports: [
    ParametrosPrioridadeModule,
    UsuarioModule,
    PrioridadeModule,
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
    })
  ],
  controllers: [
    AppController],
  providers: [
    AppService],
})
export class AppModule { }
