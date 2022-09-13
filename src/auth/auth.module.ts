import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './utils/constants';
import { JwtStrategy } from './strategies/jwt.strategy';
import { BaseClienteModule } from 'src/admin/base-cliente/base-cliente.module';
import { UsuarioSistemaModule } from 'src/admin/usuario-sistema/usuario-sistema.module';

@Module({
    imports: [
        BaseClienteModule,
        UsuarioSistemaModule,
        PassportModule,
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '1h' }
        })
    ],
    controllers: [
        AuthController,],
    providers: [
        AuthService,
        LocalStrategy,
        JwtStrategy
    ],
    exports: [
        AuthService,
    ]
})
export class AuthModule { }
