import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { Module } from '@nestjs/common';
import { UsuarioSistemaService } from 'src/admin/UsuarioSistema/usuarioSistema.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioSistema } from 'src/admin/UsuarioSistema/usuarioSistema.entity';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './utils/LocalStrategy';

@Module({
    imports: [TypeOrmModule.forFeature([UsuarioSistema])
        , PassportModule],
    controllers: [
        AuthController,],
    providers: [
        AuthService,
        UsuarioSistemaService, 
        LocalStrategy
    ],
})
export class AuthModule { }
