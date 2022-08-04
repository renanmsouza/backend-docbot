import { Injectable, Response } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { response } from 'express';
import { UsuarioSistema } from 'src/admin/UsuarioSistema/usuarioSistema.entity';
import { UsuarioSistemaService } from 'src/admin/UsuarioSistema/usuarioSistema.service';
import { Login } from 'src/classes/login.class';
import { comparaHashStrings } from 'src/utils/bcrypt';
import { PayloadInterface } from './interfaces/payload.interface';

@Injectable()
export class AuthService { 
    constructor(
        private readonly usuarioSistemaService: UsuarioSistemaService,
        private jwtService: JwtService
    ){}

    public async validaUsuario(usuario: string, senha: string): Promise<Login> {
        const usuarioSisterma = await this.usuarioSistemaService.findByUsuario(usuario);

        const payload: PayloadInterface = {
            username: usuarioSisterma.usuario,
            sub: usuarioSisterma.id
        }

        if (usuarioSisterma && comparaHashStrings(senha, usuarioSisterma.senha)) {
            return new Login(
                usuarioSisterma,
                this.jwtService.sign(payload),
                200,
                'Login executado com sucesso'
            )
        } else {
            return new Login(
                null,
                '',
                401,
                'Não Autorizado'
            )
        }
    }
}
