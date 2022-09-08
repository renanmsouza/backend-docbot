import { AuthModule } from './auth/auth.module';
import { ClienteModule } from './admin/Cliente/cliente.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './client/usuario/usuario.module';
import { ResponsavelModule } from './client/responsavel/responsavel.module';
import { ResponsaveisProjetoModule } from './client/responsaveis-projeto/responsaveis-projeto.module';
import { RequisicaoModule } from './client/requisicao/requisicao.module';
import { ProjetoModule } from './client/projeto/projeto.module';
import { PrioridadeModule } from './client/prioridade/prioridade.module';
import { ParametrosPrioridadeModule } from './client/parametros-prioridade/parametros-prioridade.module';
import { ExcecaoResponsavelModule } from './client/execao-responsavel/excecao-responsavel.module';
import { ExcecaoContatoModule } from './client/execao-contato/excecao-contato.module';
import { EmpresasUsuarioModule } from './client/empresas-usuario/empresas-usuario.module';
import { EmpresaModule } from './client/empresa/empresa.module';
import { EmailResponsavelModule } from './client/email-responsavel/email-responsavel.module';
import { EmailContatoModule } from './client/email-contato/email-contato.module';
import { DocumentoModule } from './client/documento/documento.module';
import { ContatosProjetoModule } from './client/contatos-projeto/contatos-projeto.module';
import { EnvioModule } from './client/envio/envio.module';
import { BaseClienteModule } from './admin/base-cliente/base-cliente.module';
import { UsuarioSistemaModule } from './admin/usuario-sistema/usuario-sistema.module';
import { CelularContatoModule } from './client/celular-contato/celular-contato.module';
import { CelularResponsavelModule } from './client/celular-responsavel/celular-responsavel.module';
import { ContatoModule } from './client/contato/contato.module';
import { GrupoContatoModule } from './client/grupo-contato/grupo-contato.module';

@Module({
  imports: [
    GrupoContatoModule,
    RequisicaoModule,
    EnvioModule,
    EmpresasUsuarioModule,
    DocumentoModule,
    ResponsaveisProjetoModule,
    ProjetoModule,
    BaseClienteModule,
    UsuarioSistemaModule,
    AuthModule,
    ClienteModule,
    CelularContatoModule,
    CelularResponsavelModule,
    EmailContatoModule,
    EmailResponsavelModule,
    ExcecaoContatoModule,
    ExcecaoResponsavelModule,
    ContatoModule,
    ResponsavelModule,
    ParametrosPrioridadeModule,
    UsuarioModule,
    PrioridadeModule,
    EmpresaModule,
    ContatosProjetoModule,
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
          "dist/client/**/*.entity{.ts,.js}"
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
