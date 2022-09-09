import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { JwtService } from "@nestjs/jwt";
import { PayloadInterface } from "src/auth/interfaces/payload.interface";

export function ClienteConnection(authToken: string): TypeOrmModuleOptions {
    let jwtService: JwtService;
    let sufixo = '000000';

    if ((authToken) && (authToken !== '')) {
      const dataLogin = jwtService.decode(authToken) as PayloadInterface;
      sufixo = dataLogin.sufixo;
    }
    
    let connection: TypeOrmModuleOptions = {
        type: "mysql",
        host: "cottonsheep.com.br",
        port: 3306,
        username: "cotton82_admin",
        password: "Cottonsheep1793*",
        database: "cotton82_DB_DocBot_" + sufixo,
        entities: [
          "dist/client/**/*.entity{.ts,.js}"
        ],
        synchronize: false,
      } 
      
    return connection;
}