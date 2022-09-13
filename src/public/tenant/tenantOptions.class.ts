import { Inject, Injectable, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { Request } from 'express';
import { PayloadInterface } from 'src/auth/interfaces/payload.interface';
import { decodeToken } from 'src/auth/utils/functions';

@Injectable({ scope: Scope.REQUEST })
export class TenantOptions implements TypeOrmOptionsFactory {
  constructor(
    @Inject(REQUEST)
    private readonly request: Request,
  ) { }

  createTypeOrmOptions(): TypeOrmModuleOptions {    
    let connection: TypeOrmModuleOptions = {
      type: "mysql",
      host: "cottonsheep.com.br",
      port: 3306,
      username: "cotton82_admin",
      password: "Cottonsheep1793*",
      database: "cotton82_DB_DocBot_" + this.getSufixoFromToken(this.request.headers.authorization),
      entities: [
        "dist/client/**/*.entity{.ts,.js}"
      ],
      synchronize: false,
    }

    return connection;
  }

  getSufixoFromToken(token: string): string {
    let sufixo = '000000';
    console.log(token.split(' ')[1]);

    if ((token) && (token !== '')) {
      const dataLogin = decodeToken(token.split(' ')[1]) as PayloadInterface;
      sufixo = dataLogin.sufixo;
    }
    return sufixo;
  }

}
