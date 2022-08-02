import { Injectable, Response } from '@nestjs/common';
import { response } from 'express';
import { UsuarioSistemaService } from 'src/admin/UsuarioSistema/usuarioSistema.service';
import { Login } from 'src/classes/login.class';
import { comparaHashStrings } from 'src/utils/bcrypt';

@Injectable()
export class AuthService { 
    constructor(
        private readonly usuarioSistemaService: UsuarioSistemaService
    ){}

    public async validaUsuario(usuario: string, senha: string): Promise<Login> {
        const usuarioSisterma = await this.usuarioSistemaService.findByUsuario(usuario);

        if (usuarioSisterma && comparaHashStrings(senha, usuarioSisterma.senha)) {
            return new Login(
                usuarioSisterma,
                'hash de autorização',
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
