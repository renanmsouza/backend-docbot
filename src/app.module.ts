import { BaseClienteModule } from './admin/BaseCliente/baseCliente.module';
import { UsuarioSistemaModule } from './admin/UsuarioSistema/usuarioSistema.module';
import { AuthModule } from './auth/auth.module';
import { ClienteModule } from './admin/Cliente/cliente.module';
import { CelularContatoModule } from './entities/CelularContato/celularContato.module';
import { CelularResponsavelModule } from './entities/CelularResponsavel/celularResponsavel.module';
import { EmailContatoModule } from './entities/EmailContato/emailContato.module';
import { LogSistemaModule } from './entities/LogSistema/logSistema.module';
import { LogMovimentacaoModule } from './entities/LogMovimentacao/logMovimentacao.module';
import { EmailResponsavelModule } from './entities/EmailResponsavel/emailResponsavel.module';
import { ExcecaoContatoModule } from './entities/ExcecaoContato/excecaoContato.module';
import { ExcecaoResponsavelModule } from './entities/ExcecaoResponsavel/excecaoResponsavel.module';
import { ContatoModule } from './entities/Contato/contato.module';
import { ResponsavelModule } from './entities/Responsavel/responsavel.module';
import { ParametrosPrioridadeModule } from './entities/ParametrosPrioridade/parametrosPrioridade.module';
import { UsuarioModule } from './entities/Usuario/usuario.module';
import { PrioridadeModule } from './entities/Prioridade/prioridade.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmpresaModule } from './entities/Empresa/empresa.module';

@Module({
  imports: [
    BaseClienteModule,
    UsuarioSistemaModule,
    AuthModule,
    ClienteModule,
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
      "database": "cotton82_DB_DocBot_Admin",
      "entities": [
        "dist/admin/**/*.entity{.ts,.js}"
      ],
      "synchronize": false,
    },
    ),
    TypeOrmModule.forRootAsync({
      name: "cliente",
      useFactory: () => ({
        type: "mysql",
        host: "cottonsheep.com.br",
        port: 3306,
        username: "cotton82_admin",
        password: "Cottonsheep1793*",
        database: "cotton82_DB_DocBot_000000",
        entities: [
          "dist/entities/**/*.entity{.ts,.js}"
        ],
        synchronize: false,
      })
    },
    )
  ],
  controllers: [
    AppController],
  providers: [
    AppService],
})
export class AppModule { }
