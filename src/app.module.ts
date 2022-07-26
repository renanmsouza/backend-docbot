import { CelularContatoModule } from './CelularContato/celularContato.module';
import { CelularResponsavelModule } from './CelularResponsavel/celularResponsavel.module';
import { EmailContatoModule } from './EmailContato/emailContato.module';
import { LogSistemaModule } from './LogSistema/logSistema.module';
import { LogMovimentacaoModule } from './LogMovimentacao/logMovimentacao.module';
import { EmailResponsavelModule } from './EmailResponsavel/emailResponsavel.module';
import { ExcecaoContatoModule } from './ExcecaoContato/excecaoContato.module';
import { ExcecaoResponsavelModule } from './ExcecaoResponsavel/excecaoResponsavel.module';
import { ContatoModule } from './Contato/contato.module';
import { ResponsavelModule } from './Responsavel/responsavel.module';
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
    CelularContatoModule,
    CelularResponsavelModule,
    EmailContatoModule,
    LogSistemaModule,
    LogMovimentacaoModule,
    EmailResponsavelModule,
    ExcecaoContatoModule,
    ExcecaoResponsavelModule,
    ContatoModule,
    ResponsavelModule,
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
