import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Request } from "express";
import { JwtService } from "@nestjs/jwt";
import { PayloadInterface } from "src/auth/interfaces/payload.interface";

export function ClienteConnection(_req: Request): TypeOrmModuleOptions {
    let jwtService: JwtService;
    const auth = _req.headers.authorization.split(' ');
    const dataLogin = jwtService.decode(auth[1]) as PayloadInterface;

    let connection: TypeOrmModuleOptions = {
        type: "mysql",
        host: "cottonsheep.com.br",
        port: 3306,
        username: "cotton82_admin",
        password: "Cottonsheep1793*",
        database: "cotton82_DB_DocBot_" + dataLogin.sufixo,
        entities: [
          "dist/client/**/*.entity{.ts,.js}"
        ],
        synchronize: false,
      } 
      
    return connection;
}