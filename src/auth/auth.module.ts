import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './utils/constants';
import { JwtStrategy } from './strategies/jwt.strategy';
import { UsuarioSistema } from 'src/admin/usuario-sistema/entities/usuario-sistema.entity';
import { UsuarioSistemaService } from 'src/admin/usuario-sistema/usuario-sistema.service';

@Module({
    imports: [TypeOrmModule.forFeature([UsuarioSistema]),
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
        UsuarioSistemaService, 
        LocalStrategy,
        JwtStrategy
    ],
})
export class AuthModule { }
